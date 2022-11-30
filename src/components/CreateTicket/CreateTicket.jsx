import React, { useState, useContext } from 'react';
import './CreateTicket.scss';
import { BoardContext } from '../../context/BoardContext';

const CreateTicket = () => {
    const { createTicket } = useContext(BoardContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [subTask, setSubTask] = useState('');

    return (
        <div className='create-ticket'>
            <h3 className='heading-m'>Add New Task {title}</h3>
            <div>
                <label htmlFor='' className='body-m'>
                    Title
                </label>
                <input
                    placeholder='e.g take a coffee break'
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor='' className='body-m'>
                    Description
                </label>
                <input
                    placeholder='e.g take a coffee break on monday with a friend'
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor='' className='body-m'>
                    Sub Task
                </label>
                <input
                    placeholder='e.g do a back flip'
                    type='text'
                    value={subTask}
                    onChange={(e) => setSubTask(e.target.value)}
                />
            </div>

            <button
                onClick={() => {
                    createTicket({
                        id: 'hej',
                        title,
                        description,
                        tasks: [subTask],
                    });
                    setTitle('');
                    setDescription('');
                    setSubTask('');
                }}
            >
                Create Task
            </button>
        </div>
    );
};

export default CreateTicket;
