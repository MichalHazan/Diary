import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Intro() {
  return <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}
  >
    <h1 className='headline'>My Diary</h1>
    <h2>you have here to do list and kind of your Bank- money control</h2>
    <div className='row'>

      <Link href="/todo">go to Todo</Link>

      <Link href="/mymoney">go to Bank- money control</Link>
    </div>
  </Box>
}
