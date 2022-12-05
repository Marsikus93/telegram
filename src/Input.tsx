import React, {ChangeEvent} from 'react';
import {MessageTypeArray} from "./App";

export type InputWordsType={
    inputWords:string,
    inputWordsChangeHandler:(event:ChangeEvent<HTMLInputElement>)=>void
    setInputWords:(word:string)=>void
    sendMessages:()=>void
    messages:MessageTypeArray
}
export function Input(props:InputWordsType) {
    return (<div>
        <input value={props.inputWords} onChange={props.inputWordsChangeHandler}/>

        <button onClick={props.sendMessages} disabled={props.messages.length>=5}>send</button>
        <button onClick={()=>props.setInputWords("")}>clear</button>
    </div>)
}