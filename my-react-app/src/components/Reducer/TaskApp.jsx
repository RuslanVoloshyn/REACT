import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { TasksProvider } from './TasksContext.jsx';

export default function TaskApp() {
	return (
		<TasksProvider>
			<h2>Day off in Kyoto</h2>
			<AddTask />
			<TaskList />
		</TasksProvider>
	);
}
