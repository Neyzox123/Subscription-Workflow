const pool = require('../config/db.js');

const findById = async (id) => {
    const [rows] = await pool.execute (
        'SELECT * FROM plans WHERE id = ?',
        [id]
    )
    return rows[0];
};

const findAll = async (all) => {
    const [rows] = await pool.execute(
        'SELECT * FROM plans'
        [all]
    )
    return rows[0];
}