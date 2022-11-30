import './App.scss';
import Board from './components/Board/Board';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Dropdown from './components/Dropdown/Dropdown';
import { useState } from 'react';

function App() {
    // state for dropdown
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='App'>
            <Navbar toggleDropdown={setIsOpen} />
            <main>
                <Sidebar />
                <Board />
            </main>
            <Dropdown dropdown={isOpen} toggleDropdown={setIsOpen} />
        </div>
    );
}

export default App;
