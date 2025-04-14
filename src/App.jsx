import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollingText from "./components/ScrollingText";
import Carousel from "./pages/Carousel";
import Card_move from "./pages/Card_move";
import Footer from "./components/Footer";
import RankerStudentCard from "./pages/RankerStudentCard";
import Home from "./pages/Home";
import Details from "./components/details";
import PlatformTrusted from "./components/PlatformTrusted";
import Results from "./components/Results";
import WitsApp from "./components/witsapp";
import Study from "./components/study";
import It from "./components/it";
import Popup from "./components/popup";
import TopHeader from "./components/topheader";
import StudentLogin from "./components/studentlogine";

const App = () => {
  return (
    <Router>
      <TopHeader />
      <Header />
      
      <Carousel />
      <ScrollingText />
      <Details />
      
      
      <Card_move />
      {/* < Popup /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login" element={<StudentLogin />} /> */}
      </Routes>
      <Results />
      <RankerStudentCard />
      <PlatformTrusted />
      <Study />
      <It />
      <StudentLogin />
      <Footer />
      <WitsApp />
    </Router>
  );
};

export default App;
