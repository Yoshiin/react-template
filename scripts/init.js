#!/usr/bin/env node

const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
if (NODE_MAJOR_VERSION < 17) {
    console.error("Node v17.x.x is required to run setup.");
    return;
}

const readline = require("readline");
const fs = require("fs");
const exec = require('child_process').exec;
const Vnpn = require("./vnpn");
const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

fs.readFile("./package.json", "utf8", (err, data) => {
    if (err) {
        console.error('Failed to read "package.json"', err);
        inquirer.close();
        return;
    }
    let pack = JSON.parse(data);
    if (pack.name !== "react-template") {
        inquirer.question("It looks like this project have been already setup.\nAre you sure that you want to re-run setup ?\nYes (y) / No (n) > ", r => {
            if (r !== "y") {
                inquirer.close();
            } else {
                inquirerQuestions(inquirer, pack);
            }
        });
    } else {
        inquirerQuestions(inquirer, pack);
    }
});

function inquirerQuestions(inq, jso) {
    inq.question("\nProject name :\n> ", name => {
        let v = Vnpn.validate(name);
        if (!v.valid && v.errors) {
            console.error(`\n⚠ There are some erros on your package name : "${name}"`);
            v.errors.forEach(e => {
                inq.close();
                console.error(`    - ${e}`);
            });
            console.error('\n');
            return;
        }
        inq.question("Project description :\n> ", desc => {
            inq.question("Project author :\n> ", auth => {
                jso.name = name;
                jso.author = auth;
                jso.description = desc;
                jso.version = "0.0.1";
                let json = JSON.stringify(jso, null, 2);
                fs.writeFileSync("package.json", json);
                console.log('\nRunning "yarn" command...');
                exec('yarn', (err, stdout, stderr) => {
                    console.log('\n' + stdout);
                    inq.close();
                });
            });
        });
    });
}
