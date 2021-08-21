import styled from "styled-components";

export const ContactTitle = styled.div`
    justify-content: flex-start;
    font-size: 6rem; 
    display: flex;
    padding: 20px;
    margin: 20px 0;
    font-weight: bold;
    color: ${({theme}) => theme.colors.text};
`;

export const ContactSubitle = styled.div`
justify-content: flex-start;
font-size: 4rem;
display: flex;
padding: 10px;
margin: 20px 0;
font-weight: normal;
color: ${({theme}) => theme.colors.text};
`;