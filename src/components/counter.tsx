import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-10 bg-blue-500">
      <p>New text !</p>
      <p>{count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}
