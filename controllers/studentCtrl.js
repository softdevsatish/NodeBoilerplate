const StudentData = require('../models/studentSchema')
exports.studentCtrl = (req, res) => {
    const newData = new StudentData({
        name: req.body.name,
        age: req.body.age,
    })
    newData.save();
    res.send(newData)
}

