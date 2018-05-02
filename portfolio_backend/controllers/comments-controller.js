
// RETRIVE ALL COMMENTS FROM DB
const connection = require('./../config');

module.exports.comments = function(req, res){
    connection.query('SELECT * FROM comment', function(error, results, fields){
        if(error) {
            res.json({
                status: false,
                message: 'THERE IS SOMETHING WRONG WITH THE QUERY'
            })
        } else {
            res.json({
                status: true,
                message: 'QUERY SUCCEEDED',
                data: results
            })
        }
    })

    return;
}