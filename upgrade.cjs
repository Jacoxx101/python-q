const fs = require('fs');
const vm = require('vm');

let content = fs.readFileSync('./src/data/questions.js', 'utf8');
let dataString = content.replace('export const questionsData = ', '').replace(/;$/, '');

const script = new vm.Script(`const data = ${dataString}; data;`);
const data = script.runInNewContext();

data.forEach(themeGroup => {
  const theme = themeGroup.theme;
  
  themeGroup.questions.forEach(q => {
    if (theme.includes("Harry Potter")) {
      q.advancedChallenge = "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.";
      q.advancedHints = [
        "Define a class with `class Name:` and add methods for the actions.",
        "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
      ];
    } else if (theme.includes("Aviation")) {
      q.advancedChallenge = "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.";
      q.advancedHints = [
        "Use `[x for x in records if ...]` to filter and transform the data in one line.",
        "Look into the `csv` module or just use `.split(',')`."
      ];
    } else if (theme.includes("Fantasy")) {
      q.advancedChallenge = "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.";
      q.advancedHints = [
        "Import `Counter` from `collections` to tally items automatically.",
        "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
      ];
    } else if (theme.includes("Space")) {
      q.advancedChallenge = "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!";
      q.advancedHints = [
        "Replace `return` with `yield` in a loop to create a generator.",
        "Use `next(my_generator)` to advance the simulation one step at a time."
      ];
    } else if (theme.includes("Mystery")) {
      q.advancedChallenge = "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.";
      q.advancedHints = [
        "A decorator is a function that takes another function and extends its behavior.",
        "Use the `datetime` module inside your decorator to timestamp the action."
      ];
    } else {
      q.advancedChallenge = "Level Up: Optimize and secure your code. Add type hinting (e.g., `def func(a: int) -> str:`) and write at least two `assert` statements to act as mini unit tests.";
      q.advancedHints = [
        "Type hints help tools catch errors early.",
        "Use `assert result == expected, 'Error message'` to test your code."
      ];
    }
  });
});

const newContent = 'export const questionsData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('./src/data/questions.js', newContent);
console.log("Upgraded questions.js successfully!");
