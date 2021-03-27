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
	var qString="create table department(dept_id int not null,dept_name varchar(50),dept_hod varchar(50),std_count int not null)"
	con.query(qString,function(err,result){
		if(err) throw err;
		console.log("Table created Successfully")
	})
})