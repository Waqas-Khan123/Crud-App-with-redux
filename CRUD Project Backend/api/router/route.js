const express=require('express');
const router=express.Router();
const control=require('../controller/controller');

router.get('/getdata',control.register);
router.post('/reg_data',control.register_data);
router.put('/update_users/:id',control.update_data);
router.delete('/delete_users/:id',control.delete_data);
router.get('/onlyoneuserfind/:id',control.one_data);


module.exports = router;

