import React, { useState } from 'react';

export const Goku = () => {
    const [transformation, setTransformation] = useState("Kaioken");
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(prevCount => prevCount + 1);
        if (clickCount + 1 === 4) {
            setTransformation(prev => 
                prev === "Kaioken" ? "Super Saiyan" : "Kaioken"
            );
            setClickCount(0); 
        }
    };

    return (
        <div>
            <h3>{transformation}</h3>
            <button onClick={handleClick}>Transform</button>
        </div>
    );
};
