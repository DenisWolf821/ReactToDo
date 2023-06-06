import "./App.scss";
import arrow from "./img/arrow.svg";
import { Item } from "./components/item";
import { useState } from "react";

function App() {
	const [textInput, setTextInput] = useState("");
	const [tasks, setTasks] = useState([]);

	const addTask = () => {
		if (textInput) {
			const newItem = {
				id: Math.floor(Math.random() * 300) + 1,
				complete: false,
				task: textInput,
			};
			setTasks([...tasks, newItem]);
			setTextInput("");
		}
	};

	const enter = (e) => {
		if (e.key === "Enter") {
			addTask();
		}
	};

	const changeInput = (e) => {
		setTextInput(e.currentTarget.value);
	};

	const removeTasks = () => {
		setTasks(() => {
			return [];
		});
	};

	const checkedTask = (id) => {
		setTimeout(() => {
			setTasks([...tasks.filter((count) => count.id !== id)]);
		}, 700);
		setTasks([
			...tasks.map((task) =>
				task.id === id ? { ...task, complete: !task.complete } : { ...task }
			),
		]);
	};

	return (
		<div className="App">
			<h1 className="title">Список дел</h1>
			<div className="container">
				<div className="input__field">
					<input
						className="input"
						placeholder="Введите имя дела . . ."
						type="text"
						value={textInput}
						onChange={changeInput}
						onKeyDown={enter}
					/>
					<button onClick={addTask} className="btn">
						<img className="arrow" src={arrow} alt="arrow" />
					</button>
				</div>
				<div className="list">
					<ul>
						{tasks.length === 0
							? "Список дел отсутствует"
							: tasks.map((count) => {
									return (
										<Item
											count={count}
											key={count.id}
											textInput={textInput}
											checkedTask={checkedTask}
										/>
									);
							  })}
					</ul>
					<div className="list__bottom">
						<div className="count">Количество дел: {tasks.length}</div>
						<button onClick={removeTasks} className="btn-remove">
							Удалить всё
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
