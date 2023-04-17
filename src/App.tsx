import { RouterProvider, createHashRouter } from "react-router-dom";
import {
  AboutPage,
  BlogPage,
  HomePage,
  ProjectPage,
  RootLayout,
} from "./pages";

const router = createHashRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "projects", element: <ProjectPage /> },
    ],
  },
]);

function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}

export default App;
