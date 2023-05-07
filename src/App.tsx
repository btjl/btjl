import { RouterProvider, createHashRouter } from "react-router-dom";
import {
  AboutPage,
  BlogPage,
  HomePage,
  ProjectPage,
  RootLayout,
} from "./pages";
import { ThemeContext } from "./contexts/theme-context";
import { useContext, useEffect } from "react";

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
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return <RouterProvider router={router} />;
}

export default App;
