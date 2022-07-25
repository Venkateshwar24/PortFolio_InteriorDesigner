const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    project_name : {type:String,required:true},
    project_type : {type:String,required:true},
    project_description : {type: String, required:true},
    creation_date : {type:String, required:true},
    creation_time : {type:String, required:true},
    project_files : [{type:String,required:true}],
    
});



const Project = mongoose.model('Project',projectSchema);
module.exports = {Project};