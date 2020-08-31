import React from "react";

const ImageCard = ({ webformatURL, user, views, downloads, likes, tags,id,showImage }) => {
  let tagArray = tags.split(",");
  const handleClick = () => {
    console.log(id);
    showImage(id);
  }
  return (
    <div className="w-full mx-2 my-4 bg-white rounded shadow-lg overflow-hidden flex flex-col sm:w-1/3 md:w-1/4 lg:w-1/5">
      <img
        src={webformatURL}
        alt="dummy"
        className="w-full m-h-4 cursor-pointer" 
        onClick={handleClick}
        />
      <div className="px-4 py-2">
        <p className="font-bold text-indigo-700 mb-3 mt-3">Photo by {user}</p>
        <p className="font-bold text-sm leading-relaxed text-gray-700 ">
          Views: {views}
        </p>
        <p className="font-bold text-sm leading-relaxed text-gray-700 ">
          Downloads: {downloads}
        </p>
        <p className="font-bold text-sm leading-relaxed text-gray-700 ">
          likes: {likes}
        </p>
      </div>
      <div className="px-1 mb-4 mt-auto flex flex-wrap">
        {tagArray.map((tag, index) => (
          <span
            key={index}
            className="ml-3 mb-3 font-semibold text-xs text-indigo-700 align-middle bg-indigo-200 px-2 py-1 rounded-full "
          >
            #{tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
