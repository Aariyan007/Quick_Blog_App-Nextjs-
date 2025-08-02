import React from 'react'

const rightbox = () => {
  return (
    <div className='w-80'>
      <h2 className='text-white text-xl font-semibold mb-6'>Other featured posts</h2>
      <div className='space-y-1'>
        <FeaturedPostItem
          image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          title="Revolutionizing industries through SaaS implementation"
        />
        <FeaturedPostItem
          image="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          title="Synergizing saas and UX design for elevating digital experiences"
        />
        <FeaturedPostItem
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          title="Navigating saas waters with intuitive UI and UX"
        />
        <FeaturedPostItem
          image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          title="Sculpting saas success - the art of UI and UX design"
        />
        <FeaturedPostItem
          image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          title="Transforming saas platforms - a UI/UX design odyssey"
        />
      </div>
    </div>
  )
}

function FeaturedPostItem({ image, title }) {
  return (
    <div className='flex gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-all duration-300 cursor-pointer group'>
      <div className='w-12 h-12 rounded-lg overflow-hidden flex-shrink-0'>
        <img 
          src={image} 
          alt={title} 
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' 
        />
      </div>
      <div>
        <p className='text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300'>
          {title}
        </p>
      </div>
    </div>
  );
}

export default rightbox