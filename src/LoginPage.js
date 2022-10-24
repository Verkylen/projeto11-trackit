import Brand from "./Brand.svg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { userDataContext } from "./Context";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const {setUserData} = useContext(userDataContext);

    function success(response) {
        setUserData(response.data);
        navigate('/hoje');
    }

    function fail(e) {
        alert('Usuário e/ou senha inválidos!');
        setDisabled(false);

        e.target[0].value = '';
        e.target[1].value = '';
    }

    function login(e) {
        e.preventDefault();
        setDisabled(true);

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const data = {
            email: e.target[0].value,
            password: e.target[1].value};

        axios.post(URL, data)
            .then(success)
            .catch(() => fail(e));
    }

    return (
        <LoginStyles>
            <img src={Brand}/>
            <form onSubmit={login}>
                <input type="email" placeholder="email" pattern="[a-z0-9_.-]{1,}[@][a-z]{1,}[.][a-z]{1,}(?:|[.][a-z]{1,})" disabled={disabled} required/>
                <input type="password" placeholder="senha" disabled={disabled} required/>
                <button type="submit" disabled={disabled}>
                    {disabled ? <ThreeDots color="#FFFFFF"/> : 'Entrar'}
                </button>
            </form>
            <p>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </p>
        </LoginStyles>
    );
}

const LoginStyles = styled.div`
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

        input {
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

        button {
            width: 100%;
            height: 45px;
            border: none;
            border-radius: 5px;
            background-color: #52B6FF;
            display: flex;
            justify-content: center;
            align-items: center;
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

        a {
            color: #52B6FF;
        }
    }
`;