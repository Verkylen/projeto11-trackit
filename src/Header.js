import styled from "styled-components";
import Brand from "./Brand.svg";

export default function Header() {
    return (
        <HeaderStyles>
            <h1>TrackIt</h1> 
            <img src={Brand}/>
        </HeaderStyles> 
    );
}

const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 70px;
    padding: 0 18px;
    background-color: #126BA5;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    }
`;