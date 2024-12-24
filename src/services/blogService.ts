import { supabase } from '../lib/supabase';
import type { BlogPost } from '../types/blog';

export const blogService = {
  async createPost(post: Omit<BlogPost, 'id'>) {
    const { data, error } = await supabase
      .from('posts')
      .insert([post])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async updatePost(id: string, post: Partial<BlogPost>) {
    const { data, error } = await supabase
      .from('posts')
      .update(post)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async deletePost(id: string) {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  async uploadImage(file: File) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `blog-images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('blog-assets')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('blog-assets')
      .getPublicUrl(filePath);

    return data.publicUrl;
  }
};