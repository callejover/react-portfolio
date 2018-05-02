
// POST NEW COMMENT TO DB
const connection = require('./../config');

module.exports.newComment = function(req, res){

    var comment = {
        author: req.body.author,
        body: req.body.body
    }

    connection.query('INSERT INTO comment SET ?', comment, function(error, results, fields){
        if(error){
            res.json({
                status: false,
                message: 'UNABLE TO POST NEW COMMENT'
            });
        } else {
            res.json({
                status: true,
                message: 'COMMENT POSTED TO DB',
                data: results
            })
        }
    })
};