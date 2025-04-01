"use client";
import { useState } from "react";

export default function HomePage() {
    const [count, setCount] = useState<number>(0);

    function Increment() {
        setCount(count + 1);
    }
    function Decrement() {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Welcome</h1>
            <p>Count: {count}</p>
            <p>{isEven(count) ? "Even" : "Odd"}</p>
            <button className="" onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
}

export function isEven(number: number): boolean {
    return number % 2 === 0;
}