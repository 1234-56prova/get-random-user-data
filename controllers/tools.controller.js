let tools = [
    {id: 1, name: 'hammer1'},
    {id: 2, name: 'hammer2'},
    {id: 3, name: 'hammer3'},
    {id: 4, name: 'hammer4'}
]

module.exports.getAllTools = (req, res, next) => {
    
    const {limit, page} = req.query;

    console.log(limit, page);

    res.json(tools.slice(0, limit));

}


module.exports.saveATool = (req, res) => {
    
    tools.push(req.body);
    console.log(req.query);
    res.send('tools found');

}

module.exports.getToolDetail = (req, res) => {
    
    const {id} = req.params;

    console.log(id);

    // const filter = {id: id};

    const foundTool = tools.find(tool => tool.id == id);

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