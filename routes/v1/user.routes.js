const express = require('express');
const { limiter } = require('../../middleware/limiter');
const viewCount = require('../../middleware/viewCount');
const ToolsController = require("../../controllers/tools.controller");
const { route } = require('express/lib/router');
const router = express.Router();


router.route('/')

.get(
    
    ToolsController.getAllTool

)
.post(

    ToolsController.saveATool

);

router

.route('/:id')

.get(viewCount, limiter, ToolsController.getToolDetail)

.patch(ToolsController.updateTool)

.delete(ToolsController.deleteTool)

router

route('/:name')

.get(viewCount, limiter, ToolsController.getToolDetail)


module.exports = router;
