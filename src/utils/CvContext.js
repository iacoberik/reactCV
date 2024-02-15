import { createContext } from "react";

const CvContext = createContext({
  about: [],
  experience: [],
  education: [],
});

export default CvContext;
