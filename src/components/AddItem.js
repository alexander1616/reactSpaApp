import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

import saveTodo from '../features/dataSlice'

const AddItem = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodo = () => {
        console.log(`Adding ${input}`)
        dispatch(saveTodo({
            item: input,
            done: false,
        }))
    }

    return (
        <div className='addItem'>
            <input type="text" value={input} onChange = {e => setInput(e.target.value)}/>
            <Button variant="secondary" active size="lg" onClick={addTodo}>Add Item</Button>
        </div>
    )
}

export default AddItem;