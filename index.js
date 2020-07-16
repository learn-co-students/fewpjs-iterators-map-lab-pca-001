const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorials = tutorials.map(capitalizeFirstLetterOfEachWord)

  return newTutorials.map( title => title.join(" ") )
}

function capitalizeFirstLetterOfEachWord(title) {
  title = title.split(" ")

  return title.map(capitalizeFirstLetter)
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}