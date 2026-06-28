import { createContext, ReactNode } from "react";
import { useTrip } from "../hooks/useTrip";

// Create Context
export const GlobalContext = createContext<ReturnType<typeof useTrip> | null>(
  null,
);

// Provider Component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const tripContext = useTrip();

  return (
    <GlobalContext.Provider value={tripContext}>
      {children}
    </GlobalContext.Provider>
  );
};
