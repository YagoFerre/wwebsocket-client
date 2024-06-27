import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 70rem;
    width: 100%;
    height: 95vh;

    margin: 1rem auto 0;

    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export const ChatTitle = styled.span`
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    color: #2E2A40;

    padding: 0.125rem 0.625rem;
    border-radius: 8px;
    background-color: #FFFFFF;
    opacity: 0.8;

    justify-content: center;
    align-items: center;
`

export const ContainerSenderAction = styled.div`
    margin-top: 2.125rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.188rem;
`

export const SenderAction = styled.span`
    font-size: 0.75rem;
    color: #757575;
    font-weight: bold;
`

export const MessageContainer = styled.div`
    display: flex;
    width: 50rem;
    flex-direction: column;
    margin-top: 6.25rem;
    justify-content: start;
    gap: 0.313rem;
`

export const MessageBox = styled.div`
    display: flex;
    max-width: 40rem;
    flex-direction: column;
    gap: 1px;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;

    background-color: #2E3B5B;
`

export const MessageSender = styled.span`
    color: #FF3E46;
    font-size: 0.75rem;
    font-weight: bold;
`

export const MessageContent = styled.span`
    color: #FFFFFF;
    font-size: 0.875rem;
    text-align: start;
`

export const InputContainer = styled.div`
    display: flex;
    width: 41rem;
    justify-content: space-between;
    margin-top: 0.625rem;
    padding-bottom: 1rem;
`

export const Input = styled.input`
    width: 35rem;
    outline: 0;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;

    border: 1px solid #A6A6A6;

    color: #2E2A40;
    font-size: 0.75rem;

    &:focus {
        outline: 0;
        border-color: #A6A6A6;
    }

    &::placeholder {
        color: #A6A6A6;
    }
`

export const Button = styled.button`
    display: flex;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;

    background-color: #2E3B5B;
    color: #FFFFFF;
    font-weight: bold;
    font-family: "Inter", sans-serif;

    border: none;
    cursor: pointer;

    &:hover {
        transition: 0.2s;
        opacity: 0.9;
    }
`