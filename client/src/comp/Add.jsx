import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Add({ setupdate }) {
    const [amount, setamount] = useState(0);
    const [types, settypes] = useState([]);
    const [type, settype] = useState('');
    const handleChange = (event) => {
        settype(event.target.value);
    };

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:1000/bank/types/')
            const data = await res.json()
            settypes(data)
        })();
    }, []);

    const addaction = async () => {
        const res = await fetch('http://localhost:1000/bank/actions/', {
            method: "post",
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({
                amount,
                type_id: type
            })
        })
        setupdate(up => !up)
    }

    return <div>
        <h1 className='headline'>Add action</h1>
        <Container maxWidth="xs" sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="type"
                    onChange={handleChange}
                >
                    {
                        types.map(type => <MenuItem key={Math.random()} value={type.id}>{type.type}</MenuItem>)
                    }

                </Select>
            </FormControl>
            <TextField  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Amount" color="secondary" sx={{ m: 1 }} focused onChange={e =>
                setamount(e.target.value)
            } />
            <Button variant="contained" color="success" onClick={addaction}>
                add action
            </Button>
        </Container>
    </div>;
}
