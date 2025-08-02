import React from 'react';

const PostCard = ({ post, index = 0 }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x250/1f2937/6b7280?text=No+Image';
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Recent';
    }
  };

  const truncateText = (text, maxLength = 120) => {
    if (!text) return 'No description available';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2"
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Card Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <img
          src={post.image || post.avatar || 'https://via.placeholder.com/400x250/1f2937/6b7280?text=No+Image'}
          alt={post.title || post.name || 'Post image'}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Category Badge */}
        {post.category && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-sm font-medium">
            {post.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
          <span>{formatDate(post.createdAt || post.date)}</span>
          {post.author && (
            <>
              <span>•</span>
              <span>{post.author}</span>
            </>
          )}
          {post.readTime && (
            <>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </>
          )}
        </div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
          {post.title || post.name || 'Untitled Post'}
        </h3>

        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
          {truncateText(post.description || post.content || post.body)}
        </p>


        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md hover:bg-gray-600/50 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}


        <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400/50 transition-all duration-300 font-medium">
          Read More
        </button>
      </div>


      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

export default PostCard;