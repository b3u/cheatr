const ui = require('cliui')();

module.exports = function (_) {
	ui.div(
		`Usage: ${require('../package.json').name} [cheatsheet] [options]\n\n` +
		'Options:\n' +
		'  -h --help\t    Show this message\n' +
		'  -v --version\t    Show the current cli version\n' +
		'  -e --edit\t    Edit or create a cheatsheet\n' +
		'  -l --list\t    List available cheatsheets\n' +
		'  -s --search=<regexp>\t    Search for a cheatsheet'
	);
	console.log(ui.toString());
};
