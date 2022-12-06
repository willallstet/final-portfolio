import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Iterative from "./pages/iterative";
import Redesign from "./pages/redesign";
import Soundtable from "./pages/soundtable";
import Development from "./pages/development";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="iterative" element={<Iterative />} />
          <Route path="redesign" element={<Redesign />} />
          <Route path="soundtable" element={<Soundtable />} />
          <Route path="development" element={<Development />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));