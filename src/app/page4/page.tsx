"use client";
"use strict";
import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
        <div>
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            <a onClick={increment}  className="button-class">UP!</a>
            <a onClick={decrement}  className="button-class">DOWN!</a>
            <a onClick={reset}  className="button-class">Reset!</a>
        </div>
    )
}