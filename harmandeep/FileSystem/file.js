// File Handling
const fs = require("fs")

// Writing to a file

// Sync
// fs.writeFileSync('./text.txt', "Hello World!") //Create on file named text.txt

// Async
//path, data, encoding, callback(for success message)
// fs.writeFile('./text.txt', "Hello sunshie", 'utf-8', (err) => {
//     if(err) throw err;
// }) 



// Reading from a file

// Sync => sync returns the data after reading
// const result = fs.readFileSync('./contacts.txt', 'utf-8')
// console.log(result)

// Async => expects the callback in which it will throw error or success message
// fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     if(err){
//         console.log('Error: ', err.message)
//     }else{
//         console.log(result)
//     }
// })


// Append to a file

// Sync
// fs.appendFileSync('./text.txt',`${new Date().getDate().toLocaleString()}\n`)


// copying a file
// sync
// fs.cpSync('./contacts.txt', './copiedContacts.txt')


// // Delete (unlink)
// fs.unlinkSync('./copiedContacts.txt')


// Check stats of a file
// console.log(fs.statSync('./text.txt'))


// Make a directory
// fs.mkdirSync('my-fs-dir')

const os = require('os')
console.log(os.cpus().length)

