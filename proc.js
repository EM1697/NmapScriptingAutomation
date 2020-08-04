"use strict"
const exec = require('child_process').exec;
const fs = require('fs');
const commands = require('/home/em16/commands.json');
const sitesPlain = fs.readFileSync('/home/em16/sites.txt', 'utf8');
let sites = sitesPlain.split('\n');
sites.splice(sites.length-1);
// console.log(commands[0].name);
for(let site in sites)
{
    for(let com in commands)
    {
        console.log(`${sites[site]}-${commands[com].name}-${commands[com].command}`);
    }
}


// for (command in commands)
// {
//     for(site in sites)
//     {
//         sites.forEach(site => {
//             exec(`sudo nmap -${command.command} ${site} -oN /home/em16/Documents/${site}-${command.name}.txt`, (e, stdout, stderr)=> {
//                 if (e instanceof Error) {
//                     console.error(e);
//                     throw e;
//                 }
//                 console.log('stdout ', stdout);
//                 console.log('stderr ', stderr);
//         });
//         });
//     }
// }