var express = require('express');
var router = express.Router();
const Registration = require('../models/registration');
const checkIfAuthenticated = require('../middleware/auth');

router.get('/', async (req, res, next) => {
    try{
        const projects = await Registration.find();
        
        res.status(200).json(projects);
    } catch(err){
        res.status(500).send(err);
    }
});

router.post('/', checkIfAuthenticated, async (req, res, next) => {
    try{
        const registration = new Registration({
            name: req.body.name,
            brief: req.body.brief,
            description: req.body.description,
            link: req.body.link
        })

        await registration.save();

        res.status(201).send("registration inserted");
    } catch(err){
        res.status(500).send(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const registration = await Registration.findById(req.params.id);
        
        res.status(200).json(registration);
    } catch(err){
        if(err.name === "CastError")
            res.status(204).send("No content");
        else
            res.status(500).send(err);
    }
});

router.put('/:id', checkIfAuthenticated, async (req, res, next) => {
    try{
        const registration = await Registration.updateOne({"_id": req.params.id}, req.body);
        
        res.status(200).json("registration updated");
    } catch(err){
        if(err.name === "CastError")
            res.status(204).send("No content");
        else
            res.status(500).send(err);
    }
});

router.delete('/:id', checkIfAuthenticated, async (req, res, next) => {
    try{
        await Registration.deleteOne({"_id": req.params.id});

        res.status(200).send("registration deleted");
    } catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;
