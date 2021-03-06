import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';

import './Places.css'
const Places = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('https://vast-falls-32206.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])
    return (
        <div>
             <h2 className=" mt-5 text-primary">Tour Places Options</h2>
            <div id="places" className="place-container container">
                {
                    places.map(place => <Place
                        key={place._id}
                        place={place}
                    ></Place>)
                }
            </div>
        </div>
    );
};

export default Places;