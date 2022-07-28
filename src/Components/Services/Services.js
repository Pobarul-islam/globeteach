import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setService ] = useState([])
    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className='mt-10 mb-5 ml-7 service-container1'>
            <h2 className="serviceheading">Services</h2>
            <h2 className="serviceheading">We provides services to our clients</h2>
            <div className='service-container'>
            {
                services.map(service => <Service
                    key={service}
                    service={service}
                >
                    
                </Service>)
            }
           </div>
        </div>
    );
};

export default Services;