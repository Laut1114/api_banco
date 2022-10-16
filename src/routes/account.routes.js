import { Router } from "express";
import { getAccounts, getAccountId, newAccount, updAccount, delAccount } from '../controllers/accounts.controller';

const router = Router();

router.get('/', getAccounts);

router.get('/:id', getAccountId);

router.post('/add', newAccount);

router.put('/update/:id', updAccount);

router.delete('/delete/:id', delAccount);

module.exports = router;