import React, { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Item({ action, setupdate }) {
  const [msg, setmsg] = useState("");
  const del = async () => {
    const res = await fetch(`http://localhost:1000/bank/action/${action.id}`, {
      method: "delete",
      headers: { 'Content-type': 'application/json; charset=UTF-8' },

    })
    const data = await res.json()
    setmsg(data.msg)
    setupdate(up => !up)
  }
  return <div className="row">
    <p>{action.amount} $</p>
    <p>{new Date(action.date).toLocaleDateString("he-IL")}</p>
    <p className={action.type_id == 1? 'green': "red"}>{action.type}</p>
    <button onClick={del}><DeleteForeverIcon></DeleteForeverIcon></button>
    <p>{msg}</p>
  </div>;
}
