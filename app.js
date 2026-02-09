import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <div className="app">
      <h1>Debounced Search</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>
        <strong>Search for:</strong> {debouncedText}
      </p>
    </div>
  );
}
