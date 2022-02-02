const router = require('express').Router()
const { SQL } = require('../dbconfig')
// --Get to Actions
router.get('/actions', async (req, res) => {
    try {
        const actions = await SQL(`
        SELECT Actions.*,
        Types.type
        FROM Actions
        inner join Types on Actions.type_id = Types.id
        ORDER BY Actions.date desc
        `)
        res.send(actions)
        console.table(actions)

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})
//--Get Types
router.get('/types', async (req, res) => {
    try {
        const types = await SQL(`
        SELECT *
        FROM Types
        `)
        res.send(types)
        console.table(types)

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})
//--Get sum
router.get('/sum', async (req, res) => {
    try {
        const sum = await SQL(`
        select sum(amount) as sum from actions
        `)
        res.send(sum)
        console.table(sum)

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})
//--POST Actions
router.post('/actions', async (req, res) => {
    try {
        const { amount, type_id } = req.body

        await SQL(`
        insert into Actions(amount , type_id)
        values(${type_id == 2 ? 0 - amount : amount},${type_id} )
        `)
        res.send({ msg: "added" })

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})
//--DELETE Actions
router.delete('/action/:id', async (req, res) => {
    try {

        await SQL(`
        DELETE FROM Actions
        WHERE id="${req.params.id}"
        `)
        res.send({ msg: "deleted" })

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})

module.exports = router