import Brand from "./Brand.svg";
import styled from "styled-components";

export default function RegistrationPage() {
    return (
        <LoginStyles>
            <img src={Brand}/>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="senha"/>
                <input type="text" placeholder="nome"/>
                <input type="text" placeholder="foto"/>
                <input type="submit" value="Cadastrar"/>
            </form>
            <p>Já tem uma conta? Faça login!</p>
        </LoginStyles>
    );
}

const LoginStyles = styled.main`
    margin-top: 68px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 32.62px;
    }

    form {
        width: 303px;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 6px;

        input:nth-of-type(-n+4) {
            width: 100%;
            height: 45px;
            padding-left: 11px;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
            outline: none;

            &::placeholder {
                color: #DBDBDB;
            }
        }

        input:last-of-type {
            width: 100%;
            height: 45px;
            border: none;
            border-radius: 5px;
            background-color: #52B6FF;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 20.976px;
            line-height: 26px;
            text-align: center;
            color: #FFFFFF;
        }
    }

    p {
        margin-top: 25px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-decoration: underline;
        color: #52B6FF;
    }
`;