import { useState } from "react";
import UserContext from "./context/UserContext";
import AppRouter from "./router/AppRouter";
import sample_data from "./data";
import FooterComponent from "./static/Footer";

let Example6Home = () => {
    let [userData, setUserData] = useState(sample_data.user);
    let [loggedInUser, setLoggedInUser] = useState(null);

    return (
        <div className="main-container">
            <UserContext.Provider value={{ userData, setUserData, loggedInUser, setLoggedInUser }}>
                <div className="content">
                    <AppRouter /> {/* Main Page Content */}
                </div>
            </UserContext.Provider>
            <FooterComponent /> {/* Always at the Bottom */}
        </div>
    );
};

export default Example6Home;
