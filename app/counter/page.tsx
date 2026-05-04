"use client";

import Link from "next/link";
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="counterPage">
      <Link href="/">home</Link>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}
