const mysql = require('mysql')


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tododb'
});

con.connect(err => {
    if (err) {
        return console.log("😡", err);
    }
    console.log("connected to mysql server 😊");
})
// --  יצירת פונקציה שמחזירה פרומיס כמעטפת לקוורי לאס-קיו-אל שלנו
const TodoSQL = (q) => {
    return new Promise((resolve, reject) => {
        con.query(q, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

module.exports = { TodoSQL: TodoSQL } //{Key : Value} so the import will be: const { SQL } = require('./dbconfig')
