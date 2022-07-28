import React from 'react';
import vector from '../../assets/img/Vector.png'
import './WelcomeToGlobe.css'
import ellipse1 from '../../assets/img/Ellipse1.png'
import ellipse2 from '../../assets/img/Ellipse2.png'
import ellipse3 from '../../assets/img/Ellipse3.png'
import ellipse4 from '../../assets/img/Ellipse4.png'
import ellipse5 from '../../assets/img/Ellipse6.png'
const WelcomeToGlobe = () => {
    return (
        <div className='teachbody'>
            <div class="hero min-h-screen">
            
  <div class="hero-content flex-col lg:flex-row-reverse">


        <div className='vectorBox'>
            <img className='ellipse1' src={ellipse1} alt="" />
          
        </div>
    <div>
      <h1 class="text-5xl font-bold heading">Welcome to</h1>
      <h1 class="text-5xl font-bold heading2">Globetech</h1>
      <p class="py-6 infotext">We are committed to deliver <span className='bestText'>best IT services</span>. <br /> Our Consultants have experience in working <br />with  clients. We have extensive experience in <br />  the software application space and also offer<br /> a  broad range and depth of technology.</p>
      <button class="btn btn-primary">Get Started</button>
      <button class="btn btn-primary ml-4">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default WelcomeToGlobe;