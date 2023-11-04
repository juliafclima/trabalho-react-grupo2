import React, { useState, useEffect } from 'react';
import './clock.css';

export default function Clock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDateTime = dateTime.toLocaleString();

  return (
    <div className="clock">
      {formattedDateTime}
    </div>
  );
}
