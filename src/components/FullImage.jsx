import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
const FullImage = ({ isImageShowing, stopImageShowing, imageUrl }) => {
  return (
    <>
      {isImageShowing && (
        <div className="min-h-screen w-screen bg-opaque absolute top-0 flex justify-center items-center ">
          <FontAwesomeIcon
            className="text-gray-300 text-xl absolute top-0 right-0 mr-4 mt-4 cursor-pointer "
            icon={faTimesCircle}
            onClick={stopImageShowing}
          />
          {/* <i class="fas fa-times-circle"></i> */}
          <img src={imageUrl} className="opacity-100" alt="no image found"/>
        </div>
      )}
    </>
  );
};

export default FullImage;
