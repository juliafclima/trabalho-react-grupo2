import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../../components/Header';

export default function ImageCarousel() {
  const [images, setImages] = useState([]);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [likes, setLikes] = useState(new Array(images.length).fill(0));

  const handleImageUpload = (e) => {
    const newImages = [...images];

    for (const element of e.target.files) {
      const file = element
      const imageUrl = URL.createObjectURL(file);
      newImages.push(imageUrl);
    }

    setImages(newImages);
    setFileInputKey(Date.now());
    setLikes(new Array(newImages.length).fill(0));
  };

  const handleLikeClick = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  return (
    <div className='album'>

      <Header />
      <input className='inputAlbum'
        type="file"
        accept="image/*"
        multiple
        key={fileInputKey}
        onChange={handleImageUpload}
      />

      {images.length > 0 && (
        <Carousel 
          showThumbs={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          emulateTouch={true}
          showStatus={false}
          showIndicators={true}
          centerMode={true}
          centerSlidePercentage={60}
          dynamicHeight={true}
          width="40%"
          stopOnHover={true}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Imagem ${index}`}
                className="carousel-imageAlbum"
              />
              <button className="like-buttonAlbum" onClick={() => handleLikeClick(index)}>
                Like
              </button>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}
