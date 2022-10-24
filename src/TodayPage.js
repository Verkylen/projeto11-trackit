import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Check from "./Check.svg"
import { userDataContext } from "./Context";
import Footer from "./Footer";
import Header from "./Header";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export default function TodayPage() {
    const {userData, porcentage, setPorcentage} = useContext(userDataContext);
    const [todaysHabits, setTodaysHabits] = useState([]);
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);
    const performed = Math.round(porcentage*(todaysHabits.length)/100);

    function handlePorcentage(savedHabitsData) {
        const doneQuantity = savedHabitsData.filter((element) => element.done).length;
        const percent = Math.round(doneQuantity*100/(savedHabitsData.length));
        setPorcentage(percent);
    }

    function request() {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const config = {headers: {'Authorization': `Bearer ${userData.token}`}};
        axios.get(URL, config)
            .then((savedHabits) => {setTodaysHabits(savedHabits.data); handlePorcentage(savedHabits.data);})
            .catch(() => navigate('/'));
    }

    useEffect(request, [refresh]);

    function mark(habitData, prefix) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitData.id}/${prefix}check`;
        const config = {headers: {'Authorization': `Bearer ${userData.token}`}};
        axios.post(URL, {}, config)
            .then(() => {setRefresh(!refresh)});
    }

    function ShowTodaysHabit(habitData) {
        const currentSequence = habitData.currentSequence;
        const highestSequence = habitData.highestSequence;
        const match = ( (currentSequence === highestSequence) && (currentSequence !== 0) );

        return (
            <TodaysHabitStyles key={habitData.id} done={habitData.done} match={match}>
                <div>
                    <h4>{habitData.name}</h4>
                    <p>
                        Sequência atual: <span>{currentSequence} dia{[0, 1].includes(currentSequence) ? '' : 's'}</span>
                    </p>
                    <p>
                        Seu recorde: <span>{highestSequence} dia{[0, 1].includes(highestSequence) ? '' : 's'}</span>
                    </p>
                </div>
                <div>
                    <img src={Check} onClick={() => {mark(habitData, habitData.done ? 'un' : '')}}/>
                </div>
            </TodaysHabitStyles>
        );
    }

    function Subtitle() {
        if (performed === 0) {
            return 'Nenhum hábito concluído ainda';
        } else {
            return `${Math.round(performed*100/(todaysHabits.length))}% dos hábitos concluídos`;
        }
    }

    return (
        <>
            <Header/>
            <TodayStyles nonePerformed={performed === 0}>
                <h2>{weekdays[dayjs().day()]}, {dayjs().format('DD/MM')}</h2>
                <h3><Subtitle/></h3>
                <section>
                    {todaysHabits.map(ShowTodaysHabit)}
                </section>
            </TodayStyles>
            <Footer/>
        </>
    );
}

const TodayStyles = styled.main`
    margin-top: 70px;
    width: 100%;
    height: calc(100vh - 140px);
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

    h2 {
        margin-top: 28px;
        width: 340px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    h3 {
        margin-bottom: 28px;
        width: 340px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: ${({nonePerformed}) => nonePerformed ? '#BABABA' : '#8FC549'};
    }

    section {
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
`;

const TodaysHabitStyles = styled.div`
    padding-top: 13px;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;

    &>div:nth-of-type(1) {
        margin-left: 15px;
        width: 240px;
        display: flex;
        flex-direction: column;

        h4 {
            margin-bottom: 7px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p {
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 12.976px;
            line-height: 16px;
            color: #666666;
        }

        p:nth-of-type(1) {
            span {
                color: ${({done}) => done ? '#8FC549' : '#666666'};
            }
        }

        p:nth-of-type(2) {
            span {
                color: ${({match}) => match ? '#8FC549' : '#666666'};
            }
        }
    }
    
    &>div:nth-of-type(2) {
        margin-right: 13px;
        width: 69px;
        height: 69px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        background-color: ${({done}) => done ? '#8FC549' : '#EBEBEB'};
    }
`;