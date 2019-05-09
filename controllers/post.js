const {connection} = require('./utility')
exports.getPosts = (req,res) => {
    res.json({
        posts:[
            {title:'First Post'},
            {title:'Second Post'}
        ]
    })
};

exports.getUsers = (req,res)=>{
    connection.query('Select * from Users',(error,rows,field)=>{
        if(error) return error;
        res.json(rows);
    })
};