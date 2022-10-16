import { request, response } from 'express';
import { getConnection } from '../database/database';

// GET TRANSACTIONS -------------------------------------------------------------------------------------------------------------------------
const getTransactions = async (_req = request, res = response) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM transactions');

        return res.status(200).json({
            ok: true,
            result
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: error.message
        });
    }
}

// GET TRANSACTION ID -------------------------------------------------------------------------------------------------------------------------
const getTransactionId = async (req = request, res = response) => {
    const { id } = req.body;

    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM accounts WHERE id = ?', [id]);

        return res.status(200).json({
            ok: true,
            result
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: error.message
        });
    }
}


// POST NEW TRANSACTIONS -----------------------------------------------------------------------------------------------------------------------
const newTransaction = async(req = request, res = response) => {
    const origen = "";
    const { username, first_name, last_name, email, cantidad } = req.body;

    const destino = {
        username,
        first_name,
        last_name,
        email
    }

    const timestamp = Date();

    try {
        const connection = await getConnection();
        await connection.query("INSERT INTO `transactions` SET ?", [origen, destino, cantidad, timestamp]);

        return res.status(200).json({
            ok: true,
            msg: "Transferencia realizada con exito!!"
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: error
        });
    }
}

module.exports = { getTransactions, getTransactionId, newTransaction }