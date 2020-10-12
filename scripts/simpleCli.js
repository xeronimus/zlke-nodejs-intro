#!/usr/bin/env node

const os = require('os');

const args = process.argv;

if (args.length < 3) {
  console.error(`please specify modus: simple or verbose`);
  process.exit(1);
}

if (args[2] === 'simple') {
  console.log(`${os.arch()}  ${os.hostname()}`);
  console.log(`#CPU ${os.cpus().length}`);
  console.log(`free mem ${Math.floor(os.freemem() / 1000 / 1000)}`);
} else if (args[2] === 'verbose') {
  console.log(`You are running on ${os.arch()}`);
  console.log(`Your hostname is ${os.hostname()}`);
  console.log(formatCpuInfo(os.cpus()));
  console.log(`${Math.floor(os.freemem() / 1000 / 1000)} MB of memory left`);
} else {
  throw new Error('First argument must be "simple" or "verbose');
}

function formatCpuInfo(cpus) {
  return `${cpus.length} CPUs in total
 ${cpus.map((cpu) => cpu.model).join('\n ')}`;
}
