const path = require('path');
const fs = require('fs');


const sourceDir = path.join(__dirname, 'files');
const destDir = path.join(__dirname,'files-copy');



fs.mkdir(destDir, { recursive: true }, (err) => {
    if (err) {
      console.error(`Failed to create directory ${destDir}`);
      console.error(err);
      return;
    }
  
    fs.readdir(sourceDir, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      files.forEach(file => {
        const sourceFile = path.join(sourceDir, file);
        const destFile = path.join(destDir, file);
        fs.copyFile(sourceFile, destFile, (err) => {
          if (err) {
            console.error(`Failed to copy ${sourceFile} to ${destFile}`);
            console.error(err);
          } else {
            console.log(`${sourceFile} was successfully copied to ${destFile}`);
          }
        });
      });
    });
  });
