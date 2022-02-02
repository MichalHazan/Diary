const router = require('express').Router()
const { TodoSQL } = require('../todoconfig')

// --Get to todo
router.get('/', async (req, res) => {
    try {
        const actions = await TodoSQL(`
        SELECT *
        FROM todos
        `)
        res.send(actions)
        console.table(actions)

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})
// --Get complited tasks
router.get('/complited', async (req, res) => {
    try {
        const actions = await TodoSQL(`
        SELECT *
        FROM todos
        WHERE complit = 0
        `)
        res.send(actions)
        console.table(actions)

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})

//--POST task
router.post('/', async (req, res) => {
    try {
        const { title } = req.body

        await TodoSQL(`
        insert into todos(title)
        values('${title}');
        `)
        res.send({ msg: "added" })

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})
//--DELETE task
router.delete('/:id', async (req, res) => {
    try {

        await TodoSQL(`
        DELETE FROM todos
        WHERE id=${req.params.id}
        `)
        res.send({ msg: "deleted" })

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})
//--Update task
router.put('/:id', async (req, res) => {
    try {

        await TodoSQL(`
        update todos
        set complit = !complit
         where id= ${req.params.id};
        `)
        res.send({ msg: "update" })

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})

module.exports = router