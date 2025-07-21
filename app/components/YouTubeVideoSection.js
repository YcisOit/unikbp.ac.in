import React from "react";

const YouTubeVideoSection = () => {
  return (
    <div className="py-10 px-4 bg-gray-200 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#940e5c]">YouTube Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pl-3 lg:pl-10 lg:gap-1">
        <div className="relative pb-[56.25%] ">
          <iframe
            className="absolute top-0 left-0  lg:w-5/6  h-full border-10 border-white shadow-xl hover:scale-105 transform transition duration-300"
            src="https://www.youtube.com/embed/yV5WGUY9ruo" // Video 1
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0  lg:w-5/6 h-full border-10 border-white shadow-xl hover:scale-105 transform transition duration-300"
            src="https://www.youtube.com/embed/YrF2SAscU5U" // Video 2
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 lg:w-5/6 h-full border-10 border-white shadow-xl hover:scale-105 transform transition duration-300"
            src="https://www.youtube.com/embed/mErnHfTK0wE" // Video 3
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 lg:w-5/6 h-full border-10 border-white shadow-xl hover:scale-105 transform transition duration-300"
            src="https://www.youtube.com/embed/RjXDl9ODRKo" // Video 4
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideoSection;
