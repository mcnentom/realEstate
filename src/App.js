import React,{ useState } from "react";
import Contact from "./Contact";
import General from "./General";
import Navbar from "./Navbar";
import Residence from "./Residence";
import Start from "./Start";
import Value from "./Value";


function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  return (
  <>
   <Navbar handleNavClick={handleNavClick} />
      <>
      {activeSection === "home" && <General />}
      {activeSection === "residence" && <Residence />}
      {activeSection === "value" && <Value />}
      {activeSection === "contact" && <Contact />}
      {activeSection === "get" && <Start />}
      </>
  </>
    )
  };

export default App;
