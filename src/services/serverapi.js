import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// console.log('API_BASE_URL:', API_BASE_URL);


const serverApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const serverPostsAPI = {
  getAllPosts: async () => {
    try {
      const response = await serverApi.get('/posts');
      return response.data;
    } catch (error) {
      console.error('Server API Error:', error.message);
      throw error;
    }
  },

  getPostById: async (id) => {
    try {
      const response = await serverApi.get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Server API Error:', error.message);
      throw error;
    }
  },
};
