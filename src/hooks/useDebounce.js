import { useEffect, useState } from "react";

// Function to delay search box until the specified time has passed.
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Set debouncedValue to value (passed in) after the specified delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);


    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
