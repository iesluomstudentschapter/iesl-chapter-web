var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var fs = require('fs');
const User = require('../models/user');
const secret_code = require('../keys/code')

const RSA_PRIVATE_KEY = fs.readFileSync('./keys/private.key');

router.post('/', async(req, res) => {
    try{
      const user = await User.findOne({"username": req.body.username});

      if(user != null){
        res.status(200).send("Already registered!");
      } else {
        
        if(secret_code === req.body.code){
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            })
    
            await newUser.save();
    
            const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 12000,
                subject: req.body.username
              })
                  
              res.status(200).json({
                "idToken": jwtBearerToken, 
                "expiresIn": 12000
              });
        } else {
            res.status(200).send("Incorrect code!");
        }        
      }
    } catch(err){
      if(err.name === "CastError")
        res.status(200).send("Invalid username or password");
      else
        res.status(500).send(err);
    }
});
  
module.exports = router;