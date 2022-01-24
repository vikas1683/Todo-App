import React, { useState } from 'react';
import TodoList from './TodoList';

function CreateList() {
    const [task, setTask] = useState('')
    const [data, setData] = useState([])

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = task;
        setData([...data, newData])
        setTask('')

    }
    const deleteItem = (a) => {
        const finalData = data.filter((curEle, index) => {
            return index != a;
        })
        setData(finalData)

    }

    return (
        <>
            <div className="box">
                <div className="text-end">
                    <h1>REACT TODO APP</h1>
                    <h2>ADD A NEW TODO</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={task} onChange={handleChange} />
                    <button type='submit'>Add</button>

                </form>
                {data.map((value, index) => {
                    return <TodoList
                        key={index}
                        id={index}
                        task={value}
                        onSelect={deleteItem}
                    />
                }
                )}
            </div>

        </>
    )
}

export default CreateList;
