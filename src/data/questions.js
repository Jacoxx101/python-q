export const questionsData = [
  {
    "theme": "Harry Potter Theme",
    "questions": [
      {
        "id": 1,
        "title": "Wizard Mad Libs",
        "summary": "Build a Mad Libs story using variables and user input.",
        "description": "Ask the user for a wizard name, a magical creature, a spell, and a number. Plug these into a funny Hogwarts story and print it. Practice variables, input(), and string concatenation or f-strings.",
        "exampleInput": "Name: Harry\nCreature: dragon\nSpell: Lumos\nNumber: 3",
        "exampleOutput": "Harry cast Lumos 3 times to scare away the dragon!",
        "hints": [
          "Use input() to collect each value.",
          "Use an f-string like f\"{name} cast {spell}...\" to build the final message.",
          "Remember input() always returns a string."
        ],
        "advancedChallenge": "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.",
        "advancedHints": [
          "Define a class with `class Name:` and add methods for the actions.",
          "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
        ]
      },
      {
        "id": 2,
        "title": "Potion Ingredient Converter",
        "summary": "Use type casting to convert input into numbers.",
        "description": "Ask the user how many grams of an ingredient they have. The input is a string — convert it to a float. Then convert grams to ounces (1 oz = 28.35 g) and print the result. Practice type casting with int() and float().",
        "exampleInput": "Grams: 100",
        "exampleOutput": "100.0 g = 3.53 oz",
        "hints": [
          "Use float(input(...)) to cast the string to a number.",
          "Divide grams by 28.35 to get ounces.",
          "Use an f-string with :.2f to show 2 decimal places."
        ],
        "advancedChallenge": "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.",
        "advancedHints": [
          "Define a class with `class Name:` and add methods for the actions.",
          "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
        ]
      },
      {
        "id": 3,
        "title": "Spell Damage Calculator",
        "summary": "Use arithmetic operators and math functions.",
        "description": "Write a small calculator. Ask the user for a spell's base damage and a power multiplier. Compute: total = base * multiplier, then print the square root of the total using the math module. Practice arithmetic operators and importing math.",
        "exampleInput": "Base: 20\nMultiplier: 4",
        "exampleOutput": "Total damage: 80\nSqrt: 8.94",
        "hints": [
          "import math at the top.",
          "Use math.sqrt() for the square root.",
          "Cast the inputs to int or float before doing math."
        ],
        "advancedChallenge": "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.",
        "advancedHints": [
          "Define a class with `class Name:` and add methods for the actions.",
          "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
        ]
      },
      {
        "id": 4,
        "title": "Hogwarts House Sorter",
        "summary": "Use if / elif / else to sort students into houses.",
        "description": "Ask the user for their favorite trait: 'brave', 'smart', 'kind', or 'cunning'. Use if/elif/else to print their Hogwarts house (Gryffindor, Ravenclaw, Hufflepuff, Slytherin). If the trait isn't recognized, print a default message.",
        "exampleInput": "Trait: brave",
        "exampleOutput": "You belong in Gryffindor!",
        "hints": [
          "Use .lower() on the input so capitalization doesn't matter.",
          "Chain if / elif / else for each house.",
          "Add a final else for unknown traits."
        ],
        "advancedChallenge": "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.",
        "advancedHints": [
          "Define a class with `class Name:` and add methods for the actions.",
          "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
        ]
      },
      {
        "id": 5,
        "title": "Wand Compatibility Check",
        "summary": "Use logical operators (and / or / not) in conditions.",
        "description": "Ask the user for their age and whether they have a magical family (yes/no). A wand is allowed if age >= 11 AND they either have a magical family OR passed a magic test (ask for that too). Use and / or to build the condition.",
        "exampleInput": "Age: 12\nMagical family: no\nPassed test: yes",
        "exampleOutput": "The wand chooses you!",
        "hints": [
          "Cast age to int.",
          "Combine conditions with 'and' and 'or'.",
          "Convert yes/no answers into booleans like family == 'yes'."
        ],
        "advancedChallenge": "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.",
        "advancedHints": [
          "Define a class with `class Name:` and add methods for the actions.",
          "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
        ]
      },
      {
        "id": 6,
        "title": "Patronus Letter Finder",
        "summary": "Use string methods and indexing.",
        "description": "Ask the user to type the name of their Patronus. Print the first letter, the last letter, the length of the name, and the name in all uppercase. Practice indexing (name[0]) and string methods (.upper(), len()).",
        "exampleInput": "Patronus: Stag",
        "exampleOutput": "First: S, Last: g, Length: 4, Upper: STAG",
        "hints": [
          "name[0] gives the first character.",
          "name[-1] gives the last.",
          "Use len(name) and name.upper()."
        ],
        "advancedChallenge": "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.",
        "advancedHints": [
          "Define a class with `class Name:` and add methods for the actions.",
          "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
        ]
      },
      {
        "id": 7,
        "title": "Polyjuice Countdown",
        "summary": "Use a while loop to count down transformation time.",
        "description": "A Polyjuice Potion lasts 60 minutes. Use a while loop to count down from 60 to 1, printing each minute. When the counter reaches 0, print 'Transformation ended!'. Practice while loops and decrementing a variable.",
        "exampleInput": "(no input)",
        "exampleOutput": "60 minutes left\n59 minutes left\n...\nTransformation ended!",
        "hints": [
          "Start with minutes = 60.",
          "Loop while minutes > 0, subtracting 1 each time.",
          "Print the final message after the loop."
        ],
        "advancedChallenge": "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.",
        "advancedHints": [
          "Define a class with `class Name:` and add methods for the actions.",
          "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
        ]
      },
      {
        "id": 8,
        "title": "Quidditch Scoreboard",
        "summary": "Use a for loop and a list to total scores.",
        "description": "You have a list of Gryffindor goals in a match, each worth 10 points: goals = [10, 10, 10, 10]. Use a for loop to add them up and print the total. Also print how many goals were scored using len().",
        "exampleInput": "goals = [10, 10, 10, 10]",
        "exampleOutput": "Total: 40 points over 4 goals",
        "hints": [
          "Create a variable total = 0.",
          "Loop: for g in goals: total += g.",
          "Use len(goals) for goal count."
        ],
        "advancedChallenge": "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.",
        "advancedHints": [
          "Define a class with `class Name:` and add methods for the actions.",
          "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
        ]
      },
      {
        "id": 9,
        "title": "House Points Dictionary",
        "summary": "Use a dictionary to track house points.",
        "description": "Create a dictionary with the four Hogwarts houses and starting points of 0. Ask the user which house earned points and how many, and update the dictionary. Print the final dictionary. Practice dictionary creation and updating values.",
        "exampleInput": "House: Gryffindor\nPoints: 50",
        "exampleOutput": "{'Gryffindor': 50, 'Slytherin': 0, 'Ravenclaw': 0, 'Hufflepuff': 0}",
        "hints": [
          "Initialize: points = {'Gryffindor': 0, ...}.",
          "Update with points[house] += amount.",
          "Make sure to cast the points input to int."
        ],
        "advancedChallenge": "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.",
        "advancedHints": [
          "Define a class with `class Name:` and add methods for the actions.",
          "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
        ]
      },
      {
        "id": 10,
        "title": "Spell Caster Function",
        "summary": "Write a function with default and keyword arguments.",
        "description": "Define a function cast_spell(wizard, spell='Lumos', power=1). It should print a line like 'Harry casts Lumos with power 1!'. Call it with just a wizard name, then with keyword arguments, to practice default and keyword arguments.",
        "exampleInput": "cast_spell('Harry')\ncast_spell('Hermione', spell='Expelliarmus', power=3)",
        "exampleOutput": "Harry casts Lumos with power 1!\nHermione casts Expelliarmus with power 3!",
        "hints": [
          "Default values go in the parameter list: spell='Lumos'.",
          "Call with keyword args like spell='Expelliarmus'.",
          "Use an f-string inside the function to print."
        ],
        "advancedChallenge": "Level Up: Refactor this logic into an Object-Oriented approach. Create a class (e.g., `Wizard`, `Spell`) with an `__init__` method. Add robust `try/except` blocks to handle invalid magic or missing ingredients gracefully.",
        "advancedHints": [
          "Define a class with `class Name:` and add methods for the actions.",
          "Use `try:` and `except ValueError:` when taking user input to prevent crashes."
        ]
      }
    ]
  },
  {
    "theme": "Airplanes / Aviation Theme",
    "questions": [
      {
        "id": 11,
        "title": "Flight Announcement Mad Libs",
        "summary": "Mad Libs style input/print practice.",
        "description": "Ask the user for a destination, a captain's name, a flight number, and an altitude. Print a full boarding announcement using an f-string. Practice input(), variables, and f-strings.",
        "exampleInput": "Destination: Tokyo\nCaptain: Smith\nFlight: 101\nAltitude: 35000",
        "exampleOutput": "Welcome aboard Flight 101 to Tokyo. Captain Smith will fly at 35000 ft.",
        "hints": [
          "Store each input in its own variable.",
          "Use f\"...{destination}...\" to build the announcement.",
          "Keep values as strings — no casting needed here."
        ],
        "advancedChallenge": "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.",
        "advancedHints": [
          "Use `[x for x in records if ...]` to filter and transform the data in one line.",
          "Look into the `csv` module or just use `.split(',')`."
        ]
      },
      {
        "id": 12,
        "title": "Ticket Price Converter",
        "summary": "Type cast strings into numbers to apply a discount.",
        "description": "Ask the user for a ticket price as a string, cast it to a float, apply a 10% discount, and print the new price. Practice float() casting and arithmetic.",
        "exampleInput": "Price: 250",
        "exampleOutput": "Discounted price: $225.00",
        "hints": [
          "Cast with float(input(...)).",
          "Multiply by 0.9 for a 10% discount.",
          "Use :.2f to format currency."
        ],
        "advancedChallenge": "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.",
        "advancedHints": [
          "Use `[x for x in records if ...]` to filter and transform the data in one line.",
          "Look into the `csv` module or just use `.split(',')`."
        ]
      },
      {
        "id": 13,
        "title": "Fuel Cost Calculator",
        "summary": "Build a small arithmetic calculator.",
        "description": "Ask the user for miles to fly, the plane's miles-per-gallon, and fuel price per gallon. Compute gallons_needed = miles / mpg, total_cost = gallons_needed * price. Print both values. Practice arithmetic operators.",
        "exampleInput": "Miles: 500\nMPG: 5\nPrice: 4",
        "exampleOutput": "Gallons: 100.0, Cost: $400.00",
        "hints": [
          "Cast all inputs to float.",
          "Divide miles by mpg.",
          "Use :.2f for the cost."
        ],
        "advancedChallenge": "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.",
        "advancedHints": [
          "Use `[x for x in records if ...]` to filter and transform the data in one line.",
          "Look into the `csv` module or just use `.split(',')`."
        ]
      },
      {
        "id": 14,
        "title": "Baggage Weight Converter",
        "summary": "Kg-to-lbs converter (weight conversion project).",
        "description": "Ask the user for a baggage weight and a unit ('kg' or 'lbs'). If kg, convert to lbs (lbs = kg * 2.205). If lbs, convert to kg. Otherwise print 'Unknown unit'. Practice if/elif/else and float casting.",
        "exampleInput": "Weight: 20\nUnit: kg",
        "exampleOutput": "20 kg = 44.10 lbs",
        "hints": [
          "Use .lower() on the unit input.",
          "Check unit == 'kg' or 'lbs' with if/elif.",
          "Round or format using :.2f."
        ],
        "advancedChallenge": "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.",
        "advancedHints": [
          "Use `[x for x in records if ...]` to filter and transform the data in one line.",
          "Look into the `csv` module or just use `.split(',')`."
        ]
      },
      {
        "id": 15,
        "title": "Cabin Temperature Converter",
        "summary": "Fahrenheit / Celsius converter.",
        "description": "Ask the user for a temperature and a unit ('C' or 'F'). Convert C to F: F = C * 9/5 + 32 or vice versa. Print the result using an f-string. Practice conditionals and arithmetic.",
        "exampleInput": "Temp: 25\nUnit: C",
        "exampleOutput": "25 C = 77.0 F",
        "hints": [
          "Cast temp to float.",
          "Use an if/elif on the unit.",
          "Keep the formula simple and direct."
        ],
        "advancedChallenge": "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.",
        "advancedHints": [
          "Use `[x for x in records if ...]` to filter and transform the data in one line.",
          "Look into the `csv` module or just use `.split(',')`."
        ]
      },
      {
        "id": 16,
        "title": "Boarding Pass Formatter",
        "summary": "String methods and format specifiers.",
        "description": "Given name = 'john doe', flight = 'AA101', seat = '12B', print a boarding pass using f-string formatting. The name must be title-cased, the flight uppercase, and the whole line padded to 40 characters.",
        "exampleInput": "name='john doe', flight='aa101', seat='12B'",
        "exampleOutput": "John Doe | AA101 | 12B             (40 chars)",
        "hints": [
          "Use name.title() to capitalize words.",
          "Use flight.upper().",
          "Use :<40 in an f-string to pad to 40 chars."
        ],
        "advancedChallenge": "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.",
        "advancedHints": [
          "Use `[x for x in records if ...]` to filter and transform the data in one line.",
          "Look into the `csv` module or just use `.split(',')`."
        ]
      },
      {
        "id": 17,
        "title": "Flight Departure Countdown",
        "summary": "While loop countdown timer.",
        "description": "Use a while loop to count down from 10 to 0 for takeoff. Use the time module (import time) to sleep 1 second between numbers. Print 'Liftoff!' at the end. Practice while loops and importing modules.",
        "exampleInput": "(no input)",
        "exampleOutput": "10\n9\n8\n...\n0\nLiftoff!",
        "hints": [
          "import time at the top.",
          "Use time.sleep(1) inside the loop.",
          "Decrement your counter each iteration."
        ],
        "advancedChallenge": "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.",
        "advancedHints": [
          "Use `[x for x in records if ...]` to filter and transform the data in one line.",
          "Look into the `csv` module or just use `.split(',')`."
        ]
      },
      {
        "id": 18,
        "title": "Passenger Name Printer",
        "summary": "Iterate a list with a for loop.",
        "description": "Given passengers = ['Alice', 'Bob', 'Charlie', 'Diana'], use a for loop to print each passenger with their seat number starting at 1: 'Seat 1: Alice'. Use enumerate() if you want. Practice for loops and lists.",
        "exampleInput": "passengers = ['Alice', 'Bob', 'Charlie', 'Diana']",
        "exampleOutput": "Seat 1: Alice\nSeat 2: Bob\nSeat 3: Charlie\nSeat 4: Diana",
        "hints": [
          "Use enumerate(passengers, start=1).",
          "Or use a counter variable and += 1.",
          "Use an f-string for the output line."
        ],
        "advancedChallenge": "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.",
        "advancedHints": [
          "Use `[x for x in records if ...]` to filter and transform the data in one line.",
          "Look into the `csv` module or just use `.split(',')`."
        ]
      },
      {
        "id": 19,
        "title": "Flight Route Tuple",
        "summary": "Store immutable flight data in tuples.",
        "description": "Create a list of flight tuples: (flight_number, origin, destination). Use a for loop to unpack and print each. Practice tuples, lists of tuples, and tuple unpacking in a loop.",
        "exampleInput": "flights = [('AA101', 'NYC', 'LA'), ('BA202', 'LON', 'PAR')]",
        "exampleOutput": "AA101: NYC -> LA\nBA202: LON -> PAR",
        "hints": [
          "Tuples use parentheses: ('AA101', 'NYC', 'LA').",
          "Unpack in the loop: for num, origin, dest in flights.",
          "Use an f-string to format the arrow."
        ],
        "advancedChallenge": "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.",
        "advancedHints": [
          "Use `[x for x in records if ...]` to filter and transform the data in one line.",
          "Look into the `csv` module or just use `.split(',')`."
        ]
      },
      {
        "id": 20,
        "title": "Total Miles with *args",
        "summary": "Function using *args to sum any number of flights.",
        "description": "Write a function total_miles(*flights) that takes any number of flight distances and returns the total. Call it with different numbers of arguments. Practice *args and function return values.",
        "exampleInput": "total_miles(500, 300, 200)",
        "exampleOutput": "1000",
        "hints": [
          "Define the function with *flights in the parameter list.",
          "Inside, flights is a tuple — use sum(flights).",
          "Return the result and print it at the call site."
        ],
        "advancedChallenge": "Level Up: Batch processing. Instead of one input, imagine you receive a comma-separated string of 10 flight records. Use list comprehensions and `split()` to process them all at once. Filter out any invalid data.",
        "advancedHints": [
          "Use `[x for x in records if ...]` to filter and transform the data in one line.",
          "Look into the `csv` module or just use `.split(',')`."
        ]
      }
    ]
  },
  {
    "theme": "Fantasy Kingdom Theme",
    "questions": [
      {
        "id": 21,
        "title": "Gate Password Check",
        "summary": "If/else password validator.",
        "description": "Ask the user for the castle password. If it equals 'dragon', print 'Gate opens!'. Otherwise print 'Guards attack!'. Practice input() and a simple if/else.",
        "exampleInput": "Password: dragon",
        "exampleOutput": "Gate opens!",
        "hints": [
          "Use input() to read the password.",
          "Compare with == 'dragon'.",
          "Use .lower() to make it case-insensitive."
        ],
        "advancedChallenge": "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.",
        "advancedHints": [
          "Import `Counter` from `collections` to tally items automatically.",
          "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
        ]
      },
      {
        "id": 22,
        "title": "Dragon Entry Requirements",
        "summary": "Combine conditions with logical operators.",
        "description": "A hero can enter the dragon's lair if they have a sword AND (a shield OR a potion). Ask the user yes/no for each item. Use and / or to decide. Practice logical operators.",
        "exampleInput": "Sword: yes\nShield: no\nPotion: yes",
        "exampleOutput": "You may enter the lair.",
        "hints": [
          "Convert each yes/no to a boolean like sword = (answer == 'yes').",
          "Combine with: if sword and (shield or potion).",
          "Print the right message in each branch."
        ],
        "advancedChallenge": "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.",
        "advancedHints": [
          "Import `Counter` from `collections` to tally items automatically.",
          "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
        ]
      },
      {
        "id": 23,
        "title": "Hero Class Selector",
        "summary": "Match-case statement to pick a class.",
        "description": "Ask the user to pick a class: 'warrior', 'mage', 'rogue', or 'archer'. Use a match-case statement (Python 3.10+) to print a matching description for each. Add a default case for unknown values. Practice match-case.",
        "exampleInput": "Class: mage",
        "exampleOutput": "You wield arcane magic and study ancient tomes.",
        "hints": [
          "Use: match choice:\\n    case 'warrior': ...",
          "Remember the 'case _:' default at the end.",
          "Lowercase the input first for consistency."
        ],
        "advancedChallenge": "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.",
        "advancedHints": [
          "Import `Counter` from `collections` to tally items automatically.",
          "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
        ]
      },
      {
        "id": 24,
        "title": "Runic Inscription Reader",
        "summary": "String slicing and indexing practice.",
        "description": "Given rune = 'DRAGONBORN', print: the first 3 characters, the last 4, every other character, and the string reversed. Practice slicing with [start:stop:step] and negative indices.",
        "exampleInput": "rune = 'DRAGONBORN'",
        "exampleOutput": "First 3: DRA\nLast 4: BORN\nEvery other: DAONOR\nReversed: NROBNOGARD",
        "hints": [
          "rune[:3] for first 3.",
          "rune[-4:] for last 4.",
          "rune[::2] for every other, rune[::-1] for reversed."
        ],
        "advancedChallenge": "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.",
        "advancedHints": [
          "Import `Counter` from `collections` to tally items automatically.",
          "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
        ]
      },
      {
        "id": 25,
        "title": "Castle Floor Counter",
        "summary": "For loop over a range.",
        "description": "Use a for loop with range() to print 'Climbing floor 1', 'Climbing floor 2', ... up to floor 10. Then print 'Reached the top!'. Practice for loops and range().",
        "exampleInput": "(no input)",
        "exampleOutput": "Climbing floor 1\n...\nClimbing floor 10\nReached the top!",
        "hints": [
          "for floor in range(1, 11):",
          "Use an f-string inside the loop.",
          "Print the final message after the loop."
        ],
        "advancedChallenge": "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.",
        "advancedHints": [
          "Import `Counter` from `collections` to tally items automatically.",
          "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
        ]
      },
      {
        "id": 26,
        "title": "Dungeon Grid Printer",
        "summary": "Nested for loops to print a 2D grid.",
        "description": "Use nested for loops to print a 5x5 grid of '#' characters representing dungeon walls. The outer loop controls rows; the inner loop prints the characters on one row. Practice nested loops.",
        "exampleInput": "(no input)",
        "exampleOutput": "#####\n#####\n#####\n#####\n#####",
        "hints": [
          "Outer loop: for row in range(5).",
          "Inner loop: for col in range(5), print('#', end='').",
          "Print an empty print() after the inner loop to go to the next line."
        ],
        "advancedChallenge": "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.",
        "advancedHints": [
          "Import `Counter` from `collections` to tally items automatically.",
          "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
        ]
      },
      {
        "id": 27,
        "title": "Adventurer's Inventory List",
        "summary": "Use list methods to manage inventory.",
        "description": "Start with inventory = ['sword', 'shield']. Add 'potion' with append(), insert 'map' at position 0, remove 'shield', and print the final list and its length. Practice list methods.",
        "exampleInput": "inventory = ['sword', 'shield']",
        "exampleOutput": "['map', 'sword', 'potion']\nLength: 3",
        "hints": [
          "Use inventory.append('potion').",
          "Use inventory.insert(0, 'map').",
          "Use inventory.remove('shield')."
        ],
        "advancedChallenge": "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.",
        "advancedHints": [
          "Import `Counter` from `collections` to tally items automatically.",
          "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
        ]
      },
      {
        "id": 28,
        "title": "Unique Hero Abilities",
        "summary": "Use a set to remove duplicates.",
        "description": "Given abilities = ['fireball', 'heal', 'fireball', 'dash', 'heal'], convert to a set to remove duplicates. Print the set and its length. Practice set creation and len().",
        "exampleInput": "abilities = ['fireball', 'heal', 'fireball', 'dash', 'heal']",
        "exampleOutput": "{'fireball', 'heal', 'dash'}\nUnique abilities: 3",
        "hints": [
          "Use set(abilities) to dedupe.",
          "Use len() on the set.",
          "Print both values."
        ],
        "advancedChallenge": "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.",
        "advancedHints": [
          "Import `Counter` from `collections` to tally items automatically.",
          "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
        ]
      },
      {
        "id": 29,
        "title": "Treasure Map 2D Grid",
        "summary": "Read a value from a 2D list.",
        "description": "Create a 2D list representing a 3x3 map where 'X' marks the treasure. Use nested indexing (grid[row][col]) to print what is at (1,1) and (2,2). Practice 2D collections.",
        "exampleInput": "grid = [['.','.','.'], ['.','X','.'], ['.','.','.']]",
        "exampleOutput": "grid[1][1] = X\ngrid[2][2] = .",
        "hints": [
          "Access with grid[row][col].",
          "Print both values.",
          "Use an f-string for formatting."
        ],
        "advancedChallenge": "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.",
        "advancedHints": [
          "Import `Counter` from `collections` to tally items automatically.",
          "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
        ]
      },
      {
        "id": 30,
        "title": "Hero Stats Dictionary",
        "summary": "Dictionaries with string and numeric values.",
        "description": "Create a dictionary: hero = {'name': 'Arthur', 'hp': 100, 'attack': 15}. Print each value using the keys. Then update hp by -20 (took damage) and print the dict. Practice dict access and updating.",
        "exampleInput": "hero = {'name': 'Arthur', 'hp': 100, 'attack': 15}",
        "exampleOutput": "Name: Arthur, HP: 100, Attack: 15\nAfter damage: {'name': 'Arthur', 'hp': 80, 'attack': 15}",
        "hints": [
          "Access with hero['name'].",
          "Update with hero['hp'] -= 20.",
          "Print the whole dict at the end."
        ],
        "advancedChallenge": "Level Up: Advanced Data Structures. Use `collections.defaultdict` or `collections.Counter` to track inventory/stats more efficiently. Write a `lambda` function to sort heroes or items by a specific attribute.",
        "advancedHints": [
          "Import `Counter` from `collections` to tally items automatically.",
          "Use `sorted(items, key=lambda x: ...)` for custom sorting logic."
        ]
      }
    ]
  },
  {
    "theme": "Space / Sci-Fi Theme",
    "questions": [
      {
        "id": 31,
        "title": "Astronaut Registration",
        "summary": "Collect and print astronaut info.",
        "description": "Ask for the astronaut's name, age (cast to int), and mission. Print a summary using f-strings. Practice input(), int() casting, and variables.",
        "exampleInput": "Name: Ada\nAge: 34\nMission: Mars",
        "exampleOutput": "Astronaut Ada (34) is assigned to the Mars mission.",
        "hints": [
          "Use int(input(...)) for the age.",
          "Store each input in a variable.",
          "Use an f-string for the final line."
        ],
        "advancedChallenge": "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!",
        "advancedHints": [
          "Replace `return` with `yield` in a loop to create a generator.",
          "Use `next(my_generator)` to advance the simulation one step at a time."
        ]
      },
      {
        "id": 32,
        "title": "Rocket Fuel Calculator",
        "summary": "Arithmetic and the math module.",
        "description": "Ask for the rocket's mass (kg) and desired delta-v (m/s). Use fuel = mass * 0.001 * delta_v. Then use math.ceil() to round fuel up to the nearest whole liter and print it. Practice arithmetic and importing math.",
        "exampleInput": "Mass: 5000\nDelta-v: 2500",
        "exampleOutput": "Fuel needed: 12500 liters",
        "hints": [
          "import math.",
          "Cast inputs to float.",
          "Use math.ceil(fuel) on the final number."
        ],
        "advancedChallenge": "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!",
        "advancedHints": [
          "Replace `return` with `yield` in a loop to create a generator.",
          "Use `next(my_generator)` to advance the simulation one step at a time."
        ]
      },
      {
        "id": 33,
        "title": "Oxygen Level Ternary",
        "summary": "Use a conditional expression (ternary).",
        "description": "Ask for the current oxygen percentage (int). Using a single conditional expression (ternary), set status = 'OK' if level >= 20 else 'WARNING' and print it. Practice conditional expressions.",
        "exampleInput": "Level: 15",
        "exampleOutput": "Status: WARNING",
        "hints": [
          "Syntax: 'OK' if level >= 20 else 'WARNING'.",
          "Cast the input to int first.",
          "Print status inside an f-string."
        ],
        "advancedChallenge": "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!",
        "advancedHints": [
          "Replace `return` with `yield` in a loop to create a generator.",
          "Use `next(my_generator)` to advance the simulation one step at a time."
        ]
      },
      {
        "id": 34,
        "title": "Mission Status Report",
        "summary": "Format specifiers with numbers.",
        "description": "You have speed = 17543.2176 km/h and fuel = 0.37 (fraction). Print a report showing speed with 1 decimal place and fuel as a percentage with no decimals. Practice format specifiers (:.1f, :.0%).",
        "exampleInput": "speed = 17543.2176, fuel = 0.37",
        "exampleOutput": "Speed: 17543.2 km/h, Fuel: 37%",
        "hints": [
          "Use f\"{speed:.1f}\" for 1 decimal place.",
          "Use f\"{fuel:.0%}\" for a percentage.",
          "Combine both in one f-string."
        ],
        "advancedChallenge": "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!",
        "advancedHints": [
          "Replace `return` with `yield` in a loop to create a generator.",
          "Use `next(my_generator)` to advance the simulation one step at a time."
        ]
      },
      {
        "id": 35,
        "title": "Compound Interest: Investing for Mars",
        "summary": "While loop compound interest calculator.",
        "description": "Ask for principal, annual rate (as a decimal like 0.05), and years. Use a while loop to compound the principal each year: principal *= (1 + rate). Print the balance after all years. Practice while loops and compound interest.",
        "exampleInput": "Principal: 1000\nRate: 0.05\nYears: 10",
        "exampleOutput": "After 10 years: $1628.89",
        "hints": [
          "Cast principal and rate to float, years to int.",
          "Use a counter variable and loop while it < years.",
          "Format the final balance with :.2f."
        ],
        "advancedChallenge": "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!",
        "advancedHints": [
          "Replace `return` with `yield` in a loop to create a generator.",
          "Use `next(my_generator)` to advance the simulation one step at a time."
        ]
      },
      {
        "id": 36,
        "title": "Planet Distance Table",
        "summary": "For loop over a dictionary.",
        "description": "Given distances = {'Mercury': 77, 'Venus': 40, 'Mars': 225} in millions of km, use a for loop to print each planet and distance. Practice looping over a dictionary with .items().",
        "exampleInput": "distances = {'Mercury': 77, 'Venus': 40, 'Mars': 225}",
        "exampleOutput": "Mercury: 77 million km\nVenus: 40 million km\nMars: 225 million km",
        "hints": [
          "Use: for name, dist in distances.items().",
          "Use an f-string for the line.",
          "Make sure the keys and values are in the expected format."
        ],
        "advancedChallenge": "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!",
        "advancedHints": [
          "Replace `return` with `yield` in a loop to create a generator.",
          "Use `next(my_generator)` to advance the simulation one step at a time."
        ]
      },
      {
        "id": 37,
        "title": "Space Station Commissary",
        "summary": "Shopping cart project with lists and totals.",
        "description": "Define items = {'water': 3, 'bread': 2, 'ration': 5}. Ask the user to add items to their cart in a loop (type 'quit' to stop). For each item entered, add its price to a running total. Print the total at the end.",
        "exampleInput": "water\nration\nquit",
        "exampleOutput": "Cart total: $8",
        "hints": [
          "Use a while True loop that breaks on 'quit'.",
          "Look up the price with items[choice].",
          "Handle invalid items with an if choice in items check."
        ],
        "advancedChallenge": "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!",
        "advancedHints": [
          "Replace `return` with `yield` in a loop to create a generator.",
          "Use `next(my_generator)` to advance the simulation one step at a time."
        ]
      },
      {
        "id": 38,
        "title": "Alien Crew Filter",
        "summary": "List comprehension to filter data.",
        "description": "Given ages = [25, 19, 34, 17, 45, 16, 30], use a single list comprehension to create a list adults containing only ages >= 18. Print the result. Practice list comprehensions.",
        "exampleInput": "ages = [25, 19, 34, 17, 45, 16, 30]",
        "exampleOutput": "[25, 19, 34, 45, 30]",
        "hints": [
          "Syntax: [a for a in ages if a >= 18].",
          "Assign to a new variable, then print.",
          "The condition goes after the source list."
        ],
        "advancedChallenge": "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!",
        "advancedHints": [
          "Replace `return` with `yield` in a loop to create a generator.",
          "Use `next(my_generator)` to advance the simulation one step at a time."
        ]
      },
      {
        "id": 39,
        "title": "Alien Profile with **kwargs",
        "summary": "Function using **kwargs.",
        "description": "Write a function build_profile(**info) that prints each key/value in a passed dictionary of alien attributes (species, planet, skills, etc.). Call it with at least 3 keyword arguments. Practice **kwargs.",
        "exampleInput": "build_profile(species='Zorg', planet='X7', skills='telepathy')",
        "exampleOutput": "species: Zorg\nplanet: X7\nskills: telepathy",
        "hints": [
          "Define with def build_profile(**info):",
          "Loop over info.items() inside the function.",
          "Call the function with keyword arguments only."
        ],
        "advancedChallenge": "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!",
        "advancedHints": [
          "Replace `return` with `yield` in a loop to create a generator.",
          "Use `next(my_generator)` to advance the simulation one step at a time."
        ]
      },
      {
        "id": 40,
        "title": "Random Alien Generator (modules)",
        "summary": "Import a module and pick a random value.",
        "description": "Import the random module. Given names = ['Zog', 'Blorp', 'Krill'] and planets = ['X7', 'Y2', 'Z9'], use random.choice() to pick one of each and print 'Alien Zog from planet X7'. Practice importing modules.",
        "exampleInput": "(no input)",
        "exampleOutput": "Alien Krill from planet Y2",
        "hints": [
          "import random at the top.",
          "Use random.choice(names) and random.choice(planets).",
          "Print with an f-string."
        ],
        "advancedChallenge": "Level Up: Generators and Memory. Instead of computing everything at once, write a generator function using `yield` that simulates the mission step-by-step or day-by-day. This saves memory for infinite space voyages!",
        "advancedHints": [
          "Replace `return` with `yield` in a loop to create a generator.",
          "Use `next(my_generator)` to advance the simulation one step at a time."
        ]
      }
    ]
  },
  {
    "theme": "Mystery / Detective / Weird Theme",
    "questions": [
      {
        "id": 41,
        "title": "Suspect Interrogation Mad Libs",
        "summary": "Mad Libs practice with an investigative twist.",
        "description": "Ask the user for a suspect's name, a weapon, a room, and a time. Use f-strings to print a dramatic accusation: 'It was {name} in the {room} with the {weapon} at {time}!'. Practice input() and f-strings.",
        "exampleInput": "Name: Mustard\nWeapon: wrench\nRoom: library\nTime: 9pm",
        "exampleOutput": "It was Mustard in the library with the wrench at 9pm!",
        "hints": [
          "Each input gets its own variable.",
          "Use a single f-string for the final line.",
          "No casting needed — everything stays a string."
        ],
        "advancedChallenge": "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.",
        "advancedHints": [
          "A decorator is a function that takes another function and extends its behavior.",
          "Use the `datetime` module inside your decorator to timestamp the action."
        ]
      },
      {
        "id": 42,
        "title": "Evidence Note Cleaner",
        "summary": "String methods to clean text.",
        "description": "Given note = '  THE killer WAS   seen at Midnight!!  ', clean it: strip whitespace, lower-case, remove '!' characters, and replace multiple spaces with a single space. Practice string methods.",
        "exampleInput": "'  THE killer WAS   seen at Midnight!!  '",
        "exampleOutput": "'the killer was seen at midnight'",
        "hints": [
          "Use .strip(), .lower(), .replace('!', '').",
          "For multiple spaces, use .replace('  ', ' ') a few times, or split/join.",
          "Chain the calls for readability."
        ],
        "advancedChallenge": "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.",
        "advancedHints": [
          "A decorator is a function that takes another function and extends its behavior.",
          "Use the `datetime` module inside your decorator to timestamp the action."
        ]
      },
      {
        "id": 43,
        "title": "Detective Quiz Game",
        "summary": "Build a short quiz using loops and a score counter.",
        "description": "Store 3 questions and answers in two parallel lists or a dict. Loop through them, ask each question with input(), and increment a score variable when the answer is correct. Print the final score out of 3. Practice for loops and conditionals.",
        "exampleInput": "Q: What weapon? A: knife\nQ: What room? A: kitchen\nQ: What time? A: 10pm",
        "exampleOutput": "Score: 2/3",
        "hints": [
          "Use a list of tuples: [('What weapon?', 'knife'), ...].",
          "Loop and compare the user's input (lowercased) to the correct answer.",
          "Increment score only on a match."
        ],
        "advancedChallenge": "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.",
        "advancedHints": [
          "A decorator is a function that takes another function and extends its behavior.",
          "Use the `datetime` module inside your decorator to timestamp the action."
        ]
      },
      {
        "id": 44,
        "title": "Crime Code Guessing Game",
        "summary": "Number guessing game project.",
        "description": "Pick a secret number between 1 and 20 (hard-code it or use random.randint). Use a while loop to let the user guess until they get it, printing 'too high' or 'too low' each time. Count the number of guesses and print it at the end. Practice while loops.",
        "exampleInput": "Guess: 10 (too high), 5 (too low), 7 (correct)",
        "exampleOutput": "Correct! It took you 3 guesses.",
        "hints": [
          "Use int(input(...)) for each guess.",
          "while guess != secret: ...",
          "Increment a guess counter each iteration."
        ],
        "advancedChallenge": "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.",
        "advancedHints": [
          "A decorator is a function that takes another function and extends its behavior.",
          "Use the `datetime` module inside your decorator to timestamp the action."
        ]
      },
      {
        "id": 45,
        "title": "Detective vs Thief: RPS",
        "summary": "Rock Paper Scissors project.",
        "description": "Implement Rock Paper Scissors. Ask the user for their choice, generate the computer's with random.choice(['rock', 'paper', 'scissors']), and print who wins. Handle ties. Practice if/elif/else and the random module.",
        "exampleInput": "Your choice: rock\nComputer: scissors",
        "exampleOutput": "You win!",
        "hints": [
          "Use random.choice on a list.",
          "Cover all the winning cases with if/elif.",
          "Handle ties with a separate branch."
        ],
        "advancedChallenge": "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.",
        "advancedHints": [
          "A decorator is a function that takes another function and extends its behavior.",
          "Use the `datetime` module inside your decorator to timestamp the action."
        ]
      },
      {
        "id": 46,
        "title": "Clue Dice Roller",
        "summary": "Dice roller project using random.",
        "description": "Ask the user how many dice to roll (1-5). Use a for loop and random.randint(1, 6) to roll that many dice. Print each roll and the total. Practice for loops and the random module.",
        "exampleInput": "Dice: 3",
        "exampleOutput": "Roll 1: 4\nRoll 2: 6\nRoll 3: 2\nTotal: 12",
        "hints": [
          "import random.",
          "Use range(n) for the for loop.",
          "Keep a running total variable."
        ],
        "advancedChallenge": "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.",
        "advancedHints": [
          "A decorator is a function that takes another function and extends its behavior.",
          "Use the `datetime` module inside your decorator to timestamp the action."
        ]
      },
      {
        "id": 47,
        "title": "Suspect Filter Comprehension",
        "summary": "List comprehension with a string condition.",
        "description": "Given suspects = ['Mr. Green', 'Mrs. White', 'Mr. Plum', 'Miss Scarlet'], use a list comprehension to get only the ones whose names start with 'Mr.'. Print the result. Practice list comprehensions and string methods.",
        "exampleInput": "suspects = ['Mr. Green', 'Mrs. White', 'Mr. Plum', 'Miss Scarlet']",
        "exampleOutput": "['Mr. Green', 'Mr. Plum']",
        "hints": [
          "[s for s in suspects if s.startswith('Mr. ')].",
          "Note the space after 'Mr.' to exclude 'Mrs.'.",
          "Print the resulting list."
        ],
        "advancedChallenge": "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.",
        "advancedHints": [
          "A decorator is a function that takes another function and extends its behavior.",
          "Use the `datetime` module inside your decorator to timestamp the action."
        ]
      },
      {
        "id": 48,
        "title": "Suspect Classifier with Match-Case",
        "summary": "Match-case for branching on a role.",
        "description": "Ask the user for a suspect's role: 'butler', 'chef', 'gardener', or 'maid'. Use a match-case statement to print a clue about each role. Use a default case for unknown roles. Practice match-case.",
        "exampleInput": "Role: butler",
        "exampleOutput": "The butler always answers the door — check the entry log.",
        "hints": [
          "match role:\\n    case 'butler': ...",
          "Remember case _: for the default.",
          "Lowercase the role first."
        ],
        "advancedChallenge": "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.",
        "advancedHints": [
          "A decorator is a function that takes another function and extends its behavior.",
          "Use the `datetime` module inside your decorator to timestamp the action."
        ]
      },
      {
        "id": 49,
        "title": "Case File Banking Program",
        "summary": "Mini banking-style menu with functions.",
        "description": "Build a simple bank for the detective's case fund. Define functions deposit(balance, amount), withdraw(balance, amount), and show(balance) — each returns the new balance. In a while loop, show a menu, read the user's choice, and call the right function. Practice functions and scope.",
        "exampleInput": "Menu choices: deposit 100, withdraw 30, show, quit",
        "exampleOutput": "Final balance: $70",
        "hints": [
          "Keep balance as a variable in main and pass it to functions.",
          "Each function returns the new balance; reassign balance = deposit(balance, amt).",
          "Break out of the loop when the user picks quit."
        ],
        "advancedChallenge": "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.",
        "advancedHints": [
          "A decorator is a function that takes another function and extends its behavior.",
          "Use the `datetime` module inside your decorator to timestamp the action."
        ]
      },
      {
        "id": 50,
        "title": "Cipher Decoder (Encryption Project)",
        "summary": "Shift-cipher encryption/decryption.",
        "description": "Ask the user for a message and a shift number. Encrypt the message by shifting each letter forward by that amount (wrapping around at 'z'). Then decrypt it back to check. Use ord() and chr() inside a for loop. Practice loops, string indexing, and the math behind a Caesar cipher.",
        "exampleInput": "Message: hello\nShift: 3",
        "exampleOutput": "Encrypted: khoor\nDecrypted: hello",
        "hints": [
          "Use ord(ch) - ord('a') to get 0-25, then mod 26 after shifting.",
          "Use chr(...) to convert back to a letter.",
          "Only shift alphabetic characters — leave spaces and punctuation alone."
        ],
        "advancedChallenge": "Level Up: Metaprogramming and Security. Write a Python decorator `@log_investigation` that automatically logs the time and arguments of your function. Hide the final output using a basic hash or encoding.",
        "advancedHints": [
          "A decorator is a function that takes another function and extends its behavior.",
          "Use the `datetime` module inside your decorator to timestamp the action."
        ]
      }
    ]
  }
];
