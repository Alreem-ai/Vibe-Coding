const fs = require('fs');
const file = 'src/app/day/1/page.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.split('\\$').join('$');
fs.writeFileSync(file, content);
