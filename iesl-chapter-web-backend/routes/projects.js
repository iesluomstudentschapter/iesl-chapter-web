var express = require('express');
var router = express.Router();
const Project = require('../models/project');
const checkIfAuthenticated = require('../middleware/auth');

router.get('/', async (req, res, next) => {
    try{
        const projects = await Project.find();
        
        res.status(200).json(projects);
    } catch(err){
        res.status(500).send(err);
    }
});

router.post('/', checkIfAuthenticated, async (req, res, next) => {
    try{
        const project = new Project({
            name: req.body.name,
            brief: req.body.brief,
            description: req.body.description,
            images: req.body.images,
            category: req.body.category,
            filter: req.body.filter
        })

        await project.save();

        res.status(201).send("project inserted");
    } catch(err){
        res.status(500).send(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const project = await Project.findById(req.params.id);
        
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
        const project = await Project.updateOne({"_id": req.params.id}, req.body);
        
        res.status(200).json("project updated");
    } catch(err){
        if(err.name === "CastError")
            res.status(204).send("No content");
        else
            res.status(500).send(err);
    }
});

router.delete('/:id', checkIfAuthenticated, async (req, res, next) => {
    try{
        await Project.deleteOne({"_id": req.params.id});

        res.status(200).send("project deleted");
    } catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;
