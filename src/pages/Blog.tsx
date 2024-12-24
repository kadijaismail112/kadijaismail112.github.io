import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import type { BlogPost } from '../types/config';

interface BlogProps {
  posts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <>
      <Helmet>
        <title>Blog - Portfolio</title>
        <meta name="description" content="Read my latest blog posts about software development and education" />
      </Helmet>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">Blog</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-coral-600">
                    {post.title}
                  </Link>
                </h2>
                <time className="text-gray-500 text-sm mb-4 block">{post.date}</time>
                <p className="text-gray-600">{post.preview}</p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-block mt-4 text-coral-600 hover:text-coral-700"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;