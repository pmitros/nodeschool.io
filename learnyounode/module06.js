fs = require('fs');
path = require('path');

function listdir(directory_name, ext, callback) {
    function filter(item) {
	return path.extname(item) === "."+ext;
    }

    function filter_list(err, list) {
	if (err)
            return callback(err);
	new_list = list.filter(filter);
	callback(err, new_list);
    }

    t = fs.readdir(directory_name, filter_list);
}

module.exports = listdir;
