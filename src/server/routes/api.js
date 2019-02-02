const express = require('express');
const List   = require('../models/list');
const router  = express.Router();


//get a list of lists from db
router.get('/lists', function(req,res,next){
    List.find({})
        .then(function(lists){
            res.send(lists);
        });
});

//Add new list
router.post('/lists', function(req,res,next){
    List.create(req.body).then(function(list){
        res.send(list);
    }).catch(next);
});

//Update ninja
// router.put('/cards/:id', function(req,res,next){
//     Card.findByIdAndUpdate( { _id: req.params.id } , req.body )
//         .then( function(){
//             Card.findOne( { _id: req.params.id} )
//                 .then( function(card){
//                     res.send(card);
//                 }); 
//         });
// });

//Update list
router.put('/lists/:id', function(req,res,next){
    List.findByIdAndUpdate( { _id: req.params.id } , req.body )
        .then( function(){
            List.findOne( { _id: req.params.id} )
                .then( function(list){
                    res.send(list);
                }); 
        });
});

//Delete list
router.delete('/lists/:id', function(req,res,next){
    List.findByIdAndRemove({ _id: req.params.id })
        .then( function(list){
            res.send(list);
        });
});

module.exports = router;