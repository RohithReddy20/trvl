import '../../App.css';
import HeroSection from '../HeroSection';
import React,{  useEffect} from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import $ from 'jquery';

function Home() {

  const handlePageChange = () => {
    
    
      $(".navbar").css("background", "rgb(18,1,86)");
      $(".nav-menu").css("background", "rgb(18, 1, 86)");
    
  };

  useEffect(() => {
    handlePageChange();
  });
    return(
        <>
          <HeroSection />
          <Cards />
          <Footer />
        </>
    );
}

export default Home;