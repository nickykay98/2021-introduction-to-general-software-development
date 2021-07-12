import React, { useState } from 'react';
import "./Counter.css"

interface CounterProps {
    counterTitle?: string;
}

const Counter: React.FC<CounterProps> = ({counterTitle}) => {
    const [count, setCount] = useState(5);

    const decrement = () => {
        setCount(count - 1);
        console.log(count);
    }

    const increment = () => {
        setCount(count + 1);
        console.log(count);
    }

    return <div className="counter-wrapper">
        <div className="counter">
            <button className="counter-btn" onClick={decrement}>
                {"<"}
            </button>
            <div className="counter-label">
                {`${counterTitle}:  ${count}`}
            </div>
            <button className="counter-btn" onClick={increment}>
                {">"}
            </button>
        </div>
    </div>
}

export default Counter;