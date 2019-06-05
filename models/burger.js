var orm = require("../config/orm.js");

var burger = {
    all:function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create:function(burger_name, cb){
        orm.create("burgers",[
            "burger_name", "devoured"],
            [
                burger_name, false
            ],
            function(res){
                cb(res);
            });
    
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", {devoured: true}, condition, function (res) {
          cb(res);
        })
      },
      delete: function (condition, cb) {
        orm.delete("burgers", condition, res => {
          cb(res);
        });
      }
    };
    
module.exports = burger;
