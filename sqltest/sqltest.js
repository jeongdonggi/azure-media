const { Connection, Request } = require("tedious");

var a = ""
var b = ""
// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "wjdehdrl", // update me
      password: "doslqldk256@" // update me
    },
    type: "default"
  },
  server: "testsqlte.database.windows.net", // update me
  options: {
    database: "testsql", //update me 이거 잘 모르겠음
    encrypt: true
  }
};

/* 
    //Use Azure VM Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        authentication: {
            type: 'azure-active-directory-msi-vm',
        },
        options: {
            database: process.env["db_database"],
            encrypt: true,
            port: 1433
        }
    };

    //Use Azure App Service Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        authentication: {
            type: 'azure-active-directory-msi-app-service',
        },
        options: {
            database: process.env["db_database"],
            encrypt: true,
            port: 1433
        }
    });

*/

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
  
});

connection.connect();

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT * FROM dbo.login`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);


       
        
        connection.close();
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
      if (column.metadata.colName == "id"){  
        a = column.value
      }
      else{
        b = column.value
      }
    });
    const i = a
    const ps = b
    console.log(i)
    console.log(ps)
    module.exports = { i, ps}
  });
  connection.execSql(request);
}
