const fs = require('fs')
const path = require('path')

/**
 * An asynchronous function that walks through folders and their sub-folders and triggers a function for every file
 * @param {string} dir The root folder in which we start walking
 * @param {function} callback the function that will be triggered for every file and sub-file
 */
function walk(dir, callback) {
	fs.readdir(dir, (err, files) => { // get every file in base dir
		if (err) throw err // if something goes wrong
		files.forEach(item => { // for every item in the directory we're currently in
			const filepath = path.join(dir, item)
			if (fs.lstatSync(filepath).isDirectory()) walk(filepath, callback) // if the item is a folder, walk through that one
			else callback(filepath) // if item is a file (not a folder) trigger callback()
		})
	})
}
exports.walk = walk

/**
 * A synchronous function that walks through folders and their sub-folders and triggers a function for every file
 * @param {string} dir The root folder in which we start walking
 * @param {function} callback the function that will be triggered for every file and sub-file
 */
function walkSync(dir, callback) {
	const files = fs.readdirSync(dir) // get every file in base dir
	files.forEach(item => { // for every item in the directory we're currently in
		const filepath = path.join(dir, item)
		if (fs.lstatSync(filepath).isDirectory()) walk(filepath, callback) // if the item is a folder, walk through that one
		else callback(filepath) // if item is a file (not a folder) trigger callback()
	})
}
exports.walkSync = walkSync

/**
 * so this is possible too:
 * const wanderlust = require('wanderlust')
 * wanderlust.walk(dir, callback)
 */
module.exports = {
	walk: walk,
	walkSync: walkSync
}