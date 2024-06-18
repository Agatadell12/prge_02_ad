import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import Services from "./services/Services";
import Map from "./map/Map";
import About from "./about/about";
import Database from "./database/Database";
import Dashboardunit from "./dashboardunit/Dashboardunit";
import Databasesolider from "./databasesolider/Databasesolider";
import Dashboardsolider from "./dashboardsolider/Dashboardsolider";
import Databaseworkers from "./databaseworkers/Databaseworkers";
import Dashboardworkers from "./dashboardworkers/Dashboardworkers";
import Mapsolider from "./mapsolider/Mapsolider";
import Mapworkers from "./mapworkers/Mapworkers";

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
  { path: "/services/mapsolider", element: <Mapsolider /> },
  { path: "/services/mapworkers", element: <Mapworkers /> },
  { path: "/about", element: <About /> },
  { path: "/database", element: <Database /> },
  { path: "/databasesolider", element: <Databasesolider /> },
  { path: "/databaseworkers", element: <Databaseworkers /> },
  { path: "/dashboardunit", element: <Dashboardunit /> },
  { path: "/dashboardsolider", element: <Dashboardsolider /> },
  { path: "/dashboardworkers", element: <Dashboardworkers /> },
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
