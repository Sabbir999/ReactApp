import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
    return (
        <div className="Items-container">
            {todoItems.map((item, index) => (
                <TodoItem key={index} item={item.item} date={item.date} />
            ))}
        </div>
    );
}

export default TodoItems;
