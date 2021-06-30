const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES


const addingTask = (data) => {
    let db = new sqlite3.Database('db/db.lifeappdatabase');
    
    db.run(`INSERT INTO ${data.table} (${data.column}, id) VALUES (?, ?)`,[data.data, data.id], function(err) {
        if (err) {
          return console.log(err);
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
    
    db.close();
  
  }


  const displayingTask = (req, res) => {

    let sendData = {allTaskMonday:[],allTaskTuesday:[],allTaskWednesday:[],allTaskThursday:[],allTaskFriday:[],allTaskSaturday:[],allTaskSunday:[]};
    
  
    let db = new sqlite3.Database('db/db.lifeappdatabase', (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the movies database.');
    });
     db.serialize(() => {
      db.each(`SELECT * FROM monday where monday_id IS NOT NULL ORDER BY sortable `, (err, row) => {
        if (err) {
          console.error(err.message);
        }
          sendData.allTaskMonday.push(row);
      });

      db.each(`SELECT * FROM tuesday where tuesday_id IS NOT NULL ORDER BY sortable`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
          sendData.allTaskTuesday.push(row);
      });

      db.each(`SELECT * FROM wednesday where wednesday_id IS NOT NULL ORDER BY sortable`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
          sendData.allTaskWednesday.push(row);
      });

      db.each(`SELECT * FROM thursday where thursday_id IS NOT NULL ORDER BY sortable`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
          sendData.allTaskThursday.push(row);
      });

      db.each(`SELECT * FROM friday where friday_id IS NOT NULL ORDER BY sortable`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
          sendData.allTaskFriday.push(row);
      });

      db.each(`SELECT * FROM saturday where saturday_id IS NOT NULL ORDER BY sortable`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
          sendData.allTaskSaturday.push(row);
      });

      db.each(`SELECT * FROM sunday where sunday_id IS NOT NULL ORDER BY sortable`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
          sendData.allTaskSunday.push(row);
      });
    });
  
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      
      res.send(sendData);
      console.log('Close the database connection.');
    });
  
  }

  const deletingTask = (data) => {
    let db = new sqlite3.Database('db/db.lifeappdatabase');
    console.log(data)
   
    db.run(`delete from ${data.table} where ${data.column} = (?)`, [data.data], function(err) {
        if (err) {
          return console.log(err);
        }
    
    });
  
    
    db.close();
  
  }



  const update = (data) => {
    let db = new sqlite3.Database('db/db.lifeappdatabase');
  
    db.run(`UPDATE ${data.table} SET done = ? WHERE ${data.condition} = ?`, [data.done, data.id], function(err) {
      if (err) {
        return console.error(err.message);
      }
  
    });
  
    // close the database connection
    db.close();
  }
  const updatePlace = (data) => {
    console.log(data);
    let db = new sqlite3.Database('db/db.lifeappdatabase');
  
    db.run(`UPDATE ${data.table} SET sortable = ? WHERE ${data.condition} = ?`, [data.place, data.id], function(err) {
      if (err) {
        return console.error(err.message);
      }
  
    });
  
    // close the database connection
    db.close();
  }

// Reset the Day 
const resetTheDay = (data) => {
  console.log(data);
  let db = new sqlite3.Database('db/db.lifeappdatabase')
  db.run(`DELETE from ${data.day};`, function(err) {
    if (err) {
      return console.error(err.message);
    }
  });
  db.close();
}









// EXPORTS

exports.addingTask = addingTask;
exports.displayingTask = displayingTask;
exports.deletingTask = deletingTask;
exports.update = update;
exports.updatePlace = updatePlace;
exports.resetTheDay = resetTheDay;