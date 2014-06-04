
//Public Methods
module.exports.create = function () {
    var e = new Root();
    return e;
}

exports.index = function (req, res, postData, param) {
    res.end("Home");
}
