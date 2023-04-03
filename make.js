const fs = require('fs');
const path = require('path');

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

    this.crudRequests = [
      'create',
      'destroy',
      'show',
      'update'
    ];

    this.crudResources = [
      'index',
      'create',
      'destroy',
      'show',
      'update'
    ];
  };

  createDirectoryIfNotExist(dir) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  generate(command, name) {
    if (command == 'make:crud')
      this.generateCrud(command, name);
    else
      this.generateSingleFile(command, name);
  }

  generateCrud(command, name) {
    this.generateController(name);
    this.generateModel(name);
    this.generateService(name);
    this.generateRequests(name);
    this.generateResource(name);
  }
  generateController(name) {
    let template = fs.readFileSync(`${this.templateDir}crud.controller.ts`, 'utf8');
    template = template.replace(/templateName/g, name);

    const dir = './src/controllers/';
    const filePath = path.join(dir, `${name}Controller.ts`);
    this.createDirectoryIfNotExist(dir);
    fs.writeFileSync(filePath, template);
    console.log(`${name} controller generated`);
  }
  generateModel(name){
    let template = fs.readFileSync(`${this.templateDir}model.ts`, 'utf8');
    template = template.replace(/templateName/g, name);

    const dir = './src/models/';
    const filePath = path.join(dir, `${name}.ts`);
    this.createDirectoryIfNotExist(dir);
    fs.writeFileSync(filePath, template);
    console.log(`${name} model generated`);
  }
  generateService(name) {
    let template = fs.readFileSync(`${this.templateDir}crud.service.ts`, 'utf8');
    template = template.replace(/templateName/g, name);

    const dir = './src/services/';
    const filePath = path.join(dir, `${name}Service.ts`);
    this.createDirectoryIfNotExist(dir);
    fs.writeFileSync(filePath, template);
    console.log(`${name} service generated`);
  }
  generateRequests(name) {
    for (const request of this.crudRequests) {
      let template = fs.readFileSync(`${this.templateDir}requests/crud.${request}Request.ts`, 'utf8');
      template = template.replace(/templateName/g, name);

      const dir = `./src/requests/${name.toLowerCase()}`;
      const filePath = path.join(dir, `${name}${this.capitalizeFirstLetter(request)}Request.ts`);
      this.createDirectoryIfNotExist(dir);
      fs.writeFileSync(filePath, template);
      console.log(`${name} ${request} request generated`);
    }
  }
  generateResource(name) {
    for (const resource of this.crudResources) {
      let template = fs.readFileSync(`${this.templateDir}resources/crud.${resource}Resource.ts`, 'utf8');
      template = template.replace(/templateName/g, name);

      const dir = `./src/resources/${name.toLowerCase()}`;
      const filePath = path.join(dir, `${name}${this.capitalizeFirstLetter(resource)}Resource.ts`);
      this.createDirectoryIfNotExist(dir);
      fs.writeFileSync(filePath, template);
      console.log(`${name} ${resource} resource generated`);
    }
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  generateSingleFile(command, name) {
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

  getCommandFileName(command) {
    return command.split(':');
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
