import TodoList from './Components/TodoList'
import './App.css';

function App() {
   
     /* we write it in place of <TodoList></TodoList> */
   
  return (
    <div className="to-do-list-container">
     
      <TodoList/> 
    </div>
  );
}

export default App;
