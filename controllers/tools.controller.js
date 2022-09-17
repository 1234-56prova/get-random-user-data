

module.exports.getAllUsers = (req, res, next) => {
    
    const {limit, page} = req.query;

    console.log(limit, page);

    res.json(tools.slice(0, limit));

}


module.exports.saveAUser = (req, res) => {
    
    tools.push(req.body);
    console.log(req.query);
    res.send('tools found');

}

module.exports.getUserDetail = (req, res) => {
    
    const {name} = req.params;

    console.log(name);

    // const filter = {id: id};

    const foundTool = tools.find(tool => tool.name == name);

    res.send(foundTool);
    
}

module.exports.updateUser = (req, res) => {
    
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

module.exports.deleteUser = (req, res, next) => {
 
    const {id} = req.params;

    const filter = { _id: id};

    tools = tools.filter(tool => tool.id !== Number(id));

    res.send(tools);

}