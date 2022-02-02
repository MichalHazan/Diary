import { Badge, Drawer } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Header from './comp/Header'
import Main from './comp/Main'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';

export default function App() {
  // -------routing---------
  const navigate = useNavigate()
  const [isNavOpen, setisNavOpen] = useState(false)
  const travelTo = (dest) => {
    navigate('/' + dest)
    setisNavOpen(false)
  }

  return <div>
    <Header setisNavOpen={setisNavOpen} />
    <Drawer
      anchor="left"
      open={isNavOpen}
      onClose={() => setisNavOpen(false)}
    // onClose={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => travelTo("")}>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => travelTo("todo")}>
            <ListItemIcon>
              <AddIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="My To Do" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => travelTo("mymoney")}>
            <ListItemIcon>
              <AddIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="My Money control" />
          </ListItemButton>
        </ListItem>


        

      </List>
    </Drawer>
    <Main  />
  </div>;
}
