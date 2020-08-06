"use strict"
const exec = require('child_process').exec;
const fs = require('fs');
const commands = require('/home/em16/Documents/NmapScripts/NmapScriptingAutomation/dos.json');
// const commands = require('/home/em16/Documents/NmapScripts/NmapScriptingAutomation/exploits.json');
const sitesPlain = fs.readFileSync('/home/em16/Documents/NmapScripts/NmapScriptingAutomation/aplicativos.txt', 'utf8');
let sites = sitesPlain.split('\n');
// const sitesPlain = fs.readFileSync('/home/em16/Documents/NmapScripts/NmapScriptingAutomation/portales.txt', 'utf8');
// let sites = sitesPlain2.split('\n');
console.log(commands[1].name);


// for(let site in sites)
// {
//     for(let com in commands)
//     {
//         exec(`sudo nmap ${commands[com].command} ${sites[site]} -oN /home/em16/Documents/Test/${sites[site]}-${commands[com].name}.txt -oX /home/em16/Documents/Test/${sites[site]}-${commands[com].name}.xml`,
//         (e, stdout, stderr) => {
//             if (e) console.log(`ERROR: ${e.message}`);

//             console.log(`DONE: ${sites[site]}-${commands[com].name}`);
//             console.log(`ERROR: ${stderr}`);
//         });
//     }
// }