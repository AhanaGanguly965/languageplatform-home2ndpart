import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ClientFeedbackCarousel.css'; 

const ClientFeedbackCarousel = () => {
  // Configuration settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of profiles shown at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds per slide
    pauseOnHover: true,
    centerMode:true,
    centerPadding: '0',
  };

  // Sample client data
  const clients = [
    {
      name: 'John Doe',
      company: 'ABC Corp',
      feedback: 'Great experience working with this company. Their services exceeded our expectations!',
      image: 'john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      company: 'XYZ Inc',
      feedback: 'Professional and efficient. Highly recommend them for their commitment and quality.',
      image: 'jane-smith.jpg',
    },
    {
      name: 'Michael Johnson',
      company: 'DEF Ltd',
      feedback: 'Outstanding customer service and prompt delivery. I am truly impressed!',
      image: 'michael-johnson.jpg',
    },
  ];

  return (
    <div className="feedback-carousel">
      
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index} className="carousel-item">
            <div className="profile">
              <img src={client.image} alt={`${client.name} profile`} className="profile-image" />
              <h3>{client.name}</h3>
              <h4>{client.company}</h4>
              <p>{client.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientFeedbackCarousel;