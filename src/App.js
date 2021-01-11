import './App.css';
import React, {useState,useEffect} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from "firebase";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    //this code here.. fires when the app loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({id:doc.id ,todo: doc.data().todo})))
    })
  }, []);
  // console.log(input); 
  const addTodo = (event) =>{
    event.preventDefault(); //it will stop refresh that happens after on click
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos,input]); 
    setInput(''); // to clear after click button
  }
  return (
    <div className="App">
      <h1>Todo React Application</h1>
      <form>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event=>setInput(event.target.value)} />
      </FormControl>
      <Button  variant="contained" color="primary" onClick={addTodo} type='submit' disabled={!input}>
      ToDo
      </Button>
      </form>

      <ul>
        {todos.map(todo=> (
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

//Components()