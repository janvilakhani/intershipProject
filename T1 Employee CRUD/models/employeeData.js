const mongoose =require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    profileimg: {
        type: String,
    },
    salary: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true
    },

})

const Employee=mongoose.model('Employee',employeeSchema);
module.exports= Employee;