import React from 'react';
import FeturesSection from '../FetureSection/FeturesSection';
import Services from '../Services/Services';
import WelcomeToGlobe from '../WelcomeToGlobe/WelcomeToGlobe';


const Home = () => {
  return (
    <div>
      <WelcomeToGlobe></WelcomeToGlobe>
      <Services></Services>
      <FeturesSection></FeturesSection>
    </div>
  );
};

export default Home;