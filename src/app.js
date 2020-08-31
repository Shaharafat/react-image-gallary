import React, { useState, useEffect } from "react";
import "./style.css";

import ImageCard from "./components/ImageCard.jsx";
import Header from "./components/Header.jsx";
import FullImage from "./components/FullImage.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [term, setTerm] = useState("flower");
  const [fullSizeImageUrl, setFullSizeImageUrl] = useState("");
  const [isImageShowing, setImageShowingStatus] = useState(false);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=18102198-da8a6c8c36181c2547f57d982&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setImages(data.hits);
      });
  }, [term]);

  const searchKey = (keyword) => {
    setTerm(keyword);
  };

  const showImage = (id) => {
    images.map((image) => {
      if (image.id === id) {
        setFullSizeImageUrl(image.webformatURL);

        setImageShowingStatus(!isImageShowing);
      }
    });
  };

  const stopImageShowing = () => {
    setImageShowingStatus(false);
  };

  return (
    <>
      <div
        className={`bg-gray-100 min-h-screen ${
          isImageShowing ? "hidden" : "block"
        }`}
      >
        <Header setTerm={searchKey} />
        <div className="container min-h-full mx-auto">
          <div className="flex justify-center px-4 flex-wrap sm:justify-around sm:px-0 md:px-0 md:justify-around lg:px-0 lg:justify-around py-8 ">
            {isLoaded ? (
              images.length !== 0 ? (
                <React.Fragment>
                  {images.map((image) => (
                    <ImageCard
                      key={image.id}
                      {...image}
                      showImage={showImage}
                    />
                  ))}
                  <Footer />
                </React.Fragment>
              ) : (
                <button
                  type="button"
                  className="bg-indigo-600 text-white flex rounded-md py-2 px-4 text-3xl font-semibold "
                  disabled
                >
                  No match found!!!
                </button>
              )
            ) : (
              <button
                type="button"
                className="bg-indigo-600 text-white flex rounded-md py-2 px-4 text-3xl font-semibold "
                disabled
              >
                Loading...
              </button>
            )}
          </div>
        </div>
      </div>

      <FullImage
        isImageShowing={isImageShowing}
        imageUrl={fullSizeImageUrl}
        stopImageShowing={stopImageShowing}
      />
    </>
  );
};

export default App;
