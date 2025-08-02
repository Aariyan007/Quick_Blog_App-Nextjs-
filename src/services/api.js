
import { serverPostsAPI } from './serverapi';
import ClientHomePage from '../components/clientpage';

export const metadata = {
  title: 'Beyond UI - Home',
  description: 'Revolutionary UI/UX Design Platform',
};

export default async function HomePage() {
  // Fetch data on the server
  let initialPosts = [];
  let error = null;

  try {
    initialPosts = await serverPostsAPI.getAllPosts();
  } catch (err) {
    console.error('Failed to fetch initial posts:', err);
    error = err.message;
  }

  return <ClientHomePage initialPosts={initialPosts} error={error} />;
}

export const revalidate = 60;