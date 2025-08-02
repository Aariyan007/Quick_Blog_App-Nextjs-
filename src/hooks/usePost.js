import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postsAPI } from '../services/serverapi';


export const QUERY_KEYS = {
  POSTS: 'posts',
  POST: 'post',
};

// Get all posts
export const usePosts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: postsAPI.getAllPosts,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000, 
  });
};


export const usePost = (id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POST, id],
    queryFn: () => postsAPI.getPostById(id),
    enabled: !!id,
  });
};


export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postsAPI.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS] });
    },
    onError: (error) => {
      console.error('Error creating post:', error);
    },
  });
};


export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...postData }) => postsAPI.updatePost(id, postData),
    onSuccess: (data, variables) => {
      queryClient.setQueryData([QUERY_KEYS.POST, variables.id], data);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS] });
    },
    onError: (error) => {
      console.error('Error updating post:', error);
    },
  });
};

// Delete post mutation
export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postsAPI.deletePost,
    onSuccess: (data, deletedId) => {
      queryClient.setQueryData([QUERY_KEYS.POSTS], (oldData) =>
        oldData ? oldData.filter((post) => post.id !== deletedId) : []
      );
      queryClient.removeQueries({ queryKey: [QUERY_KEYS.POST, deletedId] });
    },
    onError: (error) => {
      console.error('Error deleting post:', error);
    },
  });
};