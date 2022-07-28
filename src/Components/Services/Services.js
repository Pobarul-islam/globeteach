import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setService ] = useState([])
    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h1>This is Service section {services.length}</h1>
        </div>
    );
};

export default Services;