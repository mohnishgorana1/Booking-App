import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Hotel, List } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/hotels" element = {<List />} />
          <Route path="/hotels/:id" element = {<Hotel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
