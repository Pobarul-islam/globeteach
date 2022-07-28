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
        <div className='mt-10 mb-5 ml-10'>
            <h2>FETURES</h2>
            <div className='fetures-container'>
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