import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import Services from "./services/Services";
import Map from "./map/Map";
import About from "./about/about";
import Database from "./database/Database";
import Dashboardunit from "./dashboardunit/Dashboardunit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  { path: "/services/map", element: <Map /> },
  { path: "/about", element: <About /> },
  { path: "/database", element: <Database /> },
  { path: "/dashboardunit", element: <Dashboardunit /> },
]);
function App() {
  // const imie = "world";

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
