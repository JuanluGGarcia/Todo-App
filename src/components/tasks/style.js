import styled from 'styled-components';

const StyledTaskWrapper = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-around;
	/* align-items: center; */
	background-color: #fff;
	color: #000;
	margin-left: auto;
	margin-right: auto;
	/* margin: 2.2rem auto; */
	padding: 0.5rem;
	border-radius: 0.5rem;
	border: 1px solid #000;
`;

// const StyledTasks = styled.div`
// 	width: 100%;
// 	display: flex;
// 	gap: 0.5rem;
// 	color: ${({ $complete}) => ($complete ? '#8c8ca2' : 'c8cbe7')};
// 	text-decoration: ${({ $complete}) => ($complete ? 'line-through' : 'none')};
// `;

const StyledLabel = styled.label`
	width: 20px;
	height: 20px;
	border: 1px solid #000;
	border-radius: 10px;
	background-color: ${({ $complete}) => ($complete ? '#a970f1' : 'transparent')};
	background-image: ${({ $complete}) => ($complete ? 'url("./images/icon-check.svg")' : 'none' )};
	text-decoration: ${({ $complete}) => ($complete ? 'line-through' : 'none')};
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;
`;

const StyledCheckBox = styled.input`
	display: none;
	
	
`;

const StyledTaskText = styled.text`
	color: #000;
`;

const StyledDeleteButton = styled.button`
	background-color: lightcoral;
	color: #fff;
	border: none;
	cursor: pointer;
	height: 20px;
	border-radius: 15px;
`;

export { StyledTaskWrapper, StyledLabel, StyledCheckBox, StyledTaskText, StyledDeleteButton };
