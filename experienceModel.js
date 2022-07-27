const mongoose = require('mongoose');

var experienceSchema = new mongoose.Schema({
    company_name : {type:String,required:true},
    company_designation : {type:String,required:true},
    company_description : {type: String, required:true},
    creation_date : {type:String, required:true},
    creation_time : {type:String, required:true},
    company_projects : [{
        project_name : {type:String},
        project_type : {type:String},
        project_description : {type:String},
        project_files :[{type:String}]
    }],
    
});



const Experience = mongoose.model('Experience',experienceSchema);
module.exports = {Experience};