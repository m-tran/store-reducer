import React from 'react';
import './App.css';

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./utils/GlobalState";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
