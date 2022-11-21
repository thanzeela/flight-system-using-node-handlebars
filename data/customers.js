const db = require('./db');
function getAll(callback){
const sql = "SELECT id,name,user_name,email,password,mobile,address,dob FROM passenger";
db.executequery(sql, [], callback);
}
function addOne(name,user_name,email,password,mobile,address,dob ,callback){
    const sql ="INSERT INTO  passenger(name,user_name,email,password,mobile,address,dob)VALUES(?,?,?,?,?,?,?)";
    const params = [name,user_name, email,password,mobile,address,dob];
    console.log(params)
db.executequery(sql, params, callback);
}
module.exports.getAll= getAll;
module.exports.addOne = addOne;

