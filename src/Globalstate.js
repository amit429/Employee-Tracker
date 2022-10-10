// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import UserAPI from "./APIs/userApi.js";

// export const GlobalState = createContext();

// export const DataProvider = ({ children }) => {
//   const [token, setToken] = useState(false);

//   const refreshToken = async () => {
//     const res = await axios.get("http://localhost:5000/user/refresh_token");
//     setToken(res.data.accesstoken);
//     console.log(res);
//   };

//   useEffect(() => {
//     const firstLogin = localStorage.getItem("firstLogin");
//     if (firstLogin) refreshToken();
//     refreshToken();
//   }, []);

//   const state = {
//     token: [token, setToken],
//     userAPI: UserAPI(token),
//   };
//   return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
// };
