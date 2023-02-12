import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopPage, setIsTopPage] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <>
      <div className="bg-deep-blue app">
        <Navbar
          isTopPage={isTopPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </>
  );
}

export default App;
