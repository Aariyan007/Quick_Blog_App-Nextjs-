import React from 'react'

const leftbox_image = () => {
  return (
    <div className="relative w-2xl h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">

      <div className="absolute inset-0">
        <img 
          src="https://www.theladders.com/wp-content/uploads/coder_190517-800x450.jpg" 
          alt="Business Efficiency" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/20"></div>
      </div>
      

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
      

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-tight">
            Unlocking Business Efficiency
          </h3>
          <p className="text-blue-200 text-lg md:text-xl font-medium">
            with SaaS Solutions
          </p>
          

          <div className="w-0 group-hover:w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-4 transition-all duration-700 ease-out"></div>
        </div>
      </div>
      

      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500"></div>
    </div>
  )
}

export default leftbox_image