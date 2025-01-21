"use client";
"use strict";
import { useEffect, useState } from "react";
export default function Counter() {
    const [fruit, setfruit] = useState('apple');
    
    const Banana = () => setfruit('banana');
    const Apple = () => setfruit('apple');
    const Orange = () => setfruit('orange');


    useEffect(() => {
        document.title = `Fruit: ${fruit}`;
    }
    )
    return (
        <div>
            <h1>Fruit</h1>
            <h2>Current fruit: {fruit}</h2>
            <a onClick={Banana}  className="button-class">Banana!</a>
            <a onClick={Apple}  className="button-class">Apple!</a>
            <a onClick={Orange}  className="button-class">Orange!</a>
        </div>
    )

}