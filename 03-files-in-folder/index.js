const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'secret-folder');


fs.readdir(filePath , { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach(file => {
        if(!file.isDirectory()){
            const fileName = path.parse(file.name).name;
            const fileType = path.extname(file.name).slice(1)
            const fullPath = path.join(filePath, file.name);

            fs.stat(fullPath, (err, stats) => {
              if (err) {
                console.error(err);
                return;
              }
              console.log(`${fileName} -  ${fileType} - ${(stats.size/1024).toFixed(2)} kb`)
            });

        }
      });
    
});


