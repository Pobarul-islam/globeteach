import React, { useEffect, useState } from 'react';
import FetureSection from '../FetureSection.js/FetureSection';

const FeturesSection = () => {
    const [fetures, setFetures] = useState([])
    useEffect(() => {
        fetch("fetures.json")
            .then(res => res.json())
        .then(data=>setFetures(data))
    },[])
    return (
        <div>
            <h2>FETURES</h2>
            <div>
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