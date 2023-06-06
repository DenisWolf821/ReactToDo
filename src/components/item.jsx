export const Item = ({ count, checkedTask }) => {
	return (
		<li className="item">
			<button
				onClick={() => checkedTask(count.id)}
				className="curcle"
			></button>
			<span className={count.complete ? "task-remove" : "text"}>
				{count.task}
			</span>
		</li>
	);
};
