import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || {});
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [image, setImage] = useState(user.profilePicture || '/images/default-profile.jpg');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(formData));
  }, [formData]);

  const handleLogout = () => {
    const confirmation = window.confirm('Are you sure you want to log out?');
    if (confirmation) {
      localStorage.removeItem('auth');
      alert('You have been logged out');
      navigate('/');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      if (file.size > MAX_FILE_SIZE) {
        alert('File size exceeds the 5MB limit. Please choose a smaller file.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const MAX_DIMENSION = 1024;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          let width = img.width;
          let height = img.height;

          if (width > height && width > MAX_DIMENSION) {
            height = (height * MAX_DIMENSION) / width;
            width = MAX_DIMENSION;
          } else if (height > MAX_DIMENSION) {
            width = (width * MAX_DIMENSION) / height;
            height = MAX_DIMENSION;
          }

          canvas.width = width;
          canvas.height = height;

          ctx.drawImage(img, 0, 0, width, height);

          const resizedImage = canvas.toDataURL('image/jpeg', 0.8);
          setImage(resizedImage);
          setFormData((prev) => ({ ...prev, profilePicture: resizedImage }));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setEditable(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-200 font-sans flex items-center justify-center py-10">
      <div className="max-w-5xl w-full bg-gray-100 shadow-xl rounded-lg overflow-hidden border-8 border-gray-200 sm:flex">
        <div className="sm:w-1/3 bg-custom-beige flex items-center justify-center">
          <div className="w-40 h-40 sm:w-full sm:h-full rounded-3xl overflow-hidden">
            <img src={image} alt="Profile" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="sm:w-2/3 p-6 max-w-3xl text-gray-700">
          {editable ? (
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              {['username', 'email', 'contactNumber', 'address'].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-gray-900 font-medium capitalize font-serif"
                  >
                    {field.replace('Number', ' Number')}
                  </label>
                  <input
                    id={field}
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field] || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="profilePicture"
                  className="block text-gray-600 font-medium font-serif"
                >
                  Profile Picture
                </label>
                <input
                  id="profilePicture"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-2 m-4 bg-green-600 text-white rounded-lg hover:bg-green-400 transition"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-orange-500 font-serif">
                Account Details
              </h2>
              {['username', 'email', 'contactNumber', 'address'].map((field) => (
                <div key={field} className="mb-4">
                  <label className="block font-medium text-gray-900 capitalize font-serif">
                    {field.replace('Number', ' Number')}
                  </label>
                  <p className="bg-gray-200 px-4 py-2 rounded-lg">{formData[field] || 'N/A'}</p>
                </div>
              ))}
              <button
                onClick={() => setEditable(true)}
                className="px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Edit Profile
              </button>
            </>
          )}
          <button
            onClick={handleLogout}
            className="px-3 mt-4 mx-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
