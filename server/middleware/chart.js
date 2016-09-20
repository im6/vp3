
"use strict";
const mongoose = require('mongoose');

const privateFn = {

};

module.exports = {
    createUser: function(req, res, next){
        var User = mongoose.model('User');
        var userOne = new User({
            name: 'test user2',
            uidWeibo: 12342,
            objWeibo: {
                test :123
            }
        });

        userOne.save().then((data) =>{
            console.log(data);
            res.send({
                error: false,
            });
        }, (err) => {
            res.send({
                error: true,
                detail: err
            });
            console.error(err);
        });

        return next();
    },
    getUser: function(req, res, next){
        res.send(req.params);
        return next();
    },
    updateUser: function(req, res, next){
        res.send(req.params);
        return next();
    },
    deleteUser: function(req, res, next){
        res.send(req.params);
        return next();
    }
};