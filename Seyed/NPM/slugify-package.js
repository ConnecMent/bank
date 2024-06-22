let isTitle = "How to slugify the title or sting in JavaScript?";

let convertIntoSlug = isTitle.toLocaleLowerCase().trim().replaceAll(" ", "-");

console.log(convertIntoSlug)