export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          title: string;
          content: string;
          preview: string;
          date: string;
          author_id: string;
        };
        Insert: Omit<BlogPost, 'id'>;
        Update: Partial<BlogPost>;
      };
    };
  };
}

export type BlogPost = Database['public']['Tables']['posts']['Row'];