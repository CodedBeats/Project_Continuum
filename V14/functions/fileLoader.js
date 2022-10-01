// dependencies
const { glob } = require("glob")
const { promisify } = require("util")
const proGlob = promisify(glob)

// this will load all js files from the folder passed as a parameter
async function loadFiles(dirName) {
    const Files = await proGlob(`${process.cwd().replace(/\\/g, "/")}/${dirName}/**/*.js`)
    // go through all files loaded and delete all cached versions of them, so on reload it makes a new version (without it there would be errors)
    Files.forEach((file) => delete require.cache[require.resolve(file)])
    return Files
}

module.exports = { loadFiles}