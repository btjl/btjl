import { HashRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/btjl" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
