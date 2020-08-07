"use strict"
const exec = require('child_process').exec;
const fs = require('fs');
const commands = require('/home/em16/Documents/NmapScripts/NmapScriptingAutomation/discovery.json');
const sitesPlain = fs.readFileSync('/home/em16/Documents/NmapScripts/NmapScriptingAutomation/aplicativos.txt', 'utf8');
let sites = sitesPlain.split('\n');
sites.pop();


for(let site in sites)
{
    for(let com in commands)
    {
        exec(`sudo nmap -Pn ${commands[com].command} ${sites[site]} -oN /home/em16/Documents/DiscoveryApps/${sites[site]}-${commands[com].name}.txt -oX /home/em16/Documents/DiscoveryApps/${sites[site]}-${commands[com].name}.xml`,
        (e, stdout, stderr) => {
            if (e) console.log(`ERROR: ${e.message}`);

            console.log(`DONE: ${sites[site]}-${commands[com].name}`);
            console.log(`ERROR: ${stderr}`);
        });
    }
}
