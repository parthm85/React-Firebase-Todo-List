import React from 'react'
import {List,ListItem,ListItemText,Button} from '@material-ui/core';
import db from './firebase';

function Todo(props) {

    return (
       <List>
           <ListItem>
               <ListItemText primary="Todo" secondary={props.todo.todo}/>
           </ListItem>
           <Button onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>❌ npmDelete</Button>
       </List>
    )
}

export default Todo

//rfce -react functional component expo
//pros- properties