import './App.scss';
import Board from './components/Board/Board';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <main>
                <Sidebar />
                <Board />
            </main>
        </div>
    );
}

export default App;
