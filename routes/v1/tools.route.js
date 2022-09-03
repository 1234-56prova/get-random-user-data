const express = require('express');
const { limiter } = require('../../middleware/limiter');
const viewCount = require('../../middleware/viewCount');
const toolsController = require("../../controllers/tools.controller");
const router = express.Router();


router.route('/')

.get(
    
    toolsController.getAllTools

)
.post(

    toolsController.saveATool

);

router

.route('/:id')

.get(viewCount, limiter, toolsController.getToolDetail)

.patch(toolsController.updateTool)

.delete(toolsController.deleteTool)

module.exports = router;
