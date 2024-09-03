import React from 'react';
import SuccessStories from './SuccessStories';
import ClientFeedbackCarousel from './ClientFeedbackCarousel';
import Footer from './Footer';
import Banner from './Banner'
function App(){
  return(
    <div classname="App">
      <Banner />
      <SuccessStories />
      <ClientFeedbackCarousel />
      <Footer />
    </div>
  );
};
export default  App;
