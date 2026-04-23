export const questionsData = [
  {
    theme: "Harry Potter Theme",
    questions: [
      {
        id: 1,
        title: "Owl Post Sorter",
        summary: "Sort a list of dictionaries using a custom key.",
        description: "You receive a list of owl post letters represented as dictionaries: `{'house': 'Gryffindor', 'urgency': 5}`. Write a function to sort this list first by house (alphabetically) and then by urgency (descending).",
        exampleInput: "[{'house': 'Slytherin', 'urgency': 2}, {'house': 'Gryffindor', 'urgency': 5}, {'house': 'Gryffindor', 'urgency': 1}]",
        exampleOutput: "[{'house': 'Gryffindor', 'urgency': 5}, {'house': 'Gryffindor', 'urgency': 1}, {'house': 'Slytherin', 'urgency': 2}]",
        hints: ["Use the `key` parameter in `sorted()` or `.sort()`.", "You can return a tuple in a lambda function to sort by multiple criteria: `lambda x: (x['house'], -x['urgency'])`."],
        advancedChallenge: "Level Up: Filter out any letters with an urgency less than 3 using a list comprehension before sorting.",
        advancedHints: ["Use `[letter for letter in letters if letter['urgency'] >= 3]`."]
      },
      {
        id: 2,
        title: "Potion Ingredient Validator",
        summary: "Use Try/Except blocks to handle bad user input.",
        description: "Ask the user to enter the quantity of 'Bezoars' needed as an integer. If they type a string like 'five', catch the `ValueError` and prompt them again until they provide a valid integer. Then, print the total cost (each Bezoar is 10 Galleons).",
        exampleInput: "User inputs: 'five', then '5'",
        exampleOutput: "'Please enter a valid number.' -> 'Total cost: 50 Galleons'",
        hints: ["Use a `while True:` loop.", "Place `int(input(...))` inside a `try:` block. Break the loop if successful."],
        advancedChallenge: "Level Up: Create a custom Exception class `InvalidIngredientError` and raise it if the input is negative.",
        advancedHints: ["Define `class InvalidIngredientError(Exception): pass` and use `raise`."]
      },
      {
        id: 3,
        title: "Marauder's Map Tracker",
        summary: "Use a dictionary to track frequencies and find the maximum.",
        description: "You have a list of student movements: `['Harry', 'Ron', 'Hermione', 'Harry', 'Draco', 'Harry']`. Write a function that counts how many times each student moved using a dictionary, and then returns the name of the student who moved the most.",
        exampleInput: "['Harry', 'Ron', 'Hermione', 'Harry', 'Draco', 'Harry']",
        exampleOutput: "Harry",
        hints: ["You can use a standard dictionary to keep counts: `counts[name] = counts.get(name, 0) + 1`.", "Or import `Counter` from the `collections` module for a one-line solution."],
        advancedChallenge: "Level Up: If there's a tie for the most movements, return all tied students in a list.",
        advancedHints: ["Find the maximum value, then use a list comprehension to get all keys that match that max value."]
      },
      {
        id: 4,
        title: "House Points Leaderboard",
        summary: "Merge and sum multiple dictionaries.",
        description: "You have three dictionaries representing points awarded by three different teachers. `d1 = {'Gryffindor': 10, 'Slytherin': 5}`, `d2 = {'Ravenclaw': 20, 'Gryffindor': 5}`, `d3 = {'Hufflepuff': 15}`. Write a function to merge them into one dictionary with the total points for each house.",
        exampleInput: "d1, d2, d3 as above",
        exampleOutput: "{'Gryffindor': 15, 'Slytherin': 5, 'Ravenclaw': 20, 'Hufflepuff': 15}",
        hints: ["Create an empty result dictionary.", "Iterate over a list of the dictionaries `[d1, d2, d3]` and update the totals."],
        advancedChallenge: "Level Up: Use `collections.defaultdict` to make the addition cleaner.",
        advancedHints: ["`from collections import defaultdict`; `totals = defaultdict(int)` allows you to do `totals[k] += v` without checking if the key exists."]
      },
      {
        id: 5,
        title: "Spell Cooldown Decorator",
        summary: "Write a simple function decorator to print logs.",
        description: "Write a decorator `@log_spell` that prints 'Casting spell...' before a function runs, and 'Spell complete!' after it finishes. Apply it to a simple function `def cast(spell_name): print(spell_name)`.",
        exampleInput: "cast('Expelliarmus')",
        exampleOutput: "'Casting spell...' -> 'Expelliarmus' -> 'Spell complete!'",
        hints: ["A decorator is a function that takes a function as an argument and returns a wrapper function.", "Inside the wrapper, print your first message, call the original function, then print the final message."],
        advancedChallenge: "Level Up: Modify the decorator to accept an argument so you can specify the wizard's name: `@log_spell('Harry')`.",
        advancedHints: ["You'll need a three-level nested function: the decorator maker, the actual decorator, and the wrapper."]
      },
      {
        id: 6,
        title: "Wand Core Combinations",
        summary: "Use itertools to generate combinations.",
        description: "You have a list of woods `['Holly', 'Vine', 'Oak']` and a list of cores `['Phoenix', 'Dragon', 'Unicorn']`. Use the `itertools` module to generate and print all possible unique wand combinations (1 wood + 1 core).",
        exampleInput: "woods, cores",
        exampleOutput: "[('Holly', 'Phoenix'), ('Holly', 'Dragon'), ...]",
        hints: ["Import `itertools`.", "Use `itertools.product(woods, cores)` to get the Cartesian product of the two lists."],
        advancedChallenge: "Level Up: Format the output as a list of strings: 'Holly with Phoenix core'.",
        advancedHints: ["Wrap the `itertools.product` in a list comprehension with an f-string."]
      },
      {
        id: 7,
        title: "Hogwarts Class Constructor",
        summary: "Build a basic Object-Oriented Class.",
        description: "Create a `Wizard` class with an `__init__` method that accepts `name` and `house`. Add a method `introduce(self)` that prints 'I am [name] of [house]!'. Instantiate two wizards and call their introduce methods.",
        exampleInput: "w = Wizard('Luna', 'Ravenclaw'); w.introduce()",
        exampleOutput: "I am Luna of Ravenclaw!",
        hints: ["Use `class Wizard:` and `def __init__(self, name, house):`.", "Remember to use `self.name = name` to store the instance variables."],
        advancedChallenge: "Level Up: Add a class attribute `total_wizards` that increments every time a new Wizard is created.",
        advancedHints: ["Define `total_wizards = 0` directly under the class declaration, and do `Wizard.total_wizards += 1` inside `__init__`."]
      },
      {
        id: 8,
        title: "Patronus Frequency Counter",
        summary: "Clean strings and count word frequency.",
        description: "Given a long string: `'Stag, otter! stag? Jack Russell Terrier; OTTER.'`, write a function that cleans the punctuation, converts everything to lowercase, splits by words (or phrases separated by commas), and counts the frequency of each Patronus.",
        exampleInput: "text = 'Stag, otter! stag? Jack Russell Terrier; OTTER.'",
        exampleOutput: "{'stag': 2, 'otter': 2, 'jack russell terrier': 1}",
        hints: ["Use `import string` and `text.translate(str.maketrans('', '', string.punctuation))` to remove punctuation.", "Then use `.lower().split()` or split by commas depending on your logic."],
        advancedChallenge: "Level Up: Use a regular expression `re.split()` to split the string by multiple delimiters (commas, semicolons, etc.).",
        advancedHints: ["`import re`; use `re.split(r'[,;!?]', text)`."]
      },
      {
        id: 9,
        title: "Magical File Parser",
        summary: "Simulate reading a CSV file using string manipulation.",
        description: "You have a multi-line string representing CSV data: `'name,house,year\\nHarry,Gryffindor,5\\nDraco,Slytherin,5'`. Write a function to parse this string into a list of dictionaries: `[{'name': 'Harry', 'house': 'Gryffindor', 'year': '5'}, ...]`. Do not use the `csv` module.",
        exampleInput: "csv_string",
        exampleOutput: "[{'name': 'Harry', 'house': 'Gryffindor', 'year': '5'}, ...]",
        hints: ["Split the string by `\\n` to get the lines.", "The first line contains the keys (headers). Use `zip(headers, row)` to combine them into a dictionary."],
        advancedChallenge: "Level Up: Write the parsed data out to an actual `output.json` file.",
        advancedHints: ["Import the `json` module and use `json.dump(data, file)`."]
      },
      {
        id: 10,
        title: "Password to the Common Room",
        summary: "Use lambda functions and map/filter.",
        description: "You have a list of potential passwords `['caput draconis', 'pig snout', 'fortuna major']`. Use the `map()` function and a `lambda` to capitalize the first letter of every word (title case) in the list.",
        exampleInput: "passwords",
        exampleOutput: "['Caput Draconis', 'Pig Snout', 'Fortuna Major']",
        hints: ["The string method `.title()` is perfect for this.", "Use `list(map(lambda p: p.title(), passwords))`."],
        advancedChallenge: "Level Up: Chain a `filter()` function to only keep passwords that are longer than 10 characters.",
        advancedHints: ["Wrap your `map` result in `filter(lambda p: len(p) > 10, ...)`."]
      }
    ]
  },
  {
    theme: "Airplanes / Aviation Theme",
    questions: [
      {
        id: 11,
        title: "Flight Delay Calculator",
        summary: "Manipulate Dates and Times.",
        description: "Import the `datetime` module. Given a scheduled departure string `'2023-12-01 14:30'` and a delay of `45` minutes, write a function to calculate and print the new departure time in the same string format.",
        exampleInput: "time = '2023-12-01 14:30', delay = 45",
        exampleOutput: "'2023-12-01 15:15'",
        hints: ["Use `datetime.strptime()` to convert the string to a datetime object.", "Use `timedelta(minutes=45)` to add the delay.", "Use `.strftime()` to convert it back to a string."],
        advancedChallenge: "Level Up: Handle a scenario where the delay pushes the flight into the next day.",
        advancedHints: ["`timedelta` naturally handles rolling over into the next day! Just make sure your `strftime` includes the date portion."]
      },
      {
        id: 12,
        title: "Baggage Weight Filter",
        summary: "Use list comprehensions with conditional logic.",
        description: "You have a list of baggage weights in kg: `[15, 22, 30, 8, 25, 40]`. Any bag over 23 kg incurs a fee. Write a single list comprehension that creates a new list containing only the weights that will be charged a fee.",
        exampleInput: "[15, 22, 30, 8, 25, 40]",
        exampleOutput: "[30, 25, 40]",
        hints: ["The syntax is `[item for item in my_list if condition]`."],
        advancedChallenge: "Level Up: Modify the comprehension to output a list of tuples: `(weight, 'Fee')` for heavy bags, and `(weight, 'OK')` for others.",
        advancedHints: ["Use a ternary operator inside the comprehension: `[(w, 'Fee' if w > 23 else 'OK') for w in weights]`."]
      },
      {
        id: 13,
        title: "Seat Assignment Matrix",
        summary: "Navigate a 2D list (matrix).",
        description: "You have a 2D list representing rows of seats: `[['1A', '1B'], ['2A', '2B'], ['3A', '3B']]`. Write a function that takes a flat list of passengers `['Alice', 'Bob', 'Charlie']` and returns a dictionary mapping passengers to available seats sequentially.",
        exampleInput: "seats, passengers",
        exampleOutput: "{'Alice': '1A', 'Bob': '1B', 'Charlie': '2A'}",
        hints: ["You can flatten the 2D list first using a nested list comprehension: `[seat for row in seats for seat in row]`.", "Then use `zip(passengers, flat_seats)` to pair them up."],
        advancedChallenge: "Level Up: Handle the case where there are more passengers than seats by raising a custom error.",
        advancedHints: ["Check `if len(passengers) > len(flat_seats): raise ValueError('Flight Overbooked!')`."]
      },
      {
        id: 14,
        title: "Pilot Logbook Reader",
        summary: "Work with *args and **kwargs.",
        description: "Write a function `log_flight(pilot_name, *destinations, **flight_details)`. The function should print the pilot's name, loop through and print all the destinations they flew to, and then print out any extra flight details (like `weather='sunny', plane='Boeing 737'`).",
        exampleInput: "log_flight('Amelia', 'JFK', 'LAX', weather='clear', duration=5)",
        exampleOutput: "Amelia flew to JFK, LAX. Details: weather: clear, duration: 5",
        hints: ["`*destinations` creates a tuple of positional arguments.", "`**flight_details` creates a dictionary of keyword arguments. Loop through it using `.items()`."],
        advancedChallenge: "Level Up: Add type hints to the function signature.",
        advancedHints: ["`def log_flight(pilot_name: str, *destinations: str, **flight_details: Any) -> None:`"]
      },
      {
        id: 15,
        title: "Airport Code Validator",
        summary: "Use the `re` module for pattern matching.",
        description: "Write a function using the `re` module to check if a given string is a valid IATA airport code. A valid code must be exactly 3 uppercase letters (e.g., 'JFK', 'LAX'). It should return True or False.",
        exampleInput: "validate('JFK'), validate('lax'), validate('JFK1')",
        exampleOutput: "True, False, False",
        hints: ["Import `re`.", "Use the pattern `r'^[A-Z]{3}$'`.", "Use `re.match()` or `re.fullmatch()`."],
        advancedChallenge: "Level Up: Validate an entire boarding pass string that looks like 'Flight AA100 from JFK to LAX' to extract the origin and destination codes.",
        advancedHints: ["Use `re.findall(r'\\b[A-Z]{3}\\b', text)` to extract the 3-letter codes."]
      },
      {
        id: 16,
        title: "Flight Crew Shifts",
        summary: "Use Sets to find intersections and differences.",
        description: "You have two sets of pilot IDs: `morning_shift = {101, 102, 105}` and `evening_shift = {102, 107, 108}`. Use Python set operations to find: 1) Pilots working both shifts, 2) All unique pilots working today, 3) Pilots only working the morning shift.",
        exampleInput: "morning_shift, evening_shift",
        exampleOutput: "Both: {102}, Total: {101, 102, 105, 107, 108}, Morning only: {101, 105}",
        hints: ["Use `&` or `.intersection()` for both.", "Use `|` or `.union()` for total.", "Use `-` or `.difference()` for morning only."],
        advancedChallenge: "Level Up: You have a list of sets representing shifts for the whole week. Find the pilot who worked every single day.",
        advancedHints: ["Use `set.intersection(*list_of_sets)` to find elements common to all sets in the list."]
      },
      {
        id: 17,
        title: "Frequent Flyer OOP",
        summary: "Use Class inheritance.",
        description: "Create a base class `Passenger` with an `__init__` (name, miles) and a method `book_flight()`. Then create a subclass `VIPPassenger` that inherits from `Passenger` but overrides `book_flight()` to print 'Booking with priority boarding!', while still keeping the parent class's properties.",
        exampleInput: "v = VIPPassenger('John', 5000); v.book_flight()",
        exampleOutput: "Booking with priority boarding!",
        hints: ["Define `class VIPPassenger(Passenger):`.", "You don't need to rewrite `__init__` if the subclass uses the exact same setup, or use `super().__init__(name, miles)` if you add new attributes."],
        advancedChallenge: "Level Up: Add a class method to `Passenger` that instantiates a new passenger from a CSV string like 'Alice,1000'.",
        advancedHints: ["Use the `@classmethod` decorator. The method should accept `cls` and `csv_string`, split the string, and return `cls(name, int(miles))`."]
      },
      {
        id: 18,
        title: "Runway Generator",
        summary: "Write a generator function using yield.",
        description: "Write a generator function `runway_clearance(num_planes)` that yields the string 'Plane [X] cleared for takeoff' for planes 1 up to `num_planes`. Use a `for` loop to call the generator and print the results.",
        exampleInput: "runway_clearance(3)",
        exampleOutput: "'Plane 1 cleared for takeoff' \\n 'Plane 2...' \\n 'Plane 3...'",
        hints: ["Instead of returning a list, use a `for i in range(1, num_planes + 1):` loop and use `yield f'Plane {i}...'` inside the function."],
        advancedChallenge: "Level Up: Make an infinite generator that continuously yields takeoff clearances forever. Use `next()` manually to get the first 5.",
        advancedHints: ["Use `while True:` instead of a `for` loop inside the generator."]
      },
      {
        id: 19,
        title: "Aircraft Fuel Dictionary Grouping",
        summary: "Group data in dictionaries.",
        description: "You have a list of dictionaries: `[{'type': 'Boeing', 'fuel': 500}, {'type': 'Airbus', 'fuel': 300}, {'type': 'Boeing', 'fuel': 200}]`. Write a function to group and sum the fuel by aircraft type.",
        exampleInput: "fleet list",
        exampleOutput: "{'Boeing': 700, 'Airbus': 300}",
        hints: ["Create an empty dictionary `totals`.", "Loop through the list, and use `totals[plane['type']] = totals.get(plane['type'], 0) + plane['fuel']`."],
        advancedChallenge: "Level Up: Write the same logic using the `groupby` function from the `itertools` module.",
        advancedHints: ["You must sort the list by 'type' before using `itertools.groupby`, otherwise it won't group properly!"]
      },
      {
        id: 20,
        title: "Black Box Error Logger",
        summary: "Work with the logging module.",
        description: "Import the `logging` module. Configure it to log at the `WARNING` level. Write a function that accepts a system status code. If the code is 'ERROR', use `logging.error('Engine failure!')`. If it's 'OK', use `logging.info('Systems nominal')` (which should not appear because of the level setting).",
        exampleInput: "check_status('ERROR'), check_status('OK')",
        exampleOutput: "Only the ERROR log prints to the console.",
        hints: ["Use `logging.basicConfig(level=logging.WARNING)`.", "Use `logging.error(...)` and `logging.info(...)` inside your conditions."],
        advancedChallenge: "Level Up: Configure the logger to save the output to a file `blackbox.log` instead of printing to the console.",
        advancedHints: ["Pass `filename='blackbox.log'` into the `basicConfig` setup."]
      }
    ]
  },
  {
    theme: "Fantasy Kingdom Theme",
    questions: [
      {
        id: 21,
        title: "Tavern Bill Splitter",
        summary: "Use reduce() from functools.",
        description: "Import `reduce` from `functools`. You have a list of expenses at the tavern: `[15.50, 8.00, 22.00, 5.00]`. Use `reduce` and a lambda function to calculate the total bill, then divide it equally among 4 adventurers.",
        exampleInput: "expenses = [15.50, 8.00, 22.00, 5.00]",
        exampleOutput: "Total: 50.50, Each pays: 12.625",
        hints: ["`from functools import reduce`.", "Syntax: `reduce(lambda x, y: x + y, expenses)`.", "Divide the total by 4."],
        advancedChallenge: "Level Up: Add a 20% tip to the final total using a separate `map()` function before reducing.",
        advancedHints: ["`map(lambda x: x * 1.2, expenses)`."]
      },
      {
        id: 22,
        title: "Dragon Name Generator",
        summary: "Use string formatting and random choice.",
        description: "Import the `random` module. Create a list of prefixes `['Glaur', 'Smau', 'Baler']` and suffixes `['ung', 'g', 'ion']`. Write a function that randomly selects one prefix and one suffix, concatenates them, and returns the dragon's name.",
        exampleInput: "(Run the function multiple times)",
        exampleOutput: "Smaug, Glaurung, Balerion...",
        hints: ["Use `random.choice(prefixes)` and `random.choice(suffixes)`.", "Combine them with `+` or an f-string."],
        advancedChallenge: "Level Up: Ensure that the same prefix and suffix combination is never generated twice by storing used names in a `set`.",
        advancedHints: ["Use a `while` loop that generates a name, checks if it's in the `used_names` set, and if not, adds it and returns."]
      },
      {
        id: 23,
        title: "Inventory Zip",
        summary: "Iterate over multiple lists simultaneously using zip.",
        description: "You have two lists: `items = ['Sword', 'Shield', 'Potion']` and `weights = [10, 15, 2]`. Use the `zip()` function in a for loop to print out 'The [item] weighs [weight] lbs.' for each item.",
        exampleInput: "items, weights",
        exampleOutput: "The Sword weighs 10 lbs. \\n The Shield weighs 15 lbs. ...",
        hints: ["Syntax: `for item, weight in zip(items, weights):`", "Use an f-string to format the output."],
        advancedChallenge: "Level Up: Convert the zipped lists directly into a dictionary in one line of code.",
        advancedHints: ["Use the `dict()` constructor: `dict(zip(items, weights))`."]
      },
      {
        id: 24,
        title: "King's Treasury Recursion",
        summary: "Write a recursive function.",
        description: "The King adds gold to his treasury recursively. Day 1: 10g. Day 2: Day 1 + 20g. Day 3: Day 2 + 30g. Write a recursive function `treasury(days)` that calculates the total gold on a given day without using loops.",
        exampleInput: "treasury(3)",
        exampleOutput: "60 (because 10 + (10+20) + (30) = 60)",
        hints: ["A recursive function calls itself.", "Base case: `if days == 1: return 10`.", "Recursive case: `return (days * 10) + treasury(days - 1)`."],
        advancedChallenge: "Level Up: Optimize your recursive function using memoization so it can calculate `treasury(500)` quickly.",
        advancedHints: ["Import `functools` and add the `@lru_cache(maxsize=None)` decorator above your function definition."]
      },
      {
        id: 25,
        title: "Guild Member Enumeration",
        summary: "Use enumerate to get list indices.",
        description: "Given a list of guild members ranked by power: `['Arthur', 'Lancelot', 'Gawain', 'Percival']`. Use `enumerate()` to print their rank and name, starting with Rank 1. Example: 'Rank 1: Arthur'.",
        exampleInput: "members list",
        exampleOutput: "Rank 1: Arthur \\n Rank 2: Lancelot ...",
        hints: ["`for index, name in enumerate(members, start=1):`", "The `start=1` argument saves you from having to do `index + 1`."],
        advancedChallenge: "Level Up: Write the enumerated list to a text file `ranks.txt` instead of printing it.",
        advancedHints: ["Use `with open('ranks.txt', 'w') as f:` and write to `f` inside the loop."]
      },
      {
        id: 26,
        title: "Castle Guard Duty",
        summary: "Understand variable scope (global vs local).",
        description: "Define a global variable `guards = 10`. Write a function `shift_change()` that adds 5 to `guards`. You will need to use the `global` keyword inside the function to modify the outer variable. Call the function and print the new global value.",
        exampleInput: "shift_change()",
        exampleOutput: "15",
        hints: ["Inside the function, write `global guards` before you do `guards += 5`.", "Without `global`, Python thinks you are trying to assign a new local variable before defining it."],
        advancedChallenge: "Level Up: Rewrite the logic to avoid the `global` keyword entirely, which is a better programming practice.",
        advancedHints: ["Pass `guards` into the function as an argument, return the modified value, and reassign it outside: `guards = shift_change(guards)`."]
      },
      {
        id: 27,
        title: "Dungeon Map Slice",
        summary: "Advanced list slicing.",
        description: "A dungeon path is represented as a list of integers: `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`. Use list slicing to extract: 1) The first 3 rooms, 2) The last 3 rooms, 3) Every second room (even numbers), and 4) The entire list in reverse order.",
        exampleInput: "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]",
        exampleOutput: "[0, 1, 2], [7, 8, 9], [0, 2, 4, 6, 8], [9, 8, 7...]",
        hints: ["Slicing syntax is `list[start:stop:step]`.", "Reverse is `[::-1]`.", "Last three is `[-3:]`."],
        advancedChallenge: "Level Up: Replace the middle 4 elements (indices 3 to 6) with a single string 'Monster' using slice assignment.",
        advancedHints: ["You can assign directly to a slice: `path[3:7] = ['Monster']`."]
      },
      {
        id: 28,
        title: "Blacksmith Dunder Methods",
        summary: "Implement magic (dunder) methods in a class.",
        description: "Create a `Weapon` class with `name` and `damage`. Implement the `__str__(self)` method to return a readable string like 'Sword (15 dmg)'. Implement the `__add__(self, other)` method so that adding two weapons together returns a new `Weapon` object combining their names and damage.",
        exampleInput: "w1 = Weapon('Sword', 10); w2 = Weapon('Axe', 15); print(w1 + w2)",
        exampleOutput: "Sword-Axe (25 dmg)",
        hints: ["`__str__` should return a formatted string.", "`__add__` should take `self` and `other` and `return Weapon(self.name + '-' + other.name, self.damage + other.damage)`."],
        advancedChallenge: "Level Up: Implement `__gt__` (greater than) so you can use the `>` operator to see which weapon has more damage.",
        advancedHints: ["`def __gt__(self, other): return self.damage > other.damage`."]
      },
      {
        id: 29,
        title: "Jester's Anagram Checker",
        summary: "Compare strings using sorted() or collections.",
        description: "Write a function that takes two words and checks if they are anagrams of each other (contain the exact same letters, ignoring case and spaces). Example: 'Listen' and 'Silent'. Return True or False.",
        exampleInput: "is_anagram('Listen', 'Silent')",
        exampleOutput: "True",
        hints: ["Convert both strings to lowercase and remove spaces using `.replace(' ', '')`.", "Use `sorted(word1) == sorted(word2)` to compare them."],
        advancedChallenge: "Level Up: Solve the anagram check using dictionaries or `collections.Counter` instead of sorting.",
        advancedHints: ["Sorting is `O(N log N)`. Using `Counter(word1) == Counter(word2)` is `O(N)`."]
      },
      {
        id: 30,
        title: "Royal Decree Formatter",
        summary: "Multi-line strings and advanced formatting.",
        description: "Write a function that takes a King's name, a tax percentage (float like 0.15), and a date. Return a multi-line formatted string (using triple quotes `'''`) that announces the decree. Format the tax as a percentage (e.g., 15%).",
        exampleInput: "decree('Arthur', 0.15, '10/24')",
        exampleOutput: "Hear ye! King Arthur\\ndecrees a tax of 15%\\neffective 10/24.",
        hints: ["Use `f'''...'''` for a multi-line f-string.", "Format the float as a percentage using `{tax:.0%}`."],
        advancedChallenge: "Level Up: Use the `textwrap` module to ensure no line in the decree exceeds 20 characters.",
        advancedHints: ["Import `textwrap` and use `textwrap.fill(your_long_string, width=20)`."]
      }
    ]
  },
  {
    theme: "Space / Sci-Fi Theme",
    questions: [
      {
        id: 31,
        title: "Planet Gravity Dictionary Comprehension",
        summary: "Create dictionaries using comprehension syntax.",
        description: "You have a dictionary of planet masses: `{'Earth': 1.0, 'Mars': 0.11, 'Jupiter': 317.8}`. Create a new dictionary where the values are the masses multiplied by 9.8 (to estimate gravity relative to Earth scale) using a dictionary comprehension.",
        exampleInput: "{'Earth': 1.0, 'Mars': 0.11, 'Jupiter': 317.8}",
        exampleOutput: "{'Earth': 9.8, 'Mars': 1.078, 'Jupiter': 3114.44}",
        hints: ["Syntax: `{key: value * 9.8 for key, value in planets.items()}`.", "Round the result if necessary using `round(v * 9.8, 2)`."],
        advancedChallenge: "Level Up: Filter out any planets with a calculated gravity greater than 100 within the same comprehension.",
        advancedHints: ["Add an `if` clause at the end of the comprehension: `{k: v*9.8 for k, v in d.items() if v*9.8 <= 100}`."]
      },
      {
        id: 32,
        title: "Asteroid Field Tuple Unpacking",
        summary: "Extract values from lists of tuples.",
        description: "You have a list of tuples representing asteroid coordinates and sizes: `[(10, 20, 5), (30, 40, 10), (50, 60, 2)]`. Write a `for` loop that unpacks the tuples into `x, y, size` variables and prints only the coordinates of asteroids with a size greater than 4.",
        exampleInput: "[(10, 20, 5), (30, 40, 10), (50, 60, 2)]",
        exampleOutput: "Warning: Large asteroid at (10, 20) \\n Warning: Large asteroid at (30, 40)",
        hints: ["Use `for x, y, size in asteroids:`.", "Check `if size > 4:` before printing."],
        advancedChallenge: "Level Up: Write a function that accepts an arbitrary number of asteroid tuples using `*args` and returns the largest size found.",
        advancedHints: ["`def find_largest(*asteroids): return max(size for x, y, size in asteroids)`."]
      },
      {
        id: 33,
        title: "Alien Translation Matrix",
        summary: "Work with 2D lists and nested loops.",
        description: "You have a 2D list containing English words and Alien translations: `[['hello', 'zorg'], ['water', 'blop'], ['peace', 'grak']]`. Write a function that converts this 2D list into a dictionary where English is the key and Alien is the value.",
        exampleInput: "matrix as above",
        exampleOutput: "{'hello': 'zorg', 'water': 'blop', 'peace': 'grak'}",
        hints: ["Create an empty dictionary.", "Loop through the matrix: `for row in matrix:` and assign `dict[row[0]] = row[1]`."],
        advancedChallenge: "Level Up: Convert the 2D list directly into a dictionary using the `dict()` constructor in one line.",
        advancedHints: ["`dict(my_2d_list)` automatically uses the first element of each inner list as the key and the second as the value!"]
      },
      {
        id: 34,
        title: "Hyperdrive Sequence Verification",
        summary: "Use the all() and any() built-in functions.",
        description: "A hyperdrive sequence is valid only if ALL system checks return True. You have a list of booleans: `[True, True, True, False, True]`. Use the `all()` function to determine if the jump is safe. Then use `any()` to see if AT LEAST ONE system is online.",
        exampleInput: "[True, True, True, False, True]",
        exampleOutput: "Safe to jump: False. Any systems online: True.",
        hints: ["`all(sequence)` returns True only if every element is True.", "`any(sequence)` returns True if at least one element is True."],
        advancedChallenge: "Level Up: Use a generator expression inside `all()` to check if all temperatures in `[80, 95, 110, 85]` are below 100.",
        advancedHints: ["`all(temp < 100 for temp in temps)`."]
      },
      {
        id: 35,
        title: "Captain's Log File I/O",
        summary: "Read from and append to a text file.",
        description: "Write a script that creates a file called `log.txt` and writes 'Stardate 4523.3: We have entered orbit.' to it. Then, open the file again in 'append' mode (`'a'`) and add 'Stardate 4524.1: Encountered alien probe.' Read the whole file and print it.",
        exampleInput: "Run the script",
        exampleOutput: "Prints both lines from the newly created file.",
        hints: ["Use the context manager `with open('log.txt', 'w') as f:` for writing.", "Use `with open('log.txt', 'a') as f:` for appending.", "Don't forget to add newline characters `\\n`."],
        advancedChallenge: "Level Up: Use the `os` and `pathlib` modules to check if `log.txt` already exists before trying to read it.",
        advancedHints: ["`from pathlib import Path`; `if Path('log.txt').exists(): ...`"]
      },
      {
        id: 36,
        title: "Oxygen Scrubbing Property",
        summary: "Use @property decorators in classes.",
        description: "Create a `LifeSupport` class with a private attribute `_oxygen_level` (starting at 100). Use the `@property` decorator to create a getter for `oxygen_level`. Create a setter using `@oxygen_level.setter` that prevents the level from being set below 0 or above 100.",
        exampleInput: "ls = LifeSupport(); ls.oxygen_level = 150",
        exampleOutput: "Level is capped at 100.",
        hints: ["`@property def oxygen_level(self): return self._oxygen_level`.", "`@oxygen_level.setter def oxygen_level(self, value):` check the bounds here."],
        advancedChallenge: "Level Up: Raise a `ValueError` in the setter if the user tries to pass a string instead of a number.",
        advancedHints: ["Use `if not isinstance(value, (int, float)): raise ValueError(...)`."]
      },
      {
        id: 37,
        title: "Wormhole Date Math",
        summary: "Calculate time differences using datetime.",
        description: "Import `datetime`. The spaceship entered a wormhole on `'2050-01-01'` and exited on `'2055-12-31'`. Convert these strings to datetime objects and calculate the total number of days spent in the wormhole.",
        exampleInput: "'2050-01-01', '2055-12-31'",
        exampleOutput: "2190 days",
        hints: ["Use `datetime.strptime(date_str, '%Y-%m-%d')`.", "Subtracting two datetime objects returns a `timedelta` object.", "Access the days using `delta.days`."],
        advancedChallenge: "Level Up: Add 10,000 days to the exit date and print the future date in `Month Day, Year` format.",
        advancedHints: ["`future = exit_date + timedelta(days=10000)`; `future.strftime('%B %d, %Y')`."]
      },
      {
        id: 38,
        title: "Star Map JSON Parsing",
        summary: "Convert JSON strings to Python dictionaries.",
        description: "Import the `json` module. You receive a JSON string from a probe: `'{\"system\": \"Alpha Centauri\", \"planets\": 3, \"habitable\": true}'`. Parse this string into a Python dictionary. Modify the `planets` value to 4, and convert the dictionary back into a JSON string.",
        exampleInput: "json_str as above",
        exampleOutput: "'{\"system\": \"Alpha Centauri\", \"planets\": 4, \"habitable\": true}'",
        hints: ["Use `json.loads(string)` to convert JSON to a dictionary.", "Use `json.dumps(dictionary)` to convert a dictionary to a JSON string."],
        advancedChallenge: "Level Up: Pretty-print the output JSON string with an indentation of 4 spaces.",
        advancedHints: ["Pass `indent=4` to the `json.dumps()` method."]
      },
      {
        id: 39,
        title: "Alien Signal Retry Loop",
        summary: "Write a loop with a break and else clause.",
        description: "Write a loop that tries to establish a connection 5 times (simulated with a random `True/False` success rate). If it succeeds, `break` the loop. Use the `else` clause of the `for` loop to print 'Connection failed permanently' if it never breaks.",
        exampleInput: "(Simulated random successes)",
        exampleOutput: "'Connection established on try 3' OR 'Connection failed permanently'",
        hints: ["Python `for` loops have an `else` block that runs ONLY if the loop finishes without hitting a `break`.", "`for i in range(5): ... if success: break else: print(...)`."],
        advancedChallenge: "Level Up: Wrap this logic in a function and add an exponential backoff time delay using `time.sleep(2 ** i)` between attempts.",
        advancedHints: ["Import `time` and sleep before the next iteration, increasing the wait time exponentially."]
      },
      {
        id: 40,
        title: "Spaceship Subsystem Modules",
        summary: "Understand Python file imports.",
        description: "Explain how you would organize a python project. Imagine you have a file `engine.py` with a function `warp()`. In your `main.py` file, write the import statement required to bring in the `warp` function and call it, assuming both files are in the same directory.",
        exampleInput: "engine.py has `def warp(): print('Zoom!')`",
        exampleOutput: "`from engine import warp; warp()`",
        hints: ["Use `import filename` (without the .py) or `from filename import function_name`."],
        advancedChallenge: "Level Up: Prevent `warp()` from running automatically if someone accidentally imports `main.py`.",
        advancedHints: ["Wrap the execution logic in `if __name__ == '__main__':`."]
      }
    ]
  },
  {
    theme: "Mystery / Detective / Weird Theme",
    questions: [
      {
        id: 41,
        title: "Suspect List Deduplication",
        summary: "Remove duplicates while preserving order.",
        description: "You have a list of suspects spotted at the scene, recorded chronologically: `['Plum', 'Green', 'Plum', 'Mustard', 'Green']`. A `set` removes duplicates but loses order. Write a function that removes duplicates but keeps the chronological order of their first appearance.",
        exampleInput: "['Plum', 'Green', 'Plum', 'Mustard', 'Green']",
        exampleOutput: "['Plum', 'Green', 'Mustard']",
        hints: ["Create an empty list for the result and an empty set to track 'seen' items.", "Loop through the suspects; if not in 'seen', append to result and add to 'seen'."],
        advancedChallenge: "Level Up: Do this in one line of code using dictionaries.",
        advancedHints: ["In modern Python, standard dictionaries preserve insertion order. Try `list(dict.fromkeys(suspects))`."]
      },
      {
        id: 42,
        title: "Secret Code Reverser",
        summary: "Reverse words in a sentence.",
        description: "A dying spy left a message where every word is written backward, but the sentence structure is normal: `'eht relikk si nworb'`. Write a function to reverse each individual word and return the readable sentence.",
        exampleInput: "'eht relikk si nworb'",
        exampleOutput: "'the killer is brown'",
        hints: ["Split the sentence into words: `words = message.split()`.", "Reverse each word using slicing: `word[::-1]`.", "Join them back together: `' '.join(reversed_words)`."],
        advancedChallenge: "Level Up: Do this in a single line of code using a list comprehension and `.join()`.",
        advancedHints: ["`' '.join([w[::-1] for w in message.split()])`."]
      },
      {
        id: 43,
        title: "Evidence Timestamp Matcher",
        summary: "Filter lists using lambda functions.",
        description: "You have a list of timestamps (integers representing hours): `[14, 15, 18, 22, 23]`. The crime happened between hour 17 and 20. Use the `filter()` function with a `lambda` to find all timestamps that fall within that range.",
        exampleInput: "[14, 15, 18, 22, 23]",
        exampleOutput: "[18]",
        hints: ["Syntax: `filter(lambda x: 17 <= x <= 20, timestamps)`.", "Remember to cast the result back to a list: `list(...)`."],
        advancedChallenge: "Level Up: Re-write the solution using a generator expression and iterate over it.",
        advancedHints: ["`gen = (x for x in timestamps if 17 <= x <= 20)`."]
      },
      {
        id: 44,
        title: "Fingerprint Hash Comparison",
        summary: "Work with the hashlib module.",
        description: "Import the `hashlib` module. You found a fingerprint hash at the scene: `'5d41402abc4b2a76b9719d911017c592'`. Hash the word `'hello'` using MD5 and check if it matches the fingerprint hash.",
        exampleInput: "Check MD5 of 'hello'",
        exampleOutput: "True (the hash of 'hello' is the string above)",
        hints: ["Use `hashlib.md5(b'hello').hexdigest()`.", "Strings must be converted to bytes before hashing (e.g., `b'hello'` or `'hello'.encode()`)."],
        advancedChallenge: "Level Up: Write a brute-force loop that checks a list of 5 possible passwords to see which one matches the hash.",
        advancedHints: ["Loop through the list, hash each one, and compare to the target hash. Break when found."]
      },
      {
        id: 45,
        title: "Alibi DefaultDict",
        summary: "Use collections.defaultdict.",
        description: "Import `defaultdict` from `collections`. You receive a list of tuples `[('Plum', 'Library'), ('Mustard', 'Kitchen'), ('Plum', 'Hall')]`. Group the locations by suspect into a dictionary of lists. Example: `{'Plum': ['Library', 'Hall'], ...}`.",
        exampleInput: "[('Plum', 'Library'), ('Mustard', 'Kitchen'), ('Plum', 'Hall')]",
        exampleOutput: "{'Plum': ['Library', 'Hall'], 'Mustard': ['Kitchen']}",
        hints: ["Initialize `alibis = defaultdict(list)`.", "Loop through the tuples and use `alibis[suspect].append(location)`."],
        advancedChallenge: "Level Up: Convert the `defaultdict` back to a regular dictionary before returning it.",
        advancedHints: ["Simply wrap it: `dict(alibis)`."]
      },
      {
        id: 46,
        title: "Crime Scene Grid Bounds Check",
        summary: "Safely navigate 2D arrays with Try/Except.",
        description: "A crime scene grid is a 3x3 list of lists. Write a function `check_cell(grid, row, col)` that returns the value at that cell. Use a `try/except IndexError` block to return 'Out of bounds' if the detective tries to check outside the grid.",
        exampleInput: "check_cell(grid, 5, 5)",
        exampleOutput: "'Out of bounds'",
        hints: ["Put `return grid[row][col]` inside a `try:` block.", "Catch `IndexError`."],
        advancedChallenge: "Level Up: Handle negative indices. In Python, `grid[-1]` is valid, but for this crime scene, negative coordinates should also raise an exception.",
        advancedHints: ["Add a check: `if row < 0 or col < 0: raise IndexError()` inside the try block."]
      },
      {
        id: 47,
        title: "Blackmail Letter Regex",
        summary: "Extract email addresses using Regex.",
        description: "Import `re`. A blackmail letter contains hidden email addresses. `'Send the money to badguy@evil.com or else contact boss@crime.org!'`. Write a regex pattern to extract all email addresses from the text and return them as a list.",
        exampleInput: "'Send the money to badguy@evil.com or else contact boss@crime.org!'",
        exampleOutput: "['badguy@evil.com', 'boss@crime.org']",
        hints: ["Use `re.findall(pattern, text)`.", "A basic email pattern is `r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'`."],
        advancedChallenge: "Level Up: Use `re.sub()` to redact the emails from the text, replacing them with '[REDACTED]'.",
        advancedHints: ["`re.sub(pattern, '[REDACTED]', text)`."]
      },
      {
        id: 48,
        title: "Detective's Notebook Generator",
        summary: "Format string alignment.",
        description: "You have suspect names and their likelihood of guilt (0-100%). Print a cleanly formatted table. The names must be left-aligned in a column 15 characters wide, and the percentages right-aligned in a column 5 characters wide.",
        exampleInput: "[('Plum', 85), ('Mustard', 5)]",
        exampleOutput: "Plum           |   85%\\nMustard        |    5%",
        hints: ["Use f-string format specifiers.", "`{name:<15}` left-aligns to 15 chars. `{percent:>4}%` right-aligns to 4 chars."],
        advancedChallenge: "Level Up: Add a header row to the table with dashes underneath it.",
        advancedHints: ["Print `'Name' + ' '*11 + '| ' + 'Guilt'` and then print a row of `-` characters equal to the total width."]
      },
      {
        id: 49,
        title: "Poison Vial Queue",
        summary: "Use deque for efficient queues.",
        description: "Import `deque` from `collections`. Suspects line up to be questioned. `queue = deque(['Plum', 'Green', 'Mustard'])`. Add 'Scarlet' to the right side of the queue. Then, pop a suspect from the LEFT side of the queue to question them. Print the remaining queue.",
        exampleInput: "queue as above",
        exampleOutput: "Questioning Plum. Queue: deque(['Green', 'Mustard', 'Scarlet'])",
        hints: ["Use `queue.append('Scarlet')`.", "Use `queue.popleft()` to efficiently remove the first element."],
        advancedChallenge: "Level Up: Rotate the queue by 1 step so that the last person goes to the front of the line.",
        advancedHints: ["Use the `.rotate(1)` method on the deque."]
      },
      {
        id: 50,
        title: "The Final Verdict Callback",
        summary: "Pass functions as arguments.",
        description: "Write a function `evaluate_evidence(evidence, callback)`. The function should check if `evidence == 'smoking gun'`. If True, it calls the `callback()` function. Create a separate function `arrest()` that prints 'Suspect arrested!'. Pass `arrest` into `evaluate_evidence`.",
        exampleInput: "evaluate_evidence('smoking gun', arrest)",
        exampleOutput: "'Suspect arrested!'",
        hints: ["In Python, functions are first-class objects, meaning you can pass them as arguments just like variables.", "Don't include parentheses when passing the function name: `arrest`, not `arrest()`."],
        advancedChallenge: "Level Up: Pass a lambda function as the callback instead of defining a named function.",
        advancedHints: ["`evaluate_evidence('smoking gun', lambda: print('Suspect arrested!'))`."]
      }
    ]
  }
];
