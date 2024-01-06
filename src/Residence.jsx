import React, { useState, useEffect } from 'react';
import contact from './images/house9.jpg';
import house1 from './images/house1.jpg';
import house6 from './images/house6.jpg';
import house7 from './images/house7.jpg';
import House4 from './images/House4.jpg';
import house8 from './images/house8.jpg';
const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const showSlides = (n) => {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      let captionText = document.getElementById("caption");
  
      if (n > slides.length) {
        setSlideIndex(1);
      }
      if (n < 1) {
        setSlideIndex(slides.length);
      }
  
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      
      const prices = ['$50,000', '$75,000', '$60,000', '$80,000', '$90,000', '$100,000'];
      const descriptions = [
        'Beautiful house with a spacious backyard.',
        'Modern design with stunning architecture.',
        'Cozy home with scenic views of nature.',
        'Luxurious living in a prime location.',
        'Charming house with lots of natural light.',
        'Spectacular and open spaces.'
      ];
  
      // Set caption text based on current slide index
      captionText.innerHTML = `<strong>Price:</strong> ${prices[slideIndex - 1]}<br/><em>${descriptions[slideIndex - 1]}</em>`;
    };
  
    showSlides(slideIndex);

  }, [slideIndex]);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;

    if (newIndex > 6) {
      setSlideIndex(1); // Return to the first slide when reaching the last one
    } else if (newIndex < 1) {
      setSlideIndex(6); // Go to the last slide when reaching the first one
    } else {
      setSlideIndex(newIndex);
    }
  };
  const currentSlide = (n) => {
    setSlideIndex(n);
  };

 
  return (
    <div className="container1">
      {/* Your JSX for slides, buttons, and thumbnails */}
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="mySlides">
          <div className="numbertext">
            {index + 1} / 6
          </div>
          <img
            src={index === 0 ? contact : index === 1 ? house1 : index === 2 ? house6 : index === 3 ? house7: index ===4 ? House4 : index === 5 ? house8:''}
            style={{ width: '45%', height: '80%', borderRadius: '1rem', margin : '1rem 1rem .01rem', top: '40px',position: 'relative',left: '25%' }}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}

      {/* Next and previous buttons */}
      <button className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </button>

      {/* Image text */}
      <div className="caption-container">
        <p id="caption"></p>
      </div>

      {/* Thumbnail images */}
      <div className="row">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="column">
             <img
              className={`demo cursor${slideIndex === index + 1 ? ' active' : ''}`}
              src={
                index === 0
                  ? contact
                  : index === 1
                  ? house1
                  : index === 2
                  ? house6
                  : index === 3
                  ? house7
                  : index === 4
                  ? House4
                  : index === 5
                  ? house8
                  : ''
              }
              style={{ width: '100%', height: '50%' }}
              onClick={() => currentSlide(index + 1)}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
