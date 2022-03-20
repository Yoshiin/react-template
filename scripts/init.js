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

fs.readFile("package.json", "utf8", (err, data) => {
    if (err) {
        console.error('Failed to read "package.json"', err);
        inquirer.close();
        return;
    }
    let json = JSON.parse(data);
    if (json.name !== "react-template") {
        inquirer.question("It looks like this project have been already setup.\nAre you sure that you want to re-run setup ?\nYes (y) / No (n) > ", r => {
            if (r !== "y" && r !== "yes" && r !== "Yes") {
                inquirer.close();
            } else {
                inquirerQuestions(json);
            }
        });
    } else {
        inquirerQuestions(json);
    }
});

function inquirerQuestions(json) {
    inquirer.question("\nProject name :\n> ", name => {
        let validate = Vnpn.validate(name);
        if (!validate.valid && validate.errors) {
            console.error(`\n⚠ There are some erros on your package name : "${name}"`);
            validate.errors.forEach(e => {
                console.error(`    - ${e}`);
            });
            console.error('\n');
            inquirer.close();
            return;
        }
        inquirer.question("Project description :\n> ", desc => {
            inquirer.question("Project author :\n> ", auth => {
                editFiles(json, {name, desc, auth});
                inquirer.close();
            });
        });
    });
}

function editFiles(json, data) {
    json.name = data.name;
    json.description = data.desc;
    json.author = data.auth;
    json.version = "0.0.1";

    fs.readFile("config/webpack.common.js", "utf8", (err, wcj) => {
        if (err) {
            console.error('Failed to read "config/webpack.common.js"', err);
            return;
        }
        wcj = wcj.replaceAll("react-template", data.name);
        wcj = wcj.replaceAll("Yoshin <l.mora@outlook.fr>", data.auth);
        wcj = wcj.replaceAll("React Template", `${data.name} - ${data.desc}`);
        fs.writeFileSync("config/webpack.common.js", wcj);

        let pkg = JSON.stringify(json, null, 2);
        fs.writeFileSync("package.json", pkg);

        console.log('\nRunning "yarn" command...');
        exec('yarn', (err, stdout, stderr) => {
            console.log('\n' + stdout);
        });
    });
}
