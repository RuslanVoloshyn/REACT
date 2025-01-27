import Profile from "./Profile.jsx";
import Gallery from './Gallery.jsx';
import { Profiles } from './Profiles.jsx';
import Bio from "./Bio.jsx";
import TodoList from "./TodoList.jsx";
import Gallery1 from "./Gallery1.jsx";
import Profile1 from "./Profile1.jsx";
import PackingList from "./PackingList.jsx";
import DrinkList from "./DrinkList.jsx";
import List from "./List.jsx";
import RecipeList from "./RecipeList.jsx";
import Gallery2 from "./Gallery2.jsx";
import FeedbackForm from "./FeedbackForm.jsx";
import TrafficLight from "./TrafficLight.jsx";
import RequestTracker from "./RequestTracker.jsx";
import Scoreboard from "./Scoreboard.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import ShoppingCart2 from "./ShoppingCart2.jsx";
import EditProfile from "./EditProfile.jsx";
import FilterableList from "./FilterableList.jsx";
import ContactList from "./ContactList.jsx";
import App1 from "./Context/App1.jsx";
import TaskApp from "./Reducer/TaskApp.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import Page from "./Page.jsx";
import Form from "./Form.jsx";
import Appe from "./Appe.jsx";
import Canvas from "./LogicHooks/Canvas.jsx";


export default function Main() {
	return (
<div className="container">
	<div className="row">
		<h1 className="align-content-center">ВИВЧЕННЯ REACT</h1>
		<div className="col-12">
			<h2>Написання розмітки з JSX</h2>
			<Bio/>
		</div>
		<h2>Експорт компонента</h2>
		<div className="col-5">

			<Profile/>
		</div>
		<div className="col-7">
			<Profiles/>
			<Gallery/>
		</div>
		<h2>JavaScript у JSX з фігурними дужками</h2>
		<div className="col-6">
			<TodoList />
		</div>
		<h2>Передача пропсів до компонента</h2>
		<div className="col-6">
			<Gallery1 />
		</div>
		<div className="col-6">
			<Profile1 />
		</div>
		<h2>Умовний рендеринг</h2>
		<div className="col-6">
			<PackingList />
		</div>
		<div className="col-6">
			<DrinkList />
		</div>
		<h2>Рендеринг списків</h2>
		<div className="col-6">
			<List />
		</div>
		<div className="col-6">
			<RecipeList />
		</div>
		<h2>Стан пам&#39;ятi компонента</h2>
		<div className="col-6">
			<Gallery2 />
		</div>
		<div className="col-6">
			<FeedbackForm />
		</div>
		<div className="col-4">
			<h2>Стан як снепшот</h2>
			<TrafficLight />
		</div>
		<div className="col-8">
			<h2>Додавання до черги низки оновлень стану</h2>
			<RequestTracker />
		</div>
		<h2>Оновлення об&#39;єктів у стані</h2>
		<div className="col-6">
			<Scoreboard />
		</div>
		<h2>Оновлення масивів у стані</h2>
		<div className="col-3">
			<ShoppingCart />
		</div>
		<div className="col-4">
			<ShoppingCart2 />
		</div>
		<div className="col-6">
			<h2>Реагування станом на введення</h2>
			<EditProfile />
		</div>
		<div className="col-6">
			<h2>Спільний стан між компонентами</h2>
			<FilterableList />
		</div>

		<div className="col-3">
			<h2>Збереження та скидання стану</h2>
			<ContactList />
		</div>
		<div className="col-4">
			<h2>Глибока передача даних з контекстом</h2>
			<App1 />
		</div>
		<div className="col-5">
			<h2>Масштабування за допомогою Reducer і контексту</h2>
			<TaskApp />
		</div>
		<h2>Маніпулювання DOM за допомогою рефів</h2>
		<div className="col-6">
			<VideoPlayer />
		</div>
		<div className="col-6">
			<Page />
		</div>
		<div className="col-6">
			<h2>Можливо, ефект вам і не потрібен</h2>
			<Form />
		</div>
		<div className="col-6 ">
			<h2>Життєвий цикл реактивних ефектів</h2>
			<Appe />
		</div>
		<div className="col-6">
			<Canvas />
		</div>
	</div>
</div>
	);
};
