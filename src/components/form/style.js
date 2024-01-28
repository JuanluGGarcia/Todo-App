import styled from "styled-components";

const StyledForm = styled.form`
    width: 80%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    background-color: #fff;
    margin: 2.2rem auto;
    padding: .5rem 1rem;
    border-radius: 0.5rem;
`;

const StyledInput = styled.input`
    width: 100%;
`;

// const StyledCircle = styled.circle`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     border: 1px solid #000;
// `;

export { StyledForm, StyledInput };