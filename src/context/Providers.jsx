import ItemProvider from "./ItemProvider";
import TogllerProvider from "./TogllerProvider";
import { BrowserRouter } from "react-router-dom";
const Providers = ({ children }) => {
  return (
    <BrowserRouter>
    <ItemProvider>
      <TogllerProvider>
        {children}
      </TogllerProvider>
    </ItemProvider>
    </BrowserRouter>
  );
};

export default Providers;