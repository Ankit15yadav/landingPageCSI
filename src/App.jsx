import React from "react";
import Navbar from "./components/common/Navbar";
import { BsSoundwave } from "react-icons/bs";
import Cardpages from "./pages/cardpages";
import { ThreeDCardDemo } from "./utils/test";
import CustomCursor from "./components/common/CustomCursor";
import ParaPages from "./pages/ParaPages";
import Footer from "./components/common/Footer";
// import { AnimatedTooltipP } from "./components/common/PopName";
import { AnimatedTooltipPreview } from "./utils/Popname";


function App() {
  return (
    <div className=" w-screen  flex flex-col gap-x-2 min-h-screen text-white  bg-regalBlue-900 cursor-none">
      <CustomCursor />
      <Navbar />
      <ThreeDCardDemo />
      <Cardpages />
      <ParaPages />
      <AnimatedTooltipPreview />
      <Footer />

    </div>
  );
}

export default App;
