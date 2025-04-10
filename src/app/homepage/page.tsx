"use client";
import { useState } from "react";
import { isEven } from "../utils/isEven";

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
