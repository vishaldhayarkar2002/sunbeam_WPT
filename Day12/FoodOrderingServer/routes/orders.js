// third party modules
const express = require('express')

// user defined modules
const pool = require('../db/pool')
const result = require('../utils/result')

// create router object
const router = express.Router()

// all orders routes
router.post('/', async (req, res) => {
    const { total_amount, cartItems } = req.body
    const sql1 = 'INSERT INTO orders(uid,total_amount) VALUES(?,?)'
    const sql2 = 'INSERT INTO orderdetails(oid,fid,quantity) VALUES(?,?,?)'
    try {
        const data = await pool.query(sql1, [req.headers.uid, total_amount])
        const oid = data[0].insertId
        for (f of cartItems)
            await pool.query(sql2, [oid, f.fid, f.qty])
        res.send(result.createSuccessResult(data[0]))
    } catch (error) {
        res.send(result.createErrorResult(error))
    }
})

router.get('/', async (req, res) => {
    const sql = 'SELECT * FROM orders WHERE uid = ?'
    try {
        const data = await pool.query(sql, [req.headers.uid])
        res.send(result.createSuccessResult(data[0]))
    } catch (error) {
        res.send(result.createErrorResult(error))
    }
})


// export the router
module.exports = router