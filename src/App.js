import React, { useState, useEffect } from 'react';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleChange = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleChange);
  });

  return (
    <div className="App">
      {windowWidth}
      hi
    </div>
  );
}
