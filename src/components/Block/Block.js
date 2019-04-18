import React from 'react';
import './Block.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import man1 from '../../images/man1.jpg';
import man2 from '../../images/man2.png';
import man3 from '../../images/man3.jpg';


const Block = () => {
  return(
    <Carousel
      className="carousel-head"
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      width="920px"
      interval={5000}
      infiniteLoop
      autoPlay>
      <div className="carousel">
        <div className="carousel-frame">
          <img src={man1} alt="bit" className="carousel-image"/>
        </div>
        <p className="customer-text">
          Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text 
          ever since the 1500s.
          <span className="customer-name">Raja Ram</span>
          <span className="customer-company">Tips World</span>
        </p>
      </div>
      <div className="carousel">
        <img src={man2} alt="bit" className="carousel-image"/>
        <p className="customer-text">
          Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text 
          ever since the 1500s.
          <span className="customer-name">Ravi Sharma</span>
          <span className="customer-company">ABC</span>
        </p>
      </div>
      <div className="carousel">
        <img src={man3} alt="bit" className="carousel-image2"/>
        <p className="customer-text">
          Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text 
          ever since the 1500s.
          <span className="customer-name">Nitin</span>
          <span className="customer-company">XYZ</span>
        </p>
      </div>
    </Carousel>
  );
}
export default Block;