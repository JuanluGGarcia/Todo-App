import styled from "styled-components";

const StyledFiltersContainer = styled.div`
    width: 80%;
    /* padding: 0 .8rem; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    opacity: 0.8;
    font-size: 0.7rem;
    margin: 1rem auto 0;
`;

const StyledButtonFilter = styled.button`
    background: none;
    border: none;
    color: ${({$active}) => ($active ? 'green' : '#fff')};
    font-weight: bold;
    cursor: pointer;
`;

const StyleSpanClearComplete = styled.span`
    cursor: pointer;
`;

export { StyledFiltersContainer, StyledButtonFilter, StyleSpanClearComplete };