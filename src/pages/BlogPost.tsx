import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import type { BlogPost as BlogPostType } from '../types/config';

interface BlogPostProps {
  posts: BlogPostType[];
}

const BlogPost: React.FC<BlogPostProps> = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Blog</title>
        <meta name="description" content={post.preview} />
      </Helmet>
      <article className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <time className="text-gray-500 mb-8 block">{post.date}</time>
          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;