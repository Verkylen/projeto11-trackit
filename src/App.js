import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import GlobalStyle from "./GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
