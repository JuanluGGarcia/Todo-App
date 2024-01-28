import { useState } from 'react';
import Form from './components/form/Form';
import Header from './components/header/Header';
// import Tasks from './components/tasks/Tasks';
import { GlobalStyles } from './styles/global-styles';
import { FILTERS } from './constants/filters';
import Filters from './components/filters/Filters';

const App = () => {
	const [filterActive, setFilterActive] = useState(FILTERS.ALL);
	const [tasks, SetTasks] = useState([]);

	const filteredTasks = filterTasks(filterActive, tasks)

	return (
		<>
			<GlobalStyles />
			<div className='todoWrapper'>
				<div className='todoContainer'>
					<Header />
					<main>
						<Form tasks={filteredTasks} setTasks={SetTasks} />
						
						{/* <Tasks task={filteredTasks}/> */}

						<Filters tasks={tasks} filterActive={filterActive} setFilterActive={setFilterActive} />
					</main>
					
				</div>
			</div>
		</>
	);
};

const filterTasks = (filterActive, tasks) => {
	switch (filterActive) {
		case FILTERS.ALL:
			return [...tasks];
		case FILTERS.ACTIVE:
			return tasks.filter(task => !task.complete);
		case FILTERS.COMPLETED:
			return tasks.filter(task => task.complete);
	}
};

export default App;
