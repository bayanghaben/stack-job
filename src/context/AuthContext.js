import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
const AUTH_ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGESITER",
};
const initialState = {
  user: null,
  isAuthenticated: false,
};
function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS.REGISTER:
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    localStorage.getItem("users")
      ? localStorage.getItem("users")
      : localStorage.setItem("users", "[]");
    if (storedUser) {
      dispatch({ type: AUTH_ACTIONS.LOGIN, payload: storedUser });
    }
  }, []);

  const login = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const storedUser = storedUsers.find(
      (u) => u.email == email && u.password == password
    );
    if (!storedUser) {
      toast("Invalid email or password");
    }
    localStorage.setItem("user", JSON.stringify(storedUser));
    if (storedUser) dispatch({ type: AUTH_ACTIONS.LOGIN, payload: storedUser });
  };
  const register = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const newUser = {
      id: Date.now(),
      email,
      password,
    };
    storedUsers.push(newUser);
    localStorage.setItem("users", storedUsers);
    localStorage.setItem("user", JSON.stringify(newUser));

    dispatch({ type: AUTH_ACTIONS.REGISTER, payload: newUser });
  };
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };
  const value = {
    login,
    logout,
    register,
    user: state.user,
    isAuthenticated: state.isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
