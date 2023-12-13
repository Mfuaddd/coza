import React, { useEffect, useState } from "react";

function useLocalStorage(key, value) {
  const [data, setData] = useState(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : value
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
}

export default useLocalStorage;
