var util = require('util');

var GlobalFunction = function () {
}

//Public Methods
module.exports.create = function () {
    var e = new GlobalFunction();
    return e;
}


GlobalFunction.prototype.trim = function (string) {
    return string.replace(/^\s*|\s*$/g, '')
}

GlobalFunction.prototype.getProcessTime = function (t) {
    return t[0] + t[1] / 1000000000;
}

GlobalFunction.prototype.getBoolean = function (variable) {

    var vtype;
    var toReturn;

    if (variable != null) {

        switch (typeof (variable)) {
            case 'boolean':
                vtype = "boolean";
                return variable;
                break;
            case 'number':
                vtype = "number";
                if (variable == 0)
                    toReturn = false;
                else toReturn = true;
                break;
            case 'string':
                vtype = "string";
                if (variable == "true")
                    toReturn = true;
                else if (variable == "false")
                    toReturn = false;
                else
                    toReturn = false;
                break;

        }
        return toReturn;
    }
}

GlobalFunction.prototype.getInt = function (variable) {
    var val = parseInt(variable);
    if (isNaN(val))
        return 0;
    return val;
}

GlobalFunction.prototype.getFloat = function (variable) {
    var val = parseFloat(variable);
    if (isNaN(val))
        return 0;
    return val;
}

//Array.max = function (array) {
//    return Math.max.apply(Math, array);
//};

//Array.min = function (array) {
//    return Math.min.apply(Math, array);
//};