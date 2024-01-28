import { v4 } from "uuid";
import { StyledForm, StyledInput } from "./style";

const Form = ({ tasks, setTasks }) => {
    return(
        <StyledForm onSubmit={event => handleSubmit(event, tasks, setTasks)}>
            <StyledInput 
                type="text" 
                name="textTask"
                id="" 
            />
        </StyledForm>
    );
};

const handleSubmit = (event, tasks, setTasks) => {
    const task = event.target.textTask.value;
    event.preventDefault(); // Para evitar que se envie el formulario
    createTask(task, tasks, setTasks);
    event.target.reset(); // Para que se borre el input
};

const createTask = (task, tasks, setTasks) => {
    const newTask = {
        id: v4(),
        task: task,
        complete: false
    };
    setTasks([...tasks, newTask]);
}

export default Form;