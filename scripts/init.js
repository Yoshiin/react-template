#!/usr/bin/env node

const readline = require("readline");
const fs = require("fs");
const exec = require('child_process').exec;
const Vnpn = require("./vnpn");
const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inquirer.question("\nProject name :\n> ", name => {
    let v = Vnpn.validate(name);
    if (!v.valid && v.errors) {
        console.log(`\n⚠ There are some erros on your package name : "${name}"`);
        v.errors.forEach(e => {
            inquirer.close();
            console.log(`    - ${e}`);
        });
        console.log('\n');
        return;
    }
    inquirer.question("Project description :\n> ", desc => {
        inquirer.question("Project author :\n> ", auth => {
            inquirer.close();
            fs.readFile("./package.json", "utf8", (err, data) => {
                if (err) {
                    console.log('Failed to read "package.json"', err);
                    inquirer.close();
                    return;
                }
                let p = JSON.parse(data);
                p.name = name;
                p.author = auth;
                p.description = desc;
                p.version = "0.0.1";
                let json = JSON.stringify(p, null, 2);
                fs.writeFileSync("package.json", json);
            });
            console.log('\nRunning "yarn" command...');
            exec('yarn', (err, stdout, stderr) => {
                console.log('\n' + stdout);
            });
        });
    });
});
