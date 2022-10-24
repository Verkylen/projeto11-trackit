import { createContext, useState } from "react";

export const userDataContext = createContext({});

export default function UserDataProvider({children}) {
    const [userData, setUserData] = useState({});
    const [porcentage, setPorcentage] = useState(0);

    return (
        <userDataContext.Provider value={{userData, setUserData, porcentage, setPorcentage}}>
            {children}
        </userDataContext.Provider>
    );
}

