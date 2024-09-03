import React from 'react';
import './SuccessStories.css'; 
import image1 from './images/alpha-co.jpeg';
import image2 from './images/beta-co.jpeg';

const SuccessStories = () => {
  return (
    <section className="success-stories" >
      <h2>Success Stories</h2>

      {/* Section for Alpha Co */ }
      <div className="story animate-from-left">
      <img src={image1} alt="Alpha Co Success Story" />
      <div>
        <h3>Alpha Co</h3>
        <p>
          Alpha Co has achieved remarkable growth in the past year, scaling its operations by 200% while expanding into new markets. Their innovative approach to product development and customer satisfaction has set them apart in the industry.
        </p>
        </div>
      </div>

      {/* Section for Beta Co */}
      <div className="story animate-from-right">
        <img src={image2} alt="Beta Co Success Story" />
        <div>
        <h3>Beta Co</h3>
        <p>
          Beta Co has revolutionized the digital landscape by introducing cutting-edge solutions that cater to the modern consumer's needs. Their focus on sustainability and technology has earned them numerous accolades and recognition globally.
        </p>
        </div>
      </div>
      </section>
    
  );
};

export default SuccessStories;
