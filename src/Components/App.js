import './App.css';
import Chat from './chat/Chat'
import user from '../user.json'

function App() {
  return (
    <div className="App">
    
        <nav className='top'>hr bot factory</nav>

        <Chat users={user} />

        <nav className='bottom'><div className='write'></div></nav>

      
    </div>
  );
}

export default App;
