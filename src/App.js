import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./AppRoutes";
import NavBar from "./layout/NavBar/NavBar";
import SideMenu from "./layout/SideMenu/SideMenu";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <AppRoutes />
    </div>
  );
}

export default App;
