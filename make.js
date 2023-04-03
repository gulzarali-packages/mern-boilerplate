const fs = require('fs');

class Generator {
  constructor() {
    this.templateDir = './templates/';
    this.bindings = {
      'make:model': [
        dir => './src/models/',
        ''
      ],
      'make:resource': [
        dir => './src/resources/',
        'Resource'
      ],
      'make:controller': [
        dir => './src/controllers/',
        'Controller'
      ],
    };
  }

  generate(command, name) {
    if(command == 'make:crud')
      this.generateCrud(command, name);   
    else
      this.generateSingleFile(command, name);
  }

  generateCrud(command, name){

  }

  generateSingleFile(command, name){
    const binding = this.bindings[command];
    const commandArgs = this.getCommandFileName(command);

    if (!binding) {
      console.error('Invalid command');
      return;
    }

    const [getDir, postFix] = binding;

    let template = fs.readFileSync(`${this.templateDir}${commandArgs[1]}.ts`, 'utf8');
    template = template.replace(/templateName/g, name);

    fs.writeFileSync(`${getDir('')}${name}${postFix}.ts`, template);
    console.log(`${name} ${commandArgs[1]} generated`);
  }

  getCommandFileName(command){
    return  command.split(':');
  }
}

// get command-line arguments
const args = process.argv.slice(2);

// parse command and filename
const [command, name] = args;

// check if command is valid and filename is provided
const generator = new Generator();

switch (command) {
  case 'make:model':
  case 'make:resource':
  case 'make:controller':
  case 'make:crud':
    if (name) {
      generator.generate(command, name);
    } else {
      console.error('Filename not provided');
    }
    break;
  default:
    console.error('Invalid command');
    break;
}
