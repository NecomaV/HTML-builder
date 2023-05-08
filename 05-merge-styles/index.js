const fs = require('fs');
const path = require('path');

const stylesDir = path.join(__dirname, 'styles');
const distDir = path.join(__dirname, 'project-dist');
const outFile = path.join(distDir, 'bundle.css');

fs.readdir(stylesDir, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  const cssFiles = files.filter(file => file.isFile() && path.extname(file.name) === '.css');
  fs.promises.mkdir(distDir, { recursive: true })
  .then(() => {
    const fileContents = cssFiles.map(file => fs.promises.readFile(path.join(stylesDir, file.name), 'utf8'));
    return Promise.all(fileContents);
  })
  .then(contents => fs.promises.writeFile(outFile, contents.join('\n')))
  .then(() => console.log(`Merged ${cssFiles.length} CSS files into ${outFile}`))
  .catch(err => console.error(`Error merging CSS files: ${err}`));

});