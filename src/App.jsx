import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";

//Version 1 of the website imports
import V1 from "./components/V1";
import V1ProjectPage from "./Pages/V1ProjectPage";
import V1Navbar from "./components/V1Navbar";
import HeikiBackground from "./components/HeikiBackground";
import SmoothScroll from "./components/SmoothScroll";

import Navbar from "./components/Navbar";
import About from "./components/About";
import V0 from "./components/V0";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <V1Navbar />
        <V1 />
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div>
        <V1Navbar />
        <V1ProjectPage />
      </div>
    ),
  },

  {
    path: "/version1",
    element: (
      <div>
        <Navbar />
        <V0 />
      </div>
    ),
  },

  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
]);

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen relative">
        <HeikiBackground
          primaryColor="#ededed"
          backgroundColor="#0a0a0a"
          pattern="grid"
          density="dense"
          opacity={0.2}
        />
        <div className="relative ">
          <RouterProvider router={router} />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
