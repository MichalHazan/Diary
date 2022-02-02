import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Item from './Item';
import Add from './Add';

export default function List() {
    const [actionsArr, setactionsArr] = useState([]);
    const [update, setupdate] = useState(false);

    const [sum, setsum] = useState(0);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:1000/bank/actions')
            const data = await res.json()
            setactionsArr(data)
        })();
        (async () => {
            const res = await fetch('http://localhost:1000/bank/sum')
            const data = await res.json()
            setsum(data[0].sum)
        })()
    }, [update]);


    return <div>
        <h1 className='headline'>actions</h1>
        <h3 className={sum > 0 ? 'headline green' : "headline red"}>sum : {sum.toLocaleString('IL')} $</h3>
        <Add setupdate={setupdate} />
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >

            {

                actionsArr.map(action => <Item key={Math.random()} action={action} setupdate={setupdate} />)
            }
        </Box>



    </div>;
}
