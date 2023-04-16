import { RouterProvider, createHashRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import RootLayout from "./pages/RootLayout";
import BlogPage from "./pages/Blog";

const router = createHashRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "blog", element: <BlogPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
