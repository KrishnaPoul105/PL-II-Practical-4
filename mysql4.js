const http=require('http')
const sql=require('mysql')

const hostname='127.0.0.1'
const port='8080'

var con=sql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"awamad"
})
con.connect(function(err){
	if(err) throw err;
	console.log("Connected Successfully!")
	
	con.query("SELECT * FROM department", function (err, result, fields) {
    if (err) throw err;
    console.log(result)
	})
})