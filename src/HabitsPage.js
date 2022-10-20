import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import Trash from "./Trash.svg";

export default function HabitsPage() {
    return (
        <HabitsStyles>
            <Header/>
            <section>
                <h2>Meus hábitos</h2>
                <button>+</button>
            </section>
            <form>
                <input type="text" placeholder="nome do hábito"/>
                <ul>
                    <li>D</li>
                    <li>S</li>
                    <li>T</li>
                </ul>
                <div>
                    <span>Cancelar</span>
                    <button>Salvar</button>
                </div>
            </form>
            <section>
                <div>
                    <div>
                        <h3>Ler 1 capítulo de livro</h3>
                        <img src={Trash}/>
                    </div>
                    <ul>
                        <li>D</li>
                        <li>S</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3>Ler 1 capítulo de livro</h3>
                        <img src={Trash}/>
                    </div>
                    <ul>
                        <li>D</li>
                        <li>S</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3>Ler 1 capítulo de livro</h3>
                        <img src={Trash}/>
                    </div>
                    <ul>
                        <li>D</li>
                        <li>S</li>
                    </ul>
                </div>
            </section>
            {/* <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </p> */}
            <Footer/>
        </HabitsStyles>
    );
}

const HabitsStyles = styled.div`
    margin: 70px 0;
    width: 100%;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
    overflow-y: scroll;

    section:nth-of-type(1) {
        margin-top: 22px;
        width: 339px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }

        button {
            width: 40px;
            height: 35px;
            padding-bottom: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #52B6FF;
            border: none;
            border-radius: 4.63636px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 26.976px;
            color: #FFFFFF;
        }
    }

    form {
        margin-top: 20px;
        padding: 18px 18px 0;
        width: 340px;
        height: 180px;
        border-radius: 5px;
        background-color: #FFFFFF;
        flex-shrink: 0;

        input {
            margin-bottom: 8px;
            width: 100%;
            height: 45px;
            padding-left: 11px;
            border: 1px solid #D5D5D5;
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

        ul {
            margin-bottom: 29px;
            column-gap: 4px;
            display: flex;

            li {
                width: 30px;
                height: 30px;
                background: #FFFFFF;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Lexend Deca', sans-serif;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: #DBDBDB;
            }
        }

        div {
            column-gap: 23px;
            display: flex;
            justify-content: end;
            align-items: center;

            span {
                font-family: 'Lexend Deca', sans-serif;
                font-weight: 400;
                font-size: 15.976px;
                line-height: 20px;
                text-align: center;
                color: #52B6FF;
            }

            button {
                width: 84px;
                height: 35px;
                border: none;
                border-radius: 4.63636px;
                background-color: #52B6FF;
                font-family: 'Lexend Deca', sans-serif;
                font-weight: 400;
                font-size: 15.976px;
                line-height: 20px;
                text-align: center;
                color: #FFFFFF;
            }
        }
    }

    section:nth-of-type(2) {
        margin-top: 20px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        width: 340px;

        div {
            width: 340px;
            height: 91px;
            padding: 11px 10px 0 14px;
            background-color: #FFFFFF;
            border-radius: 5px;

            div {
                margin-bottom: 8px;
                width: 100%;
                height: fit-content;
                padding: 0;
                display: flex;
                justify-content: space-between;

                h3 {
                    font-family: 'Lexend Deca', sans-serif;
                    font-weight: 400;
                    font-size: 19.976px;
                    line-height: 25px;
                    color: #666666;
                }
            }

            ul {
            margin-bottom: 29px;
            column-gap: 4px;
            display: flex;

                li {
                    width: 30px;
                    height: 30px;
                    background: #FFFFFF;
                    border: 1px solid #D5D5D5;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Lexend Deca', sans-serif;
                    font-weight: 400;
                    font-size: 19.976px;
                    line-height: 25px;
                    color: #DBDBDB;
                }
            }
        }
    }

    p {
        margin-top: 28px;
        width: 339px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;