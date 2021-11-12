import React, {useState} from 'react'

const KeyboardInput = ( props ) => {
    const [input, setInput] = useState('')

    const onChange = (e) => {
        let inputValue = e.target.value;
        setInput(inputValue);
        props.propFunction(props.id, inputValue);
    }

    return (
        <div className="getInput">
            <div>{props.name}</div>
            <input onChange={onChange} value={input}></input>
        </div>
    )
}

export default KeyboardInput;