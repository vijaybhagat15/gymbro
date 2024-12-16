import { useParams } from 'react-router-dom';

const blogData = [
  {
    id: 1,
    title: 'Top 5 Exercises for Building Strength',
    date: 'December 6, 2024',
    content: 'Here are the top 5 exercises for building strength... (full content of the post)',
  },
  {
    id: 2,
    title: 'Nutrition Tips for Gym Enthusiasts',
    date: 'December 5, 2024',
    content: 'In this post, we’ll cover the best nutrition tips for gym enthusiasts... (full content of the post)',
  },
  {
    id: 3,
    title: 'The Best Gym Equipment for Home Workouts',
    date: 'December 4, 2024',
    content: 'Looking for gym equipment for home? Here are the best tools to improve your workouts... (full content of the post)',
  },
];

export default function SingleBlogPost() {
  const { id } = useParams(); // Get the blog post ID from the URL
  const blogPost = blogData.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-4">{blogPost.title}</h1>
      <p className="text-sm text-gray-600 text-center">{blogPost.date}</p>
      <div className="mt-8 text-gray-800">{blogPost.content}</div>
    </div>
  );
}
