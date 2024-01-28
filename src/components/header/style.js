import styled from "styled-components";

const StyledHeaderContainer = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
`;

const StyledTitle = styled.h1`
    color: #fff;
    letter-spacing: 0.5rem;
`;

const StyledDarkMode = styled.div`
cursor: pointer;
`;

export { StyledHeaderContainer, StyledTitle, StyledDarkMode };