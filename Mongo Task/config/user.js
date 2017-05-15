const mongoose = require('mongoose');
var Relation = require('mongoose-type-relation');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  t_id : String,
  t_name : {type: String , lowercase: true},
  s_id: String
});



const subjectSchema = new Schema({
  s_id: String,
  s_name : {type: String,  lowercase: true}
});
module.exports = mongoose.model('Subject', subjectSchema);
module.exports= mongoose.model('Teacher', teacherSchema);
