const heading = `# Welcome to my React Markdown Previewer! \n
## This is a sub-heading...
### And here's some other cool stuff:
`;
const code = `Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`// this is multi-line code:`;
const funcT = `\nfunction anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  `;
const textDecor = `You can also make text **bold**... whoa!\t
Or _italic_.\t
Or... wait for it... **_both!_**\t
And feel free to go crazy ~~crossing stuff out~~. \n
There's also [links](https://www.freecodecamp.org), and 
> Block Quotes!
`;

const listSh = `
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
`;

const imImage = `
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

export const deTxt = heading + "\n" + code + "\n" + funcT + "\n" + textDecor + "\n" + listSh + "\n" + imImage;