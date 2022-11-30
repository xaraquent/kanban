import React from 'react';
import Links from '../Links/Links';
import './Dropdown.scss';

const Dropdown = ({ dropdown, toggleDropdown }) => {
    return (
        <div className={`dropdown ${dropdown ? 'active-dropdown' : ''}`}>
            <div className='dropdown-box'>
                <Links />
            </div>
        </div>
    );
};

export default Dropdown;
