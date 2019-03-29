const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/**
 * @description:Creating note schema using mongoose
 **/
var noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title required"]
    },
    description: {
      type: String,
      required: [true, "Description required"]
    },
  },
  {
    timestamps: true
  }
);
var note = mongoose.model("Note", noteSchema);

function noteModel() {}
/**
 * @description:it will add the notes data using note schema and save the data into the database
 * @param {*request from frontend} objectNote
 * @param {*response to backend} callback
 */
noteModel.prototype.addNotes = (objectNote, callback) => {
  const noteModel = new note(objectNote.body);
  console.log(objectNote.body);
  
  noteModel.save((err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};
/**
 * @description:it will get the notes using userId and find the notes with data
 * @param {*request from frontend} id
 * @param {*response to backend} callback
 */
noteModel.prototype.getNotes = (id, callback) => {
  note.find(
    {
      Email: id.decoded.payload.Email
    },
    (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    }
  );
};
module.exports = new noteModel();
