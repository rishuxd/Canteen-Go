import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = () => {
  const [user, setUser] = useState("");

  return (
    <DataContext.Provider value={{ user, setUser }}></DataContext.Provider>
  );
};

export default DataProvider;
