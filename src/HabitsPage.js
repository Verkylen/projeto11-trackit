import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import Trash from "./Trash.svg";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { userDataContext } from "./Context";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const weekdayLetters = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export default function HabitsPage() {
    const [disabled, setDisabled] = useState(false);
    const [clickedDays, setClickedDays] = useState([]);
    const [formDisplay, setFormDisplay] = useState(false);
    const [habits, setHabits] = useState([]);
    const {userData} = useContext(userDataContext);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    function request() {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {headers: {'Authorization': `Bearer ${userData.token}`}};
        axios.get(URL, config)
            .then((response) => setHabits(response.data))
            .catch(() => navigate('/'));
    }

    useEffect(request, [refresh]);

    function ShowWeekday(day, i, chosenDays) {
        return (
            <DayStyle key={i} selected={i in chosenDays} data-identifier="week-day-btn">{day}</DayStyle>
        );
    }

    function deleteHabit(habitData) {
        const confirmAnswer = window.confirm('Apagar hábito');

        if (confirmAnswer) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitData.id}`;
            const config = {headers: {'Authorization': `Bearer ${userData.token}`}};
            axios.delete(URL, config).then(() => setRefresh(!refresh));
        }
    }

    function ShowHabit(habitData) {
        const chosenDays = {};
        habitData.days.forEach(dayNumber => chosenDays[dayNumber] = null);

        return (
            <ShownHabitStyles key={habitData.id}>
                <div>
                    <h3 data-identifier="habit-name">{habitData.name}</h3>
                    <img src={Trash} onClick={() => deleteHabit(habitData)} data-identifier="delete-habit-btn"/>
                </div>
                <ul>
                    {weekdayLetters.map((day, i) => ShowWeekday(day, i, chosenDays))}
                </ul>
            </ShownHabitStyles>
        );
    }

    function handleClickedList(i) {
        if (!disabled) {
            if (clickedDays.includes(i)) {
                setClickedDays(clickedDays.filter(day => day !== i));
            } else {
                setClickedDays([...clickedDays, i]);
            }
        }
    }

    function FormWeekday(dayLetter, i) {
        return (
            <DayStyle onClick={() => handleClickedList(i)}
                               key={i}
                               selected={clickedDays.includes(i)}
                               data-identifier="week-day-btn">
                {dayLetter}
            </DayStyle>
        );
    }

    function success(e) {
        setFormDisplay(false);
        setDisabled(false);
        setClickedDays([]);
        e.target[0].value = '';
        setRefresh(!refresh);
    }

    function fail() {
        setDisabled(false);
        alert('Por favor, tente novamente. Sugere-se diminuir a quantidade de caracteres do nome do hábito.');
    }

    function submitHabit(e) {
        e.preventDefault();

        if ( (clickedDays.length !== 0) && (e.target[0].value !== '') ) {
            setDisabled(true);

            const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
            const data = {name: e.target[0].value, days: clickedDays};
            const config = {headers: {'Authorization': `Bearer ${userData.token}`}};

            axios.post(URL, data, config)
                .then(() => success(e))
                .catch(fail);
        } else {
            alert('Por favor, insira tanto o nome do hábito quanto os seus dias.');
        }
    }

    return (
        <>
            <Header/>
            <HabitsStyles formDisplay={formDisplay} withoutHabits={habits.length === 0}>
                <section>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => setFormDisplay(true) } data-identifier="create-habit-btn">+</button>
                </section>
                <form onSubmit={submitHabit}>
                    <input type="text"
                           placeholder="nome do hábito"
                           disabled={disabled}
                           data-identifier="input-habit-name"/>
                    <ul>
                        {weekdayLetters.map(FormWeekday)}
                    </ul>
                    <div>
                        <span onClick={() => setFormDisplay(false)} data-identifier="cancel-habit-create-btn">Cancelar</span>
                        <button type='submit' disabled={disabled} data-identifier="save-habit-create-btn">
                            {disabled ? <ThreeDots color='#FFFFFF'/> : 'Salvar'}
                        </button>
                    </div>
                </form>
                <section>
                    {habits.map(ShowHabit)}
                </section>
                <p data-identifier="no-habit-message">
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </HabitsStyles>
            <Footer/>
        </>
    );
}

const HabitsStyles = styled.div`
    margin-top: 70px;
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
        display: ${({formDisplay}) => formDisplay ? 'block' : 'none'};
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
                display: flex;
                justify-content: center;
                align-items: center;
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
        display: ${({withoutHabits}) => withoutHabits ? 'none' : 'flex'};
        flex-direction: column;
        row-gap: 10px;
        width: 340px;
    }

    p {
        display: ${({withoutHabits}) => withoutHabits ? 'block' : 'none'};
        margin-top: 28px;
        width: 339px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;

const ShownHabitStyles = styled.div`
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    ul {
        margin-bottom: 29px;
        column-gap: 4px;
        display: flex;
    }
`;

const DayStyle = styled.li`
    width: 30px;
    height: 30px;
    background-color: ${({selected}) => selected ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid;
    border-color: ${({selected}) => selected ? '#CFCFCF' : '#D5D5D5'};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${({selected}) => selected ? '#FFFFFF' : '#DBDBDB'};
`;