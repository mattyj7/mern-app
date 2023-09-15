import { createContext } from "react";

export const WorkoutContext = createContext();

const WorkoutsContextProvider = ({ children }) => {
  return <WorkoutContext.Provider>{children}</WorkoutContext.Provider>;
};
