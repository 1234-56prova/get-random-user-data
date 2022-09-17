const express = require('express');
const { limiter } = require('../../middleware/limiter');
const viewCount = require('../../middleware/viewCount');
const usersController = require("../../controllers/tools.controller");
const { route } = require('express/lib/router');
const router = express.Router();


router.route('/')

.get(
    
    usersController.getAllUser

)
.post(

    usersController.saveAUser

);

router

.route('/:id')

.get(viewCount, limiter, usersController.getToolDetail)

.patch(usersController.updateUser)

.delete(usersController.deleteUser)

router

route('/:name')

.get(viewCount, limiter, usersController.getUserDetail)


module.exports = router;
