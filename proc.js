"use strict"
const exec = require('child_process').exec;
const fs = require('fs');
const commands = require('/home/em16/Documents/NmapScripts/NmapScriptingAutomation/commands.json');
const sitesPlain = fs.readFileSync('/home/em16/Documents/NmapScripts/NmapScriptingAutomation/sites.txt', 'utf8');
let sites = sitesPlain.split('\n');
sites.splice(sites.length-1);
// console.log(sites);

for(let site in sites)
{
    for(let com in commands)
    {
        exec(`sudo nmap ${commands[com].command} ${sites[site]} -oN /home/em16/Documents/Test/${sites[site]}-${commands[com].name}.txt -oX /home/em16/Documents/Test/${sites[site]}-${commands[com].name}.xml`,
        (e, stdout, stderr) => {
            if (e) console.log(`ERROR: ${e.message}`);

            console.log('Child Process STDOUT: '+stdout);
            console.log('Child Process STDERR: '+stderr);
        });
    }
}