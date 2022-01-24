import React from 'react';

export default function TodoList(props) {
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <h3>{props.task}</h3>
                    </div>
                    <div className="col-6">
                        <button type='delete' onClick={() => { props.onSelect(props.id) }}>X</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

