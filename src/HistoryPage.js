import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function HistoryPage() {
    return (
        <>
            <Header/>
            <HistoryStyles>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoryStyles>
            <Footer/>
        </>
    );
}

const HistoryStyles = styled.main`
    margin-top: 70px;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        width: 340px;
        height: 29px;
        margin-top: 28px;
        margin-bottom: 17px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    p {
        width: 340px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;