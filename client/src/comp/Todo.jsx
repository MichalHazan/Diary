import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function Todo() {
  const [ISon, setIson] = useState(false);
  const [alignment, setAlignment] = React.useState('all');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [todoArr, settodoArr] = useState([]);
  const [notcomplitetodoArr, setnotcomplitetodoArr] = useState([]);
  const [title, settitle] = useState("");
  const [update, setupdate] = useState(false);


  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:1000/todos/')
      const data = await res.json()
      settodoArr(data)
    })();
    (async () => {
      const res = await fetch('http://localhost:1000/todos/complited')
      const data = await res.json()
      setnotcomplitetodoArr(data)
    })();
  }, [update]);

  const del = async (task_id) => {
    console.log(task_id);
    const res = await fetch(`http://localhost:1000/todos/${task_id}`, {
      method: "delete",
      headers: { 'Content-type': 'application/json; charset=UTF-8' },

    })
    const data = await res.json()
    setupdate(up => !up)
  }

  const addtask = async () => {
    const res = await fetch('http://localhost:1000/todos/', {
      method: "post",
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        title
      })
    })
    setupdate(up => !up)
  }
  const complit = async (tid, tcomplit) => {
    const res = await fetch(`http://localhost:1000/todos/${tid}`, {
      method: "put",
      headers: { 'Content-type': 'application/json; charset=UTF-8' },

    })
    setupdate(up => !up)
  }

  return <div>
    <Container maxWidth="xs" sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>

      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Task" color="secondary" sx={{ m: 1 }} focused onChange={e =>
        settitle(e.target.value)
      } />
      <Button variant="contained" color="success" onClick={addtask}>
        add task
      </Button>
    </Container>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="uncomplited" onClick={() => setIson(true)}>uncomplited</ToggleButton>
      <ToggleButton value="all" onClick={() => setIson(false)}>All</ToggleButton>
    </ToggleButtonGroup>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {
        ISon ?
          notcomplitetodoArr.map(task =>
            <div className='row'>
              <Checkbox checked={task.complit} onChange={e => {
                complit(task.id, task.complit)
              }} />
              <p>{task.id}</p>
              <h1>{task.title}</h1>
              <button onClick={() => del(task.id)}><DeleteForeverIcon></DeleteForeverIcon></button>

            </div>
          )
          :
          todoArr.map(task =>
            <div className='row'>
              <Checkbox checked={task.complit} onChange={e => {
                complit(task.id, task.complit)
              }} />
              <p>{task.id}</p>
              <h1>{task.title}</h1>
              <button onClick={() => del(task.id)}><DeleteForeverIcon></DeleteForeverIcon></button>

            </div>
          )
      }
    </Box>
  </div>;
}
