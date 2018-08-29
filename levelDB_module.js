const level = require('level');
const chainDB = './chaindata';
const db = level(chainDB);



var levelDB = {

    createReadStream: function () {
        return db.createReadStream()
    },
    //Adding new Block to DB
    _addLevelDBData: function (key, value) {
        db.put(key, value, function (err) {
            if (err) return console.log('Block ' + key + ' submission failed', err);
        })
    },

    //Getting Block by key
    _getLevelDBData: function (key) {
        return db.get(key);
    },

    //Deleting Block by key
    _deleteLevelDBData: function (key) {
        db.del(key, function (err) {
            if (err)
                return console.log('Error deleting Block #' + key, err);
        });
    }
}

module.exports = levelDB;