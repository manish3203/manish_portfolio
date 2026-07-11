const pdf = require('pdf-parse');
const fs = require('fs');
const buf = fs.readFileSync('src/assets/Manish Chavan Resume.pdf');
pdf(buf).then(data => {
  fs.writeFileSync('resume_out.txt', data.text);
  console.log(data.text);
}).catch(err => console.error(err.message));
