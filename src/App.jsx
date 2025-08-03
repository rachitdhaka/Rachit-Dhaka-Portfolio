import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import V1 from "./components/V1";
import V0 from "./components/V0";
import V0ProjectPage from "./Pages/V0ProjectPage";
import FooterV0 from "./components/FooterV0";
import FooterV1 from "./components/FooterV1";
import Navbar from "./components/Navbar";
import About from "./components/About";
import V0Navbar from "./components/V0Navbar";
import HeikiBackground from "./components/HeikiBackground"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div> 
         <V0Navbar/>
        <V0/>
      </div>
        
    },
    {
      path:"/projects",
      element:
      <div>
        <V0Navbar/>
        <V0ProjectPage/>
      </div>
    },

    {
      path:"/version1",
      element:
        <div>
          <Navbar/>
          <V1/>
        </div>
    },

    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    }

  ]
)




function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <HeikiBackground
        primaryColor="#ededed"
        backgroundColor = "#0a0a0a"
        
        pattern="grid"
        density="dense"
        opacity={0.2}
      />
      <div className="relative ">
        <RouterProvider router={router} />
      </div>
    </div>
    
  )

}

export default App;
