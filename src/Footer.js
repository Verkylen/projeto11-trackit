import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <FooterStyles>
            <span>
                <Link to='/habitos'>Hábitos</Link>
            </span>
            <Link to='/hoje'>
                <div>Hoje</div>
            </Link>
            <span>
                <Link to='/historico'>Histórico</Link>
            </span>
        </FooterStyles>
    );
}

const FooterStyles = styled.footer`
    position: fixed;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 161px;

    span {
        width: fit-content;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        a {
            text-decoration: none;
            color: #52B6FF; 
        }
    }

    &>a {
        position: absolute;
        bottom: 10px;
        border-radius: 50%;
        text-decoration: none;

        div {
            width: 91px;
            height: 91px;
            border-radius: 50%;
            background-color: #52B6FF;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            color: #FFFFFF;
        }
    }
`;