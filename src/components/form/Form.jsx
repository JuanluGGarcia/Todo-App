import { v4 } from "uuid";
import { StyledForm, StyledInput } from "./style";
import Tasks from "../tasks/Tasks";

const Form = ({ filteredTasks, setTasks }) => {
    return(
        <>
            <StyledForm onSubmit={event => handleSubmit(event, filteredTasks.task, setTasks)}>
                <StyledInput 
                    type="text" 
                    name="textTask"
                />

            </StyledForm>
            {filteredTasks.map(task => (
                <Tasks 
                    key={task.id}
                    {...task}
                 />
            ))}
            
        </>
    );
};

const handleSubmit = (event, tasks, setTasks) => {
    const value = event.target.textTask.value;

    event.preventDefault(); // Para evitar que se envie el formulario
    createTask(value, tasks, setTasks);
    event.target.reset(); // Para que se borre el input
};

const createTask = (value, tasks, setTasks) => {
    const newTask = {
        id: v4(),
        task: value,
        complete: false
    };
    setTasks([...tasks, newTask]);
}

export default Form;