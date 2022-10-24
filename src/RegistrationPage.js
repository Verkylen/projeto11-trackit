import Brand from "./Brand.svg";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function RegistrationPage() {
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function fail(errorData, e) {
        switch (errorData.response.status) {
            case 409:
                alert('Usuário já cadastrado!');
                break;
            case 422:
                alert('Ao menos um campo de texto contém uma quantidade inválida de dígitos!');
                break;
        }

        setDisabled(false);

        for (let i = 0; i < e.target.length - 1; i++) {
            e.target[i].value = '';
        }
    }

    function register(e) {
        e.preventDefault();
        setDisabled(true);

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const data = {email: e.target[0].value,
                name: e.target[2].value,
                image: e.target[3].value,
                password: e.target[1].value};

        axios.post(URL, data)
            .then(() => navigate("/"))
            .catch((errorData) => fail(errorData, e));
    }

    return (
        <LoginStyles>
            <img src={Brand}/>
            <form onSubmit={register} disabled={disabled}>
                <input type="email" placeholder="email" pattern="[a-z0-9_.-]{1,}[@][a-z]{1,}[.][a-z]{1,}(?:|[.][a-z]{1,})" disabled={disabled} required/>
                <input type="password" placeholder="senha" disabled={disabled} required/>
                <input type="text" placeholder="nome" pattern="[A-Za-z0-9àâãéêèíóôõúü -]{1,}" disabled={disabled} required/>
                <input type="url" placeholder="foto" disabled={disabled} required/>
                <button type="submit" disabled={disabled}>
                    {disabled ? <ThreeDots color='#FFFFFF'/> : 'Cadastrar'}
                </button>
            </form>
            <p>
                <Link to="/">Já tem uma conta? Faça login!</Link>
            </p>            
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
        margin-bottom: 25px;
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
        margin-bottom: 25px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;

        a {
            text-decoration: underline;
            color: #52B6FF;
        }
    }
`;