var mysql = require('mysql');

function DBConnection(): void {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "easynotes",
        password: ""
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Successfully Connected!");
      });
};

export { DBConnection };