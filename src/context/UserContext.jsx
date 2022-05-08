import {createContext, useContext} from "react";

export const UserContext = createContext({
    token: false,
    setToken: () => {
    },
})
export const useUserContext = () => useContext(UserContext);

