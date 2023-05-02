import { Route, Routes } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Discover from "../Discover/Discover";
import { ParentAppCont } from "./Landing.styles";

const LandingPage = () => {
  return (
    <ParentAppCont>
      <Navigation />
      <Routes>
        <Route path="/Discover" element={<Discover />}></Route>
        <Route path="/" element={<Discover />}></Route>
      </Routes>
    </ParentAppCont>
  );
};

export default LandingPage;
