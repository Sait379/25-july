const path = require('path')

const filePath = path.join(__dirname, "mynewfile.txt")

const parseData = path.parse(filePath)
const baseName = path.basename(filePath)
const extName = path.extname(filePath)
const resolvedPath = path.resolve(filePath)
const dirname = path.dirname(filePath)
console.log(`Chained Path: ', ${parseData.name}${parseData.ext}`)
console.log({parseData, baseName, extName, resolvedPath, dirname})