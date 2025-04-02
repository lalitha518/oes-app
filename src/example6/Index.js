import { useState } from "react";
import UserContext from "./context/UserContext";
import AppRouter from "./router/AppRouter";
import sample_data from "./data";


let Example6Home = () => {
    let [userData, setUserData] = useState(sample_data.user);
    let [loggedInUser, setLoggedInUser] = useState(null);

    return (
        <>
            <UserContext.Provider value={{userData, setUserData, loggedInUser, setLoggedInUser}}>
                <AppRouter />
            </UserContext.Provider>
        </>
    )
}

export default Example6Home;