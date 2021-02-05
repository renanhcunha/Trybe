const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getBetterError(error) {
  if (error.code === 'ENOENT') return 'File not found'
}

rl.question('What file do you want to use?', (answer) => {
  fs.readFile(answer, (err, content) => {
    if (err) return console.log(`Error: ${getBetterError(err)}`);

    console.log('File content: %s', content);
    console.log(`File size(bytes): ${content.byteLength}`)

    rl.question('What word do you want to change?', (word) => {
      console.log(word);

      rl.close();
    })
  });

  rl.close();
})