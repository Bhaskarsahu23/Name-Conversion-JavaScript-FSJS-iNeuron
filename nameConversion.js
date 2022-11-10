const text = document.querySelector('#text');
const convert_btn = document.querySelector('#convert-btn');

convert_btn.addEventListener('click', () => {
  let camelCase = toCamelCase(text.value);
  let pascalCase = toPascalCase(text.value);
  let snakeCase = toSnakeCase(text.value);
  let screamingSnakeCase = toScreamingSnakeCase(text.value);
  let kebabCase = toKebabCase(text.value);
  let screamingkebabCase = toScreamingKebabCase(text.value);

  let camel_case = document.getElementById('camel-case');
  camel_case.innerText = camelCase;

  let pascal_case = document.getElementById('pascal-case');
  pascal_case.innerText = pascalCase;

  let snake_case = document.getElementById('snake-case');
  snake_case.innerText = snakeCase;

  let screaming_snake_case = document.getElementById('screaming-snake-case');
  screaming_snake_case.innerText = screamingSnakeCase;

  let kebab_case = document.getElementById('kebab-case');
  kebab_case.innerText = kebabCase;

  let screaming_kebab_case = document.getElementById('screaming-kebab-case');
  screaming_kebab_case.innerText = screamingkebabCase;
});

function toCamelCase(text) {
  let camelCase = '';
  let words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (i == 0) {
      camelCase += words[i].toLowerCase();
    } else {
      camelCase +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }
  return camelCase;
}

function toPascalCase(text) {
  let pascalCase = '';
  let words = text.split(' ');
  for (let word of words) {
    pascalCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return pascalCase;
}

function toSnakeCase(text) {
  let snakeCase = ' ';
  let words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    snakeCase += words[i].toLowerCase();
    if (i < words.length - 1) {
      snakeCase += '_';
    }
  }
  return snakeCase;
}
console.log(toSnakeCase('This is a samplle text'));
function toScreamingSnakeCase(text) {
  let screamingSnakeCase = ' ';
  let words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    screamingSnakeCase += words[i].toUpperCase();
    if (i < words.length - 1) {
      screamingSnakeCase += '_';
    }
  }
  return screamingSnakeCase;
}

function toKebabCase(text) {
  let kebabCase = ' ';
  let words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    kebabCase += words[i].toLowerCase();
    if (i < words.length - 1) {
      kebabCase += '-';
    }
  }
  return kebabCase;
}

function toScreamingKebabCase(text) {
  let screamingKebabCase = ' ';
  let words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    screamingKebabCase += words[i].toUpperCase();
    if (i < words.length - 1) {
      screamingKebabCase += '-';
    }
  }
  return screamingKebabCase;
}
