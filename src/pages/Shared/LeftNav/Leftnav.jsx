import React, { useEffect, useState } from 'react';

const Leftnav = () => {
    const [catagorieds , setCatagorieds] = useState([]);
    useEffect(()=>{
        fetch('../../../../public/data/catagories.json')
        .then(res => res.json())
        .then(data => setCatagorieds(data))
        .catch(error => console.error(error))
    },[])
    console.log(catagorieds)
    return (
        <div>
            <h2>Left Navigation</h2>
        </div>
    );
};

export default Leftnav;