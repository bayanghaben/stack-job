import AddJob from "./pages/AddJob";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

export const routes = [
  {
    path: "/",
    component: <Home />,
    isHome: Home,
    protected: true,
  },
  {
    path: "/profile",
    component: <Profile />,
    protected: true,
  },
  {
    path: "/new-job",
    component: <AddJob />,
    protected: true,
  },
  {
    path: "/login",
    component: <Login />,
    protected: false,
  },
  {
    path: "/register",
    component: <Register />,
    protected: false,
  },
];
