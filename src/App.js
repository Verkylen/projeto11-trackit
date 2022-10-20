import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import GlobalStyle from "./GlobalStyle";
import RegistrationPage from "./RegistrationPage";
import HabitsPage from "./HabitsPage";

function App() {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/cadastro" element={<RegistrationPage/>}/>
                    <Route path="/habitos" element={<HabitsPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
