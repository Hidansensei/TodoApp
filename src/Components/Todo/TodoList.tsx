import { ChangeEvent, useState } from "react";
import Title from "../UI/Title";


export default function TodoList() {
    const [todoInputValue, setTodoInputValue] = useState<string>("")


    function todoInputHandler(event: ChangeEvent<HTMLInputElement>) {

        setTodoInputValue(event.target.value)
    }


    return (
        <div>
            Todo girin
            <input value={todoInputValue} onChange={(event) => {
                todoInputHandler(event)
            }} />
            <Title title={todoInputValue}/>
        </div>
    );
}