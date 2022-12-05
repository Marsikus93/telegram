import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Input} from "./Input";
import {v1} from "uuid";
export type MessageTypeArray=Array<MessageType>

type MessageType = {
    id: string
    message: string
}

function App() {
    const [inputWords, setInputWords] = useState<string>("")
    const inputWordsChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputWords(event.currentTarget.value)
    }
    const [messages, setMessages] = useState<MessageTypeArray>([])
    const sendMessages = () => {
        setMessages([...messages, {id:v1(),message:inputWords}])
        setInputWords("")
    }
    const deleteMessages = () => {messages.length=messages.length-1
        setMessages([...messages])
    }
    return (
        <div className="App">
            <div><span>{messages.length >= 5 && "Limit of messages is exceeded."}</span></div>
            <div>
                <Input
                    messages={messages}
                    sendMessages={sendMessages}
                    inputWordsChangeHandler={inputWordsChangeHandler}
                    inputWords={inputWords}
                    setInputWords={setInputWords}
                />
            </div>
            <div>
                <button onClick={deleteMessages} disabled={messages.length<1}>delete last message</button>
            </div>
            <ul>{
                messages.map((word, index) => {
                    return (
                        <li key={index}>{word.message}</li>)
                })}
            </ul>
        </div>
    );
}

export default App;
