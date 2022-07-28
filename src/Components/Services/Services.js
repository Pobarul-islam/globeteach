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
        <div className='mt-10 mb-5 ml-7'>
            <h2 className='text-center text-4xl font-bold'>Services</h2>
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