import styled from "styled-components";

const Button = styled.button`

    width: 100%;
    height: 45px;

    background-color: #52B6FF;

    border-radius: 4.65px;

    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;

    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    :disabled {
        
        opacity: 0.7;
        
    }

`

export default Button;