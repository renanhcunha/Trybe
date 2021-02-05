const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What file do you want to read?', (answer) => {
  console.log('Your answer is %s', answer);

  fs.readFile(answer, (err, content) => {
    if (err) throw new Error(`${err.message}`)

    console.log('File content: %s', content);
    console.log(`File size(bytes): ${content.byteLength}`)
  });

  rl.close();
})
