import { StyledInput } from "../form/style";
import { StyledCircle, StyledTaskWrapper, StyledTasks } from "./style";

const Tasks = () => {
    return (
        <StyledTaskWrapper>
            <StyledTasks>
                <StyledCircle></StyledCircle>
                <StyledInput 
                    type="text" 
                    name="textTask" 
                    id="" 
                />
            </StyledTasks>

        </StyledTaskWrapper>
        
    );
};

export default Tasks;