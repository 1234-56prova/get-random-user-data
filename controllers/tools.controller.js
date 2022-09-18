const { getDb } = require("../utlis/dbConnect");


module.exports.getAllTools = (req, res, next) => {
    
    const {limit, page} = req.query;

    console.log(limit, page);

    res.json(tools.slice(0, limit));

}


module.exports.saveATool = async (req, res, next) => {
    
    try {
    
    const db = getDb();

    const tools = req.body; 

    const result = await db.collection("tools").insertOne(tools);

    console.log(result);
    
    res.send("successful");
        
}
    
    catch(error) {
        
        next(error);

    }
}

module.exports.getToolDetail = (req, res) => {
    
    const {name} = req.params;

    console.log(name);

    // const filter = {id: id};

    const foundTool = tools.find(tool => tool.name == name);

    res.send(foundTool);
    
}

module.exports.updateTool = (req, res) => {
    
    // const newData = req.body;

    const {id} = req.params;

    const filter = {_id: req.params};

    const newData = tools.find(tool => {
        
        tool.id === Number(id);

    })

    newData.id = id;
    
    newData.name = req.body;

    res.send(newData);

}

module.exports.deleteTool = (req, res, next) => {
 
    const {id} = req.params;

    const filter = { _id: id};

    tools = tools.filter(tool => tool.id !== Number(id));

    res.send(tools);

}