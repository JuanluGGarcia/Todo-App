// import { StyledInput } from "../form/style";
import { StyledCheckBox, StyledTaskWrapper, StyledTasks } from "./style";

const Tasks = ({ task, complete}) => {
    return (
        <StyledTaskWrapper>
            <StyledTasks $complete={complete}>
            return (
               <> 
                    <StyledCheckBox
                        type="checkbox" 
                        checked={complete}
                    />
                                       
                    <p>{task}</p>
    
                </> 
            );
            </StyledTasks>
            
            

        </StyledTaskWrapper>
        
    );
};

export default Tasks;