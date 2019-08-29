const fs = require('fs');

// Sync
try {
  const content = fs.readFileSync('.editorconfig', {encoding: 'UTF-8'});
  fs.writeFileSync('.editorconfig.backup', content);
  console.log('Fichier copié');
} catch (err) {
  console.log(err);
}

// Async -> Callback Hell / Pyramid of Doom
fs.readFile('.editorconfig', {encoding: 'UTF-8'}, (err, content) => {
  if (err) {
    return console.log(err);
  }
  fs.writeFile('.editorconfig.backup', content, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Fichier copié');
  });
});

// Async -> Promise (d'abord via des libs, natif depuis ES6)
fs.promises.readFile('.editorconfig', {encoding: 'UTF-8'})
  .then((content) => fs.promises.writeFile('.editorconfig.backup', content))
  .then(() => console.log('Fichier copié'))
  .catch((err) => console.log(err));

// Async -> async/await (ES2017/ES8)
(async () => {
  try {
    const content = await fs.promises.readFile('.editorconfig', {encoding: 'UTF-8'});
    await fs.promises.writeFile('.editorconfig.backup', content);
    console.log('Fichier copié');
  } catch (err) {
    console.log(err);
  }
})();
