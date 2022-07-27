const express = require('express');
const multer = require('multer');
var router = express.Router();
var { Experience } = require('./experienceModel');
const moment = require('moment');
const { S3Client } = require('@aws-sdk/client-s3');
var experience_id = require('mongoose').Types.ObjectId;
const multers3 = require('multer-s3');
const currDate = moment().format('DD-MM-YYYY');
const currTime = moment().format('hh:mm');
const path = require('path');
require('dotenv').config();

const s3 = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey
    }

});


const uploads = multer({
    storage: multers3({
        s3: s3,
        acl: 'public-read',
        bucket: 'projects-portfolio',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            cb(null, `Work_Experience/${file.originalname}`);
        }

    })
})
router.get('/', (req, res) => {
    Experience.find((err, docs) => {
        if (!err)
            res.send(docs);
        else
            console.log(err);
    })
})


router.get('/:id', (req, res) => {
    if (!experience_id.isValid(req.params.id)) {
        return res.status(400).send('No records found at:', `${req.params.id}`);
    }
    Experience.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log(err);
        }
    });

});



router.post('/',(req, res) => {
    var experience = new Experience({
        company_name: req.body.company_name,
        company_designation: req.body.company_designation,
        company_description: req.body.company_description,
        creation_date: currDate,
        creation_time: currTime
    });

    experience.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log(err);
        }
    });
})



router.patch('/:id', uploads.any('project_files'), (req, res) => {

    if (!experience_id.isValid(req.params.id)) {
        return res.status(400).send('No records found at:', `${req.params.id}`);
    }
    const filesArray = [];
    for (let i = 0; i < req.files.length; i++) {
        filesArray.push(req.files[i].location);
        console.log(req.files);
    }
    Experience.findById(req.params.id, function (err, data) {
        data.company_projects.push({
            project_name: req.body.project_name,
            project_type: req.body.project_type,
            project_description: req.body.project_description,
            project_files: filesArray
        });

        data.save((err, docs) => {
            if (!err)
                res.send(docs);
            else
                console.log(err);
        });
    });




})

module.exports = router;
