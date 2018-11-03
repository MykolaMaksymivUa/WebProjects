module.exports = function (app) {
    app.get('/view', function (req, res) {
        res.sendFile('..\index.html');
    });
    app.get('/view', function (req, res) {
        res.render('index');
    });
    //Other routes here...
}