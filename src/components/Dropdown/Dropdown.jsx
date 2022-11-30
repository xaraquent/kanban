import React from 'react';
import Links from '../Links/Links';
import './Dropdown.scss';
import CrossIcon from '../../assets/icon-cross.svg';

const Dropdown = ({ dropdown, toggleDropdown }) => {
    return (
        <div className={`dropdown ${dropdown ? 'active-dropdown' : ''}`}>
            <div className='dropdown-box'>
                <button
                    onClick={() => {
                        toggleDropdown(false);
                    }}
                    className='dropdown-close-btn'
                >
                    <img src={CrossIcon} />
                </button>
                <Links />
            </div>
        </div>
    );
};

export default Dropdown;
