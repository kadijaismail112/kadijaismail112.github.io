import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { useConfig } from '../../hooks/useConfig';

const BlogList: React.FC = () => {
  const { config, loading } = useConfig();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
          <Link
            to="/admin/blog/new"
            className="flex items-center gap-2 px-4 py-2 bg-coral-600 text-white rounded-lg hover:bg-coral-700 transition-colors"
          >
            <PlusCircle size={20} />
            New Post
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {config?.blog.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{post.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button
                          className="text-coral-600 hover:text-coral-900"
                          onClick={() => console.log('Edit:', post.id)}
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900"
                          onClick={() => console.log('Delete:', post.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;