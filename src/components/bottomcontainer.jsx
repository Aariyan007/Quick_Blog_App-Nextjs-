import React from 'react';

const BottomContainer = () => {
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://688cdc5ccd9d22dda5cebc30.mockapi.io/api/v1/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x300/1f2937/6b7280?text=No+Image';
  };

  return (
    <div className="relative bg-gradient-to-br  overflow-hidden">
      <div className="relative z-10 px-8 py-16">

        {isLoading && (
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-8 border border-white/10 animate-pulse">
                <div className="w-16 h-16 bg-gray-700 rounded-xl mb-6"></div>
                <div className="h-6 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="text-red-400 text-lg mb-4">Holy Shit Error</div>
            <p className="text-gray-400">{error}</p>
          </div>
        )}


        {!isLoading && !error && posts.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, index) => (
              <div
                key={post.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image || post.avatar || 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Beyond+UI'}
                    alt={post.title || post.name || 'Post'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title || post.name || 'Amazing Design Insights'}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                    {post.description || post.content || post.body || 'Discover cutting-edge design techniques and innovative approaches that will transform your creative workflow and elevate your projects to new heights.'}
                  </p>
                  
                  {/* Random text at bottom */}
                  <div className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <span>✨ Featured Post</span>
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                    <p className="mt-2 text-xs">
                      {[
                        "Trending in Design Community",
                        "Most Popular This Week", 
                        "Editor's Choice Selection",
                        "Community Favorite",
                        "Design Innovation Award"
                      ][index % 5]}
                    </p>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomContainer;