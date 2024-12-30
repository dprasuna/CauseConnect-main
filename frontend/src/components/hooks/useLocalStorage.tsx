import { useState, useEffect } from "react";

export default function uselocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    // Check if storedValue is not null and is a valid JSON string
    if (storedValue) {
      try {
        return JSON.parse(storedValue);
      } catch (error) {
        console.error("Error parsing stored value:", error);
        return initialValue; // Return initial value in case of parsing error
      }
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    // Only store the value if it is valid (optional check)
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
