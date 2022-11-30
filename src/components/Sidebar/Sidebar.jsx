import React, { useContext } from 'react';
import Links from '../Links/Links';
import './Sidebar.scss';
import { BoardContext } from '../../context/BoardContext';

export default function Sidebar() {
    const { projects } = useContext(BoardContext);

    return (
        <div className='sidebar'>
            <p>All boards ( {projects.length} ) </p>
            <Links />
        </div>
    );
}
