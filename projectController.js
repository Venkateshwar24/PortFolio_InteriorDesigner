const express = require('express');
const multer = require('multer');
var router = express.Router();
var {Project} = require('./projectModel');
const moment = require('moment');
const { S3Client } = require('@aws-sdk/client-s3');
const multers3 = require('multer-s3');
const currDate = moment().format('DD-MM-YYYY');
const currTime = moment().format('hh:mm');
const path = require('path');
require('dotenv').config();

const s3 = new S3Client({
region : 'ap-south-1', 
credentials: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
  }   

});


const uploads = multer({
    storage : multers3({
        s3 : s3,
        acl :'public-read',
        bucket : 'projects-portfolio',
        metadata : (req, file, cb) => {
            cb(null, { fieldName : file.fieldname});
        },
        key : (req, file, cb) => {
            cb(null, file.originalname);
        }

    })
})
router.get('/',(req,res) =>{
    Project.find((err,docs)=>{
        if(!err)
         res.send(docs);
        else
         console.log(err);
    })
})


// router.get('/:id', (req, res) => {
//     if (!story_id.isValid(req.params.id)) {
//         return res.status(400).send('No records found at:', `${req.params.id}`);
//     }
//     Story.findById(req.params.id, (err, doc) => {
//         if (!err) {
//             res.send(doc);
//         }
//         else {
//             console.log(err);
//         }
//     });

// });
router.post('/',uploads.any('project_files'),(req,res) =>{
    const filesArray =[];
    for(let i=0; i<req.files.length; i++){
      filesArray.push(req.files[i].location);
      console.log(req.files);
    }
    


    var project = new Project({
        project_name : req.body.project_name,
        project_type : req.body.project_type,
        project_description : req.body.project_description,
        creation_date : currDate,
        creation_time : currTime,
        project_files : filesArray,
        
    });

    project.save((err,docs) => {
        if(!err)
         res.send(docs);
        else
         console.log(err);
    });
});

// router.patch('/:id',(req,res)=>{

// if (!story_id.isValid(req.params.id)) {
//     return res.status(400).send('No records found at:', `${req.params.id}`);
// }
//  Story.findById(req.params.id,function(err,data){
//      data.updates.push({
//         update_title : req.body.update_title,
//         update_description : req.body.update_description,
//         update_creation_date : currDate
//      })
         
// data.save((err,docs) => {
//     if(!err)
//      res.send(docs);
//     else
//      console.log(err);
// });
//  });




// })

module.exports = router;
