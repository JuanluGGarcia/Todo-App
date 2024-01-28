import { useState } from 'react';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import { GlobalStyles } from './styles/global-styles';

const App = () => {
	const [todo, SetTodo] = useState("");
	const [todos, SetTodos] = useState([]);

	return (
		<>
			<GlobalStyles />
			<div className='todoWrapper'>
				<div className='todoContainer'>
					<Header />
					<main>
						<Form />
						<Tasks />
					</main>
					
				</div>
			</div>
		</>
	);
};

export default App;
