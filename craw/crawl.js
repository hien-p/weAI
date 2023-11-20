const fs = require('fs');
const axios = require('axios');
const mediumToMarkdown = require('medium-to-markdown');
 
const filePath = 'data/Oraichain_AI_X_DeFi_Cook_off.md';
  // Enter url here
mediumToMarkdown.convertFromUrl('https://blog.orai.io/live-proposal-oraichain-ai-x-defi-cook-off-6fff4bc6ffb5')
.then(function (markdown) {
  //console.log(markdown); //=> Markdown content of medium post

  fs.writeFileSync(filePath, markdown);
  console.log('Markdown content saved to file:', filePath);
})
.catch(function (error) {
  console.error('Error:', error);
});
