import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import Services from "./services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
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
