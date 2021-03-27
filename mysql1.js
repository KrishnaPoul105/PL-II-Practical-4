const http=require('http')
const sql=require('mysql')

const hostname='127.0.0.1'
const port='8080'

var con=sql.createConnection({
	host:"localhost",
	user:"root",
	password:""
})
con.connect(function(err){
	if(err) throw err;
	console.log("Connected Successfully!")
	con.query("create database AWAMAD",function(err,result){
		if(err) throw err;
		console.log("Dtabase Created Successfully!")
	})
})