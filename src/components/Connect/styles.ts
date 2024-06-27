import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 30rem;
    width: 100%;

    margin: 12.5rem auto;
    align-items: center;
    background-color: #f5f5f5;
    padding: 1.563rem 0;

    flex-direction: column;
    gap: 5px;
    border-radius: 4px;
`;

export const BoxInput = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
`

export const Title = styled.span`
    font-size: 20px;
    font-weight: bolder;
    font-family: "Inter";
`

export const SubTitle = styled.span`
    font-size: 14px;
    font-weight: bold;
    font-family: "Inter";
    color: #4d4d4d;
    letter-spacing: 2px;
`

export const Input = styled.input`
    border: 1px solid #e6e6e6;

    width: 350px;
    border-radius: 6px;
    padding: 10px 15px;

    &:focus {
        outline: 0;
        border-color: #a6a6a6;
    }
`;

export const Button = styled.button`
    display: flex;
    width: 200px;
    padding: 5px 12px;

    justify-content: center;
    align-items: center;
    
    color: #FFFFFF;
    border: 1px solid transparent;
    border-radius: 6px;
    background-color: #4d4dff;

    font-weight: bold;
    font-family: "Inter", sans-serif;

    cursor: pointer;

    &:hover {
        transition: 0.4s;
        background-color: #3333ff;
    }
`;