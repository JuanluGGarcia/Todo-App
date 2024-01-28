import styled from 'styled-components';

const StyledTaskWrapper = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-evenly;
	/* align-items: center; */
	background-color: #fff;
	margin: 2.2rem auto;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
`;

const StyledTasks = styled.div`
	width: 100%;
	display: flex;
	gap: 0.5rem;
	color: ${({ $complete}) => ($complete ? '#8c8ca2' : 'c8cbe7')};
	text-decoration: ${({ $complete}) => ($complete ? 'line-through' : 'none')};
`;

const StyledCheckBox = styled.input`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid #000;
`;

export { StyledTaskWrapper, StyledTasks, StyledCheckBox };
