const router = require('express').Router();
const {signup,getBill} = require('../controller/sentMail')


/* HTTP Request */

router.post('/user/signup',signup)
router.post('/product/getBill',getBill)

module.exports = router;