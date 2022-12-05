import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext(); //creates the auth context

//the function below provides actions that can be performed on the state variable i.e. the user
export const authReducer = (state, action) => { 
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

//the function below wraps around the entire app and makes the state value available to it
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log("Authcontext state", state);

  //the useEffect checks if a user is present in localStorage. If so then it logs in automatically
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
