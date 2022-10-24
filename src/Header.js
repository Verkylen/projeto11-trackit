import styled from "styled-components";
import { useContext } from "react";
import { userDataContext } from "./Context";

export default function Header() {
    const {userData} = useContext(userDataContext);

    return (
        <HeaderStyles>
            <h1>TrackIt</h1>
            <img src={userData.image} data-identifier="avatar"/>
        </HeaderStyles> 
    );
}

const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 191px;

    h1 {
        font-family: 'Playball', sans-serif;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`;