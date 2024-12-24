import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useNavigate } from 'react-router-dom';
import { Save } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: string;
}

const BlogEditor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [preview, setPreview] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost: BlogPost = {
      id: title.toLowerCase().replace(/\s+/g, '-'),
      title,
      date: new Date().toISOString().split('T')[0],
      preview,
      content
    };

    try {
      // In a real application, this would be an API call
      console.log('New blog post:', newPost);
      // Redirect to blog list after successful submission
      navigate('/admin/blog');
    } catch (error) {
      console.error('Error saving blog post:', error);
    }
  };

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="preview" className="block text-sm font-medium text-gray-700 mb-1">
                Preview Text
              </label>
              <textarea
                id="preview"
                value={preview}
                onChange={(e) => setPreview(e.target.value)}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content (Markdown)
              </label>
              <MDEditor
                value={content}
                onChange={(value) => setContent(value || '')}
                preview="edit"
                height={400}
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-coral-600 text-white rounded-lg hover:bg-coral-700 transition-colors"
            >
              <Save size={20} />
              Save Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;