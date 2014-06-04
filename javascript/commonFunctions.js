Number.prototype.padLeft = function (d) {
    return ((Math.pow(10, d) + this) + '').substr(1);
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

String.prototype.trimEnd = function (c) {
    c = c ? c : ' ';
    var i = this.length - 1;
    for (; i >= 0 && this.charAt(i) == c; i--);
    return this.substring(0, i + 1);
}

String.prototype.replaceAll = function (value, replacementValue) {
    return this.replace(new RegExp(value, "g"), replacementValue);
}

String.prototype.replaceXMLEntities = function () {
    if (this == "" || this == undefined)
        return "";
    return this.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("\"", "g"), "&quot;").replace(new RegExp("'", "g"), "&apos;").replace(new RegExp("<", "g"), "&lt;").replace(new RegExp(">", "g"), "&gt;");
}

String.prototype.replaceXMLEntitiesToString = function () {
    if (this == "" || this == undefined)
        return "";
    return this.replace(new RegExp("&amp;", "g"), "&").replace(new RegExp("&quot;", "g"), "\"").replace(new RegExp("&apos;", "g"), "'").replace(new RegExp("&lt;", "g"), "<").replace(new RegExp("&gt;", "g"), ">");
}

Number.prototype.padLeft = function (d) {
    return ((Math.pow(10, d) + this) + '').substr(1);
}

function getInt(variable) {
    var val = parseInt(variable);
    if (isNaN(val))
        return 0;
    return val;
}

function orderASC(a, b) {
    if (a[0] < b[0])
        return -1;
    if (a[0] > b[0])
        return 1;
    return 0;
}

function orderASCName(a, b) {
    if (a['Name'] < b['Name'])
        return -1;
    if (a['Name'] > b['Name'])
        return 1;
    return 0;
}

function orderDESC(a, b) {
    if (b[0] < a[0])
        return -1;
    if (b[0] > a[0])
        return 1;
    return 0;
}

function sortByKey(array, key) {
    if (array instanceof Array) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
}

/*
* Generate a random uuid.
*
* USAGE: Math.uuid(length, radix)
*   length - the desired number of characters
*   radix  - the number of allowable values for each character.
*
* EXAMPLES:
*   // No arguments  - returns RFC4122, version 4 ID
*   >>> Math.uuid()
*   "92329D39-6F5C-4520-ABFC-AAB64544E172"
*
*   // One argument - returns ID of the specified length
*   >>> Math.uuid(15)     // 15 character ID (default base=62)
*   "VcydxgltxrVZSTV"
*
*   // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 62)
*   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
*   "01001010"
*   >>> Math.uuid(8, 10) // 8 character ID (base=10)
*   "47473046"
*   >>> Math.uuid(8, 16) // 8 character ID (base=16)
*   "098F4D35"
*/
(function () {
    // Private array of chars to use
    var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

    Math.uuid = function (len, radix) {
        var chars = CHARS, uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            // rfc4122, version 4 form
            var r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join('');
    };

    // A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance
    // by minimizing calls to random()
    Math.uuidFast = function () {
        var chars = CHARS, uuid = new Array(36), rnd = 0, r;
        for (var i = 0; i < 36; i++) {
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                uuid[i] = '-';
            } else if (i == 14) {
                uuid[i] = '4';
            } else {
                if (rnd <= 0x02) rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
        return uuid.join('');
    };

    // A more compact, but less performant, RFC4122v4 solution:
    Math.uuidCompact = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
})();

function getBoolean(variable) {

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