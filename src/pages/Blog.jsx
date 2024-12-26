import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Exercises for Building Strength',
    date: 'December 6, 2024',
    description: 'Discover the top exercises that will help you build muscle and strength efficiently.',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Nutrition Tips for Gym Enthusiasts',
    date: 'December 5, 2024',
    description: 'Learn how to fuel your body with the right nutrients to maximize your gym gains.',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    author: 'Jane Smith',
  },
  {
    id: 3,
    title: 'The Best Gym Equipment for Home Workouts',
    date: 'December 4, 2024',
    description: 'Explore the best gym equipment you can use at home for effective workouts.',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    author: 'Mark Johnson',
  },
  {
    id: 4,
    title: 'How to Stay Motivated to Work Out Consistently',
    date: 'December 3, 2024',
    description: 'Get tips on how to stay motivated and consistent with your gym routine.',
    profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
    author: 'Emily Davis',
  },
  {
    id: 5,
    title: 'The Importance of Recovery in Your Fitness Journey',
    date: 'December 2, 2024',
    description: 'Understand the importance of rest and recovery to avoid injury and improve performance.',
    profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
    author: 'Chris Lee',
  },
  {
    id: 6,
    title: 'Choosing the Right Supplements for Your Goals',
    date: 'December 1, 2024',
    description: 'Explore the best supplements to support your fitness goals and enhance performance.',
    profileImage: 'https://randomuser.me/api/portraits/men/6.jpg',
    author: 'Sarah Williams',
  },
];

export default function Blog() {
  return (
    <div className="relative font-sans">
      {/* Content */}
      <div className="relative z-10 container mx-auto py-12 px-6 bg-gradient-to-br to-gray-100 bg-opacity-70">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-12 font-serif">
          Explore Our Blog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-100 min-w-40 shadow-md rounded-3xl p-2 hover:shadow-2xl hover:scale-105 border-2 border-orange-100 hover:border-orange-400 transition-transform h-auto"
            >
              <div className="p-6">
                {/* Profile Section */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={post.profileImage}
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-600">{post.author}</p>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </div>
                </div>

                {/* Post Title and Description */}
                <h2 className="text-2xl font-semibold text-gray-800 font-serif">{post.title}</h2>
                <p className="mt-4 text-gray-700 font-sans">{post.description}</p>

                {/* Link to read more */}
                {/* <Link
                  to={`/blog/${post.id}`}
                  className="mt-6 inline-block text-blue-600 font-semibold text-lg hover:text-blue-800 transition"
                >
                  Read More
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
