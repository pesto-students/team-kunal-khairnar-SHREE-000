const readline = require('readline');
const fs = require('fs');
const greetings = require('./greetings');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your name: ', (name) => {
  const greeting = greetings.generateGreeting(name);

  fs.writeFile('output.txt', greeting, (err) => {
    if (err) {
      console.error('Error saving the greeting:', err);
    } else {
      console.log('Greeting saved to output.txt.');
    }

    rl.close();
  });
});
