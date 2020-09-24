const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    account: String,
    password: String,
    telephone: String,
    headImage: String,
    name: String,
    loginAdress: String,
    isDelete: Boolean,//(是否被管理员删除)
    points: String,//(学员积分)
    gym: Array,//购课的时候绑定场馆
    coaches: Array,//绑定教练
    age: String,
    gender: String
}, { versionKey: false });
module.exports.studentsModel = mongoose.model('studentsModel', studentsSchema, 'students');