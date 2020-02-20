#!/usr/bin/env node
const lib = require('./lib');
const argv = process.argv.filter((_, i) => i >= 2);

function hasArgs(a, b) {
	return argv.includes(a) || argv.includes(b);
}

if (hasArgs('-h', '--help') || argv.length === 0) {
	lib.help(argv.filter(v => !v.match(/-h|--help/)));
} else if (hasArgs('-v', '--version')) {
	lib.version();
}
