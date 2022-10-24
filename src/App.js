import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import GlobalStyle from "./GlobalStyle";
import RegistrationPage from "./RegistrationPage";
import HabitsPage from "./HabitsPage";
import TodayPage from "./TodayPage";
import HistoryPage from "./HistoryPage";
import UserDataProvider from "./Context";

function App() {
    return (
        <>
            <GlobalStyle/>
            <UserDataProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/cadastro" element={<RegistrationPage/>}/>
                        <Route path="/habitos" element={<HabitsPage/>}/>
                        <Route path="/hoje" element={<TodayPage/>}/>
                        <Route path="/historico" element={<HistoryPage/>}/>
                    </Routes>
                </BrowserRouter>
            </UserDataProvider>
        </>
    );
}

export default App;
