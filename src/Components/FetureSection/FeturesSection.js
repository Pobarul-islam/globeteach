import React, { useEffect, useState } from 'react';
import FetureSection from '../FetureSection.js/FetureSection';
import './FeturesSection.css'
const FeturesSection = () => {
    const [fetures, setFetures] = useState([])
    useEffect(() => {
        fetch("fetures.json")
            .then(res => res.json())
        .then(data=>setFetures(data))
    },[])
    return (
        <div className='fetureCard'>
            <h2 className='text-center font-bold heading'>FETURES</h2>
            <h1 className='text-center text-4xl font-bold heading'>Our Fetures & Services</h1>
            <div className='fetures-container mt-10'>
            {
                fetures.map(feture => <FetureSection
                    key={feture}
                    feture={feture}
                >
                    
                </FetureSection>)
            }
          </div>
        </div>
    );
};

export default FeturesSection;