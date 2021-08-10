var express = require('express');
var router = express.Router();
const Update = require('../models/update');
const checkIfAuthenticated = require('../middleware/auth');

router.get('/', async (req, res, next) => {
    try{
        const update = await Update.find();
        
        res.status(200).json(update);
    } catch(err){
        res.status(500).send(err);
    }
});

router.post('/', checkIfAuthenticated, async (req, res, next) => {
    try{
        const update = new Update({
            name: req.body.name,
            description: req.body.description,
            link: req.body.link
        })

        await update.save();

        res.status(201).send("update inserted");
    } catch(err){
        res.status(500).send(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const project = await Update.findById(req.params.id);
        
        res.status(200).json(project);
    } catch(err){
        if(err.name === "CastError")
            res.status(204).send("No content");
        else
            res.status(500).send(err);
    }
});

router.put('/:id', checkIfAuthenticated, async (req, res, next) => {
    try{
        const update = await Update.updateOne({"_id": req.params.id}, req.body);
        
        res.status(200).json("update updated");
    } catch(err){
        if(err.name === "CastError")
            res.status(204).send("No content");
        else
            res.status(500).send(err);
    }
});

router.delete('/:id', checkIfAuthenticated, async (req, res, next) => {
    try{
        await Update.deleteOne({"_id": req.params.id});

        res.status(200).send("update deleted");
    } catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;
