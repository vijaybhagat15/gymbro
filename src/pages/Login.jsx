import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    setTimeout(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (
        storedUser &&
        storedUser.username === formData.username &&
        storedUser.password === formData.password
      ) {
        localStorage.setItem('auth', 'true');
        setSuccess('Login successful!');
        setLoading(false);
        navigate('/'); // Redirect to homepage or another page
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="h-screen w-screen relative flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="\videos\your-background-video.mp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Login Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-6xl px-4">
        <div className="lg:flex-grow lg:mr-8 hidden lg:block">
          {/* Placeholder for additional content */}
        </div>
        <div className="w-full max-w-sm bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg border border-gray-500 mx-auto lg:mx-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-white">Login Here</h2>

            {/* Error or Success */}
            {error && (
              <div className="text-red-400 text-center space-y-2">
                <div>{error}</div>
                <button
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="text-blue-400 underline hover:text-blue-500 transition"
                >
                  Forgot Password?
                </button>
              </div>
            )}
            {success && <div className="text-green-400 text-center">{success}</div>}

            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-gray-300 font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-3 py-1.5 mt-1 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-gray-300 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-1.5 mt-1 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className={`w-full py-2 rounded-xl bg-orange-400 text-black hover:bg-orange-600 transition ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login Now'}
            </button>

            {/* Divider */}
            <div className="flex items-center my-2">
              <div className="flex-grow h-px bg-gray-600"></div>
              <span className="px-2 text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>

            {/* Social Buttons */}
            <button className="flex items-center justify-center w-full py-1.5 mb-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition text-sm">
              Login with Google
            </button>
            <button className="flex items-center justify-center w-full py-1.5 rounded-xl bg-blue-800 hover:bg-blue-900 text-white transition text-sm">
              Login with Facebook
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
