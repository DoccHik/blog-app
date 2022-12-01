import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Pages/HomePage/Home";
import NotFound from "./Pages/NotFoundPage/NotFound";
import Works from "./Pages/WorksPage/Works";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/works" element={<} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
