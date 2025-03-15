const todos = [
    {task: "mow the yard", id: crypto.randomUUID() },
    {task: "Work on Odin Projects", id: crypto.randomUUID() },
    {task: "Feed the cat", id: crypto.randomUUID() },
];


function TodoList() {
    return(
        <ul>
            {todos.map((todo) => {
                <li key={todo.id}>{todo.task}</li>
            })}
        </ul>
    )
}

function Button({text = 'click me!', color = 'blue', fontSize = 12, handleClick}){
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };

    return(
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

export default function App(){
    const handleButtonClick = (url) => {
        window.location.href = url;
    };

    return(
        <div>
            <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} />
        </div>
    )
}