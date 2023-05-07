const readline = require('readline');
const fs = require('fs');

const input = process.stdin;
const output = process.stdout;

const path = require('path');
const filePath = path.join(__dirname, 'mynewfile1.txt');


const rl = readline.createInterface(input, output);

console.log('\n')
console.log('------------------------------------------------------------------------');
console.log('Hello, here you can enter any text that is going to be in txt file ');
console.log('------------------------------------------------------------------------\n')
console.log('If you want to exit this code then type `exit` \n')
console.log('If you want to delete created file then type `delete` \n')
console.log('------------------------------------------------------------------------\n')




rl.on('line', (input) => {

    if (input === 'exit') {
        rl.close();
    } else if(input === 'delete' || input === 'Delete' || input === 'DELETE'){
        if(fs.existsSync(filePath)){
            fs.unlink(filePath, function (err) {
                if (err) throw err;
                
            });
            console.log('File was deleted.')
    
            rl.close();
        }
        else{
            console.log('\n')
            console.log('---------------------------------------------------------------------------')
            console.log('File was not created and have nothing in it\n')
            console.log('Please write something into a text file')
            console.log('------------------------------------------------------------------------ \n')

        }
        
    } else {
        fs.appendFile(filePath, input + '\n', function (err) {
            if (err) throw err;
            
        });
    }
    });

process.on('exit', ()=> {
    console.log('Goodbye!')
}) 
