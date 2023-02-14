import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopPage, setIsTopPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopPage(false);
      }
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="bg-deep-blue app">
        <Navbar
          isTopPage={isTopPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <div className="w-5/6 mx-auto md:h-full">
          {isAboveMediumScreen && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          {/* Hero page  */}
          {/* setSelectedPage function just pathaya dichi for contact er jnno  */}
          <Landing setSelectedPage={setSelectedPage} />
        </div>
        {/* Divider or horizontal  */}
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
        </div>
      </div>
    </>
  );
}

export default App;
