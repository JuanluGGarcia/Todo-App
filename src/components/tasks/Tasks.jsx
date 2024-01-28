// import { StyledInput } from "../form/style";
import { StyledCheckBox, StyledTaskWrapper, StyledLabel, StyledDeleteButton } from "./style";

const Tasks = ({ id, task, complete}) => {
    // console.log(task)
    return (
        <StyledTaskWrapper>
            <StyledLabel htmlFor={id} $complete={complete}>  
            </StyledLabel>
            {task}
            <StyledCheckBox
                id={id}
                type="checkbox"
                checked={complete}>

            </StyledCheckBox>
            <StyledDeleteButton 
                type='button' 
                // onClick={actionDelete}
            >
                X
            </StyledDeleteButton>
                                       
           

        </StyledTaskWrapper>
        
    );
};

export default Tasks;