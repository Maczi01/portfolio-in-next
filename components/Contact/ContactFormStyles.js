import styled from "styled-components";

export const StyledTextarea = styled.textarea`
    display: block;
    width: 100%;
    background-color: ${({theme}) => theme.colors.gray};
    color: ${({theme}) => theme.colors.yellow};;
    border:1px solid ${({theme}) => theme.colors.yellow};
    padding: 15px;
    outline: none;
    margin: 4px 0 24px;
    font-size: 16px;
    opacity: 1;
    transition: opacity .6s .1s ease-in-out;
    min-height: 25vh;
`;

export const FormWrapper = styled.form`
    position: relative;
    max-width: 600px;
    margin: 0 auto;
`;

export const InputsWrapper = styled.div`
    position: relative;
`;

export const StyledLabel = styled.label`
      background-color: blue;
      color: red;
      text-align: center;
      justify-content: center;  
      transition: 0.2s ease-out all;
      font-size: 18px;
      height: 60px;
      width: 300px;
      margin: 6px;
      display: flex;
      text-decoration: none;
      align-items: center;
`;

export const FormItem = styled.div`
      width: 100%;
      display: flex;
`;

export const StyledInput = styled.input`
    display: block;
    appearance: none;
    outline: 0;
    border: 1px solid white;
    width: 300px;
    border-radius: 3px;
    margin: 6px;
    text-align: center;
    font-size: 18px;
    color: black;
    transition-duration: 0.25s;
    font-weight: 300;
    background-color: greenyellow;
`;

export const StyledSubmit = styled.button`
    color: ${({theme}) => theme.colors.gray};
    background-color: ${({theme}) => theme.colors.yellow}; 
    text-transform: uppercase;
    font-weight: 600;
    margin: 4px 0 24px;
    padding: 15px;
    width: 100%;
    cursor: pointer;
    border: 1px solid ${({theme}) => theme.colors.yellow};
    transition: background-color .4s, opacity .4s, color .4s;
`;