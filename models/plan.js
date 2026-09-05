const pool = require('../config/db.js');

const findById = async (id) => {
    const [rows] = await pool.execute (
        'SELECT * FROM plans WHERE id = ?',
        [id]
    )
};