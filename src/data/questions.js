export const questionsData = [
  {
    theme: "Harry Potter Theme",
    questions: [
      {
        id: 1,
        title: "Owl Post Sorting System",
        summary: "Group letters by house and sort by urgency.",
        description: "The Hogwarts Owl Post is overwhelmed! You receive a large batch of unsorted letters. Each letter is represented as a dictionary with 'house' (Gryffindor, Slytherin, Ravenclaw, Hufflepuff) and 'urgency' (an integer from 1 to 10, where 10 is highest). Your task is to write a program that groups the letters by house, and within each house, sorts them in descending order of urgency.",
        exampleInput: "[\n  { house: 'Gryffindor', urgency: 5, id: 'L1' },\n  { house: 'Slytherin', urgency: 9, id: 'L2' },\n  { house: 'Gryffindor', urgency: 8, id: 'L3' }\n]",
        exampleOutput: "{\n  'Gryffindor': [{ house: 'Gryffindor', urgency: 8, id: 'L3' }, { house: 'Gryffindor', urgency: 5, id: 'L1' }],\n  'Slytherin': [{ house: 'Slytherin', urgency: 9, id: 'L2' }]\n}",
        hints: ["Try using `itertools.groupby` or a standard dictionary where keys are houses and values are lists.", "Remember to sort the main list by house before using `groupby`, or just sort the lists inside the dictionary afterwards.", "Use `lambda` functions for sorting by multiple keys if needed."]
      },
      {
        id: 2,
        title: "Wand Compatibility Checker",
        summary: "Score wand compatibility for wizards.",
        description: "Ollivander needs help matching wizards to wands. You are given a list of wizard profiles (containing core preference, flexibility preference, and wood type preference) and a list of available wands (containing their actual core, flexibility, and wood type). Write a function that calculates a 'compatibility score' for each wand against a given wizard. Award +10 points for a matching core, +5 for matching wood, and +3 for matching flexibility.",
        exampleInput: "wizard = {'core': 'Phoenix', 'wood': 'Holly', 'flex': 'Supple'}\nwand = {'core': 'Phoenix', 'wood': 'Vine', 'flex': 'Supple'}",
        exampleOutput: "Score: 13 (Core matched +10, Flex matched +3)",
        hints: ["Iterate through each wand and compare its dictionary values to the wizard's dictionary values.", "Use a helper function to calculate the score for a single pair."]
      },
      {
        id: 3,
        title: "Marauder’s Map Tracker",
        summary: "Find which student changed rooms the most.",
        description: "The Marauder's Map tracks everyone in Hogwarts. The magical log records movements as tuples: `(student_name, room, time)`. Given a full day's log, determine which student moved between different rooms the highest number of times. Note: A student might stay in the same room for multiple consecutive logs, which doesn't count as a room change.",
        exampleInput: "[\n  ('Harry', 'Great Hall', '08:00'),\n  ('Harry', 'Great Hall', '08:15'),\n  ('Harry', 'Potions', '09:00'),\n  ('Ron', 'Potions', '09:05')\n]",
        exampleOutput: "Harry (1 change: Great Hall -> Potions). Ron had 0 changes recorded.",
        hints: ["Sort the log by student name and time first.", "Keep track of the 'previous_room' for each student to detect changes.", "A dictionary like `changes[student]` can keep the running count."]
      },
      {
        id: 4,
        title: "Potion Inventory Decoder",
        summary: "Extract numeric quantities from mixed strings.",
        description: "Professor Snape’s ingredient inventory is a mess. The dictionary contains quantities stored as messy strings like '3 bottles', '2.5 kg', or 'a dozen'. Write a script that cleans up this dictionary. Extract the numeric values (integers or floats). For special words like 'dozen', convert it to 12. Sum up the total units of ingredients.",
        exampleInput: "{ 'Bezoar': '3 stones', 'Unicorn Hair': '1.5 strands', 'Boomslang Skin': 'a dozen' }",
        exampleOutput: "{ 'Bezoar': 3.0, 'Unicorn Hair': 1.5, 'Boomslang Skin': 12.0 }\nTotal: 16.5",
        hints: ["Use regular expressions (`import re`) to find numbers in strings: `re.findall(r'[0-9.]+', string)`.", "Handle special cases like 'dozen' manually using `if/elif` or a mapping dictionary."]
      },
      {
        id: 5,
        title: "Horcrux Hunt Planner",
        summary: "Find routes under a maximum energy limit.",
        description: "You are planning the hunt for the Horcruxes. The locations are represented as a weighted graph where edges are the 'magical energy' required to travel between them. Find all possible valid routes from Hogwarts to the target Horcrux location such that the total energy spent does not exceed your maximum energy limit.",
        exampleInput: "Graph: { 'Hogwarts': {'London': 20, 'Hogsmeade': 5}, 'Hogsmeade': {'London': 10}, 'London': {'Cave': 30} }\nTarget: 'Cave', Max Energy: 50",
        exampleOutput: "['Hogwarts -> Hogsmeade -> London -> Cave'] (Total: 45 energy)",
        hints: ["This is a classic graph traversal problem. Try using Depth First Search (DFS).", "Keep track of the current path and the accumulated energy in your recursive function.", "Backtrack when you reach a dead end or exceed the energy limit."]
      },
      {
        id: 6,
        title: "Quidditch Score Analyzer",
        summary: "Simulate a Quidditch scoreboard from logs.",
        description: "You have a log of Quidditch events. A goal adds 10 points. Catching the Snitch adds 150 points and immediately ends the game. Any events in the log after the Snitch is caught should be ignored. Write a simulation that processes the logs sequentially, maintains the score for both teams, and declares the winner.",
        exampleInput: "['Gryffindor Goal', 'Slytherin Goal', 'Gryffindor Snitch', 'Slytherin Goal']",
        exampleOutput: "Gryffindor: 160, Slytherin: 10. Winner: Gryffindor. (The last Slytherin goal is ignored).",
        hints: ["Use a simple `while` or `for` loop to iterate through the events.", "Use a `break` statement to exit the loop as soon as the Snitch event is encountered."]
      },
      {
        id: 7,
        title: "Spell Cooldown Manager",
        summary: "Determine if spells are cast within valid cooldowns.",
        description: "In a duel, spells have cooldown periods. You are given a dictionary of spells and their cooldown times in seconds. You also receive a list of casts containing the spell name and the timestamp it was cast. Determine whether each cast is valid. If a spell is cast before its cooldown has expired, that specific cast is invalid (but doesn't reset the timer).",
        exampleInput: "Cooldowns: {'Stupefy': 5, 'Protego': 3}\nCasts: [('Stupefy', 0), ('Protego', 1), ('Stupefy', 3), ('Stupefy', 6)]",
        exampleOutput: "[True, True, False, True] (The cast at t=3 was on cooldown).",
        hints: ["Maintain a dictionary recording the `last_cast_time` for each spell.", "For each new cast, check if `current_time - last_cast_time >= cooldown`."]
      },
      {
        id: 8,
        title: "Patronus Frequency Counter",
        summary: "Count occurrences of each Patronus in a text.",
        description: "Given a long, unformatted text containing wizard records, count how often each Patronus animal is mentioned. Ignore case and remove all punctuation before counting. Return the top 3 most common Patronuses.",
        exampleInput: "'Harry has a Stag! Snape has a doe... Hermione's is an Otter. James also had a stag.'",
        exampleOutput: "{'stag': 2, 'doe': 1, 'otter': 1}",
        hints: ["Use `string.punctuation` to strip punctuation from the text.", "Convert the entire text to lowercase using `.lower()`.", "The `collections.Counter` class is perfect for this!"]
      },
      {
        id: 9,
        title: "House Cup Ranking",
        summary: "Build a running leaderboard updating after events.",
        description: "Throughout the year, students gain and lose house points. Create a class `HouseCup` that maintains the current score of all four houses. It should have a method `add_event(house, points)` and a method `get_leaderboard()` which returns the houses sorted from first to last place.",
        exampleInput: "cup = HouseCup()\ncup.add_event('Gryffindor', 50)\ncup.add_event('Slytherin', -10)\ncup.get_leaderboard()",
        exampleOutput: "['Gryffindor (50)', 'Hufflepuff (0)', 'Ravenclaw (0)', 'Slytherin (-10)']",
        hints: ["Initialize a dictionary in your class `__init__` with all houses starting at 0.", "The `get_leaderboard` method can use `sorted()` with a custom `key` argument."]
      },
      {
        id: 10,
        title: "Password to the Common Room",
        summary: "Generate passwords based on a daily formula.",
        description: "The Gryffindor common room password changes daily. The new password is generated by taking the house name ('Gryffindor'), appending the day of the month, and then shifting every alphabetical character forward by the length of the *previous* day's password. Write a generator function that yields the passwords for a given number of days.",
        exampleInput: "Day 1 starts with 'Caput Draconis' (length 14). Day 2 formula: 'Gryffindor2' shifted by 14.",
        exampleOutput: "Day 2: 'Ufmttwbqcf2'",
        hints: ["Use `ord()` and `chr()` to perform the Caesar cipher shift.", "Remember to wrap around the alphabet (e.g., 'z' shifted by 1 becomes 'a')."]
      }
    ]
  },
  {
    theme: "Airplanes / Aviation Theme",
    questions: [
      {
        id: 11,
        title: "Flight Delay Chain Reaction",
        summary: "Compute final departure times for a delayed plane.",
        description: "A single delayed flight can ruin the entire schedule for that specific aircraft. You are given an aircraft's planned itinerary for the day (list of flights with planned departure/arrival times) and a delay applied to its first flight. Assuming turnaround time between flights must strictly be at least 45 minutes, calculate the final actual departure and arrival times for all its subsequent flights.",
        exampleInput: "Schedule: [(10:00, 12:00), (12:30, 14:00)]. Delay: 60 mins on first flight.",
        exampleOutput: "Actual: [(11:00, 13:00), (13:45, 15:15)]",
        hints: ["Convert all times to minutes past midnight to make math easier.", "Iterate through the flights, updating the actual arrival time, then calculating the earliest next departure using the 45-minute turnaround rule."]
      },
      {
        id: 12,
        title: "Runway Allocation",
        summary: "Find the minimum number of runways required.",
        description: "You manage an airport. You are given a list of tuples representing flight runway usage: `(start_time, end_time)`. Multiple planes might need the runway at the exact same time. Determine the absolute minimum number of runways required so that no plane is forced to wait.",
        exampleInput: "[(900, 915), (910, 930), (920, 940)] (times in HHMM)",
        exampleOutput: "2 runways needed. (At 9:10, two planes overlap. At 9:20, the 900 plane is gone, so max overlap is 2).",
        hints: ["This is equivalent to the 'Meeting Rooms II' algorithm problem.", "Separate all start and end times, sort them, and walk through time chronologically, incrementing a counter for starts and decrementing for ends."]
      },
      {
        id: 13,
        title: "Seat Upgrade Engine",
        summary: "Assign upgrades fairly using a priority system.",
        description: "There are 3 open first-class seats, and 10 economy passengers want an upgrade. Build a priority queue that sorts passengers based on: 1) Ticket class (Premium Economy > Economy), 2) Loyalty Tier (Diamond > Gold > Silver > Member), and 3) Total miles flown. Return the top 3 passengers.",
        exampleInput: "P1: (Premium, Gold, 50k), P2: (Economy, Diamond, 100k), P3: (Premium, Diamond, 10k)",
        exampleOutput: "1. P3, 2. P1, 3. P2",
        hints: ["Use `sorted()` with a custom key tuple. In Python, tuples are compared element by element.", "Map categorical values (like Diamond/Gold) to numeric values for easy sorting."]
      },
      {
        id: 14,
        title: "Black Box Event Parser",
        summary: "Count warnings before a system failure.",
        description: "You recover a black box log containing thousands of events. You need to find the event 'SYSTEM_FAILURE'. Once found, look at the 100 events immediately preceding it. Count how many times each type of 'WARNING' appeared in that critical window.",
        exampleInput: "['INFO_START', 'WARNING_TEMP', 'INFO_ALT', 'WARNING_TEMP', 'SYSTEM_FAILURE'] (Window size = 5)",
        exampleOutput: "{'WARNING_TEMP': 2}",
        hints: ["Use `list.index()` to find the failure event.", "Slice the list `events[index - 100: index]` to get the window.", "Use `collections.Counter` to tally the warnings."]
      },
      {
        id: 15,
        title: "Fuel Stop Optimizer",
        summary: "Find the minimum number of stops needed.",
        description: "A small plane can fly a maximum of 500 miles on a full tank. You are given an ordered list of distances between airports along a route. Determine the minimum number of fuel stops required to reach the destination. If a single leg exceeds 500 miles, return 'Impossible'.",
        exampleInput: "Route legs: [200, 400, 100, 450, 50]",
        exampleOutput: "2 stops. (Stop 1 after 200 miles, Stop 2 after 400+100=500 miles).",
        hints: ["Use a greedy approach. Add up distances until the next leg would push you over 500.", "When over 500, 'stop' at the previous airport, reset the tank, and add a stop to the counter."]
      },
      {
        id: 16,
        title: "Baggage Belt Matching",
        summary: "Identify baggage mismatches and unclaimed bags.",
        description: "You have a list of expected passenger baggage tags, and a stream of actual baggage tags coming off the conveyor belt. Some tags on the belt are duplicates, some passenger tags never arrive, and some bags on the belt don't belong to any passenger. Write a script to output: Unclaimed Bags, Missing Bags, and Duplicated Tags.",
        exampleInput: "Expected: ['A1', 'A2', 'A3']. Actual Belt: ['A1', 'A1', 'A4']",
        exampleOutput: "Missing: ['A2', 'A3']. Unclaimed: ['A4']. Duplicates: ['A1'].",
        hints: ["Sets are your best friend here! `expected_set - belt_set` gives missing bags.", "Use `collections.Counter` on the belt to easily identify duplicates (count > 1)."]
      },
      {
        id: 17,
        title: "Air Traffic Queue Simulation",
        summary: "Simulate plane landing order using priority rules.",
        description: "Planes request landing clearance. They have varying amounts of fuel remaining (measured in minutes). You must process the queue. A plane with < 15 minutes of fuel gets 'Emergency' priority and jumps to the front. Otherwise, it's first-come, first-served. Simulate the landing order.",
        exampleInput: "Queue: [P1(fuel: 60), P2(fuel: 40), P3(fuel: 10)]",
        exampleOutput: "Landing Order: P3, P1, P2",
        hints: ["Use the `heapq` module to create a priority queue.", "The priority tuple could be `(is_emergency, arrival_time, plane_id)`, where `is_emergency` is 0 for emergency and 1 for normal (so 0 pops first)."]
      },
      {
        id: 18,
        title: "Weather Diversion Detector",
        summary: "Find diverted flights and calculate distance difference.",
        description: "Due to storms, flights are diverted. You have a dictionary of planned coordinates and a dictionary of actual flown coordinates. Calculate the total Euclidean distance of the planned route vs the actual route, and flag flights that flew 20% more distance than planned.",
        exampleInput: "Planned: [(0,0), (0,10)]. Actual: [(0,0), (5,5), (0,10)]",
        exampleOutput: "Planned Dist: 10. Actual Dist: ~14.1. Diverted: True.",
        hints: ["Write a helper function to calculate the distance between two `(x, y)` tuples using the Pythagorean theorem.", "Sum the distances between consecutive points in both the planned and actual lists."]
      },
      {
        id: 19,
        title: "Frequent Flyer Milestone Tracker",
        summary: "Detect when passengers cross reward milestones.",
        description: "A passenger gets Silver at 25k miles, Gold at 50k, and Diamond at 100k. Given a chronologically ordered list of a passenger's flights (date and miles flown), determine exactly which flight pushed them over each milestone.",
        exampleInput: "Flights: [('Jan 1', 20k), ('Feb 1', 10k), ('Mar 1', 30k), ('Apr 1', 50k)]",
        exampleOutput: "Silver achieved on 'Feb 1'. Gold achieved on 'Mar 1'. Diamond achieved on 'Apr 1'.",
        hints: ["Keep a running total of miles.", "Check if the total crosses a milestone threshold during each flight iteration, and make sure you only trigger each milestone once."]
      },
      {
        id: 20,
        title: "Cabin Pressure Alert Monitor",
        summary: "Detect abnormal cabin pressure patterns.",
        description: "Sensor data arrives every second as a list of floats. Normal pressure is around 10.0. Write an algorithm to trigger an alert if: 1) the pressure drops below 8.0 instantly, or 2) the pressure decreases for 5 consecutive seconds, even if it stays above 8.0.",
        exampleInput: "Data: [10.1, 10.0, 9.9, 9.8, 9.7, 9.6]",
        exampleOutput: "Alert triggered! 5 consecutive drops detected.",
        hints: ["Iterate through the list, maintaining a `consecutive_drops` counter.", "Reset the counter to 0 if `current_value >= previous_value`."]
      }
    ]
  },
  {
    theme: "Fantasy Kingdom Theme",
    questions: [
      {
        id: 21,
        title: "Dragon Stable Manager",
        summary: "Build a weekly food planner for dragons.",
        description: "The King's stable holds dragons. Baby dragons eat 5kg of meat daily, adults eat 50kg, and elder dragons eat 20kg. Given a list of dragons and their ages, write a script to calculate the exact amount of meat needed to order for a 7-day week.",
        exampleInput: "Dragons: [{'name': 'Smaug', 'age': 'adult'}, {'name': 'Norbert', 'age': 'baby'}]",
        exampleOutput: "Meat required for 7 days: 385kg ((50+5) * 7)",
        hints: ["Map the age strings to numeric kg values using a dictionary.", "Iterate over the dragons, sum their daily requirements, and multiply by 7."]
      },
      {
        id: 22,
        title: "Castle Room Booking",
        summary: "Assign rooms while avoiding double-booking.",
        description: "The castle has 10 numbered rooms. Guests request a room for specific dates `(start_day, end_day)`. Process a list of requests. If a room is available for those dates, assign it. If all rooms are booked for any overlapping day, reject the request.",
        exampleInput: "Requests: [('Knight A', 1, 5), ('Wizard B', 4, 10)]",
        exampleOutput: "Knight A gets Room 1. Wizard B gets Room 2. (Since they overlap on day 4 and 5).",
        hints: ["Maintain a schedule for each room, perhaps a list of sets where each set contains booked days.", "For a new request, check room by room. Use set intersection to check for overlapping days."]
      },
      {
        id: 23,
        title: "Treasure Chest Merger",
        summary: "Merge loot inventories and sum duplicate items.",
        description: "Two adventurers team up. They want to merge their inventories, which are stored as dictionaries of `item: quantity`. Create a function that merges both dictionaries. If an item exists in both, the quantities should be added together.",
        exampleInput: "Inv 1: {'gold': 100, 'potions': 2}. Inv 2: {'gold': 50, 'arrows': 30}",
        exampleOutput: "Merged: {'gold': 150, 'potions': 2, 'arrows': 30}",
        hints: ["The `collections.Counter` class allows you to simply use the `+` operator to merge two inventories!", "If doing it manually, iterate through the second dictionary and add its values to the first."]
      },
      {
        id: 24,
        title: "Kingdom Tax Collector",
        summary: "Convert village taxes to a common value and rank.",
        description: "Villages pay tax in different currencies: gold coins, sacks of grain, and livestock. The exchange rate is 1 livestock = 50 gold, 1 sack of grain = 5 gold. Given a list of village tax payments, convert everything to its gold equivalent and rank the villages by their total contribution, highest first.",
        exampleInput: "Village A: {'gold': 10, 'grain': 10}. Village B: {'livestock': 2}",
        exampleOutput: "1. Village B (100 gold), 2. Village A (60 gold)",
        hints: ["Write a helper function to calculate the total gold value for a single village's dictionary.", "Use `sorted()` with a custom lambda key pointing to your helper function."]
      },
      {
        id: 25,
        title: "Magic Portal Network",
        summary: "Find reachable destinations through portals.",
        description: "Portals connect cities, but they are unstable. You are given an adjacency list of cities, but each edge also has an `active_hours` tuple (e.g., `(8, 18)` means it works between 8 AM and 6 PM). Given a starting city and a current time, find all cities you can currently reach (direct or indirect).",
        exampleInput: "Time: 10. Portals: A->B (8, 12), B->C (9, 20), A->D (18, 22)",
        exampleOutput: "Reachable from A: B, C. (D is inactive).",
        hints: ["Use a Breadth-First Search (BFS).", "Before adding a neighbor to the queue, verify that the current time falls within the portal's `active_hours`."]
      },
      {
        id: 26,
        title: "Sword Durability Tracker",
        summary: "Manage weapon durability after battles.",
        description: "A knight has a list of swords, each with a durability score. After every battle, all swords in the inventory lose 10 durability points. If a sword's durability drops to 0 or below, it breaks and must be removed from the list. Write a simulation of 3 battles and output the remaining swords.",
        exampleInput: "Swords: [('Excalibur', 50), ('Iron Sword', 20), ('Rusty Blade', 15)]",
        exampleOutput: "After 3 battles (-30 dur): [('Excalibur', 20)]",
        hints: ["Don't modify a list while iterating over it. Instead, use a list comprehension to create a new list of swords that have `durability - 10 > 0`."]
      },
      {
        id: 27,
        title: "Royal Messenger Route",
        summary: "Deliver letters minimizing travel distance.",
        description: "A messenger must deliver 5 letters. They must start at the Castle (0,0). Find the optimal route that visits all 5 coordinates in an order that minimizes the total Euclidean distance travelled. Return the ordered list of coordinates.",
        exampleInput: "Targets: [(1, 5), (2, 2), (5, 5)]",
        exampleOutput: "Optimal Route: Castle -> (2, 2) -> (1, 5) -> (5, 5)",
        hints: ["Since there are only 5 targets, use `itertools.permutations` to generate all possible orderings.", "Calculate the distance for each permutation and keep the minimum."]
      },
      {
        id: 28,
        title: "Dungeon Trap Simulator",
        summary: "Simulate a player moving through a dungeon grid.",
        description: "You have a 5x5 grid. The player starts at (0,0). Given a sequence of moves ('U', 'D', 'L', 'R'), update the player's position. The grid contains 'T' (trap: -10 HP), 'H' (heal: +10 HP), and 'W' (wall: blocks movement). Calculate final HP (starts at 50) and final position.",
        exampleInput: "Moves: ['R', 'R', 'D']. Grid has Trap at (0,1) and Wall at (0,2).",
        exampleOutput: "Final Pos: (1, 1). HP: 40. (The second 'R' was blocked by the wall).",
        hints: ["Represent the grid as a list of lists.", "Update coordinates based on the move, but check if the new coordinate is within bounds and not a 'W' before finalizing the move."]
      },
      {
        id: 29,
        title: "Wizard Duel Replay",
        summary: "Replay a duel and determine the winner.",
        description: "Two wizards duel. You are given a sequence of actions. Each action has an 'actor' and a 'spell'. Spells: 'Fireball' (-20 HP to enemy), 'Heal' (+15 HP to self), 'Shield' (blocks the NEXT damage spell directed at them). Both start at 100 HP. Determine the survivor.",
        exampleInput: "['W1 casts Fireball', 'W2 casts Shield', 'W1 casts Fireball', 'W2 casts Fireball']",
        exampleOutput: "W1 HP: 80, W2 HP: 100 (First fireball blocked, second hit W1).",
        hints: ["Keep track of states in variables, like `w1_hp`, `w1_shield_active`, `w2_hp`, `w2_shield_active`.", "Process the actions sequentially, applying effects and resetting shields after they absorb damage."]
      },
      {
        id: 30,
        title: "Festival Attendance Analyzer",
        summary: "Find peak attendance time at a festival.",
        description: "Villagers sign in and out of the King's festival. You have a list of tuples: `(villager_id, arrival_hour, departure_hour)`. Determine the specific hour (integer) where the maximum number of people were simultaneously present.",
        exampleInput: "[(1, 9, 12), (2, 10, 15), (3, 11, 13)]",
        exampleOutput: "Peak hour is 11 (3 people present).",
        hints: ["Create an array or dictionary representing every hour from 0 to 24.", "For each villager, iterate from their arrival to departure hour, incrementing the count for those hours."]
      }
    ]
  },
  {
    theme: "Space / Sci-Fi Theme",
    questions: [
      {
        id: 31,
        title: "Spaceship Oxygen Forecast",
        summary: "Predict when oxygen runs out.",
        description: "Your spaceship has 1000 units of oxygen. The base consumption is 5 units/hour per crew member. However, there is a hull leak leaking 2 units/hour. You also have logs of oxygen tank refills. Predict exactly which hour the oxygen level hits 0.",
        exampleInput: "Crew: 4. Refills: [{hour: 10, amount: 200}]",
        exampleOutput: "Consumption is (4*5)+2 = 22/hour. At hour 10, oxygen is 1000 - 220 + 200 = 980. Depletes at hour ~54.5.",
        hints: ["Simulate hour by hour in a `while` loop.", "Subtract the consumption rate every hour, and add refills if the current hour matches a refill log."]
      },
      {
        id: 32,
        title: "Alien Language Translator",
        summary: "Return all possible translations for a sentence.",
        description: "You discover an alien dictionary. However, one alien word can mean multiple English words! E.g., 'Glarg' -> ['Hello', 'Die']. Given a sentence of alien words, return a list of ALL possible English sentence combinations.",
        exampleInput: "Sentence: 'Glarg Blip'. Dict: {'Glarg': ['Hello', 'Die'], 'Blip': ['Human', 'Scum']}",
        exampleOutput: "['Hello Human', 'Hello Scum', 'Die Human', 'Die Scum']",
        hints: ["This is a classic Cartesian Product problem.", "Use `itertools.product` on the lists of possible English words for each alien word in the sentence."]
      },
      {
        id: 33,
        title: "Mars Rover Path Log",
        summary: "Report final position and collisions.",
        description: "The Mars Rover receives a string of commands: 'F' (forward), 'B' (backward), 'L' (turn left 90 deg), 'R' (turn right 90 deg). It starts at (0,0) facing North. A list of obstacle coordinates is given. If the rover tries to move into an obstacle, it ignores that move but continues the sequence. Report final position and if any collisions were dodged.",
        exampleInput: "Commands: 'FFRFF', Obstacles: [(0,2)]",
        exampleOutput: "Collision at (0,2)! Final pos: (2, 1).",
        hints: ["Use a direction vector `(dx, dy)`. North is `(0, 1)`. Turning left/right changes the vector (e.g., North left becomes West `(-1, 0)`).", "Check the next coordinate against the obstacle list before updating the rover's position."]
      },
      {
        id: 34,
        title: "Planet Trade Network",
        summary: "Detect cycles for profit in trading.",
        description: "Planets trade resources via exchange rates. Earth: 1 Water = 2 Iron. Mars: 1 Iron = 3 Gas. Venus: 1 Gas = 0.5 Water. Write an algorithm to detect if an arbitrage cycle exists (where you can trade around the loop and end up with > 1 of the starting resource).",
        exampleInput: "Edges: Water->Iron(2), Iron->Gas(3), Gas->Water(0.5)",
        exampleOutput: "Cycle detected! 1 Water * 2 * 3 * 0.5 = 3 Water. Arbitrage exists.",
        hints: ["This is a graph problem related to the Bellman-Ford algorithm.", "You can simulate following the directed edges and multiplying the exchange rates to see if the product exceeds 1.0 when returning to the start."]
      },
      {
        id: 35,
        title: "Robot Repair Queue",
        summary: "Simulate repair queue with severity levels.",
        description: "Damaged robots arrive at the bay. They have a `severity` (1-10) and a `required_part`. The bay only has certain parts in stock. Sort the queue so that robots with parts in stock are processed first, sorted by highest severity. Robots needing out-of-stock parts are placed in a 'pending' list.",
        exampleInput: "Robots: [(Sev 9, 'Arm'), (Sev 5, 'Leg')], Stock: ['Leg']",
        exampleOutput: "Repaired: [(Sev 5, 'Leg')]. Pending: [(Sev 9, 'Arm')]",
        hints: ["First, iterate through and separate robots into two lists based on stock availability.", "Then, use `sorted()` with `reverse=True` on the 'in stock' list using the severity as the key."]
      },
      {
        id: 36,
        title: "Asteroid Collision Tracker",
        summary: "Simulate surviving asteroids after collisions.",
        description: "An array represents asteroids in a row. The absolute value is their size, the sign is direction (positive = right, negative = left). Asteroids moving towards each other will collide. The smaller one explodes. If equal, both explode. Return the state of the asteroids after all collisions.",
        exampleInput: "[5, 10, -5]",
        exampleOutput: "[5, 10]. (The 10 and -5 collide. 10 wins and survives).",
        hints: ["Use a stack. Iterate through the array. If the asteroid moves right, push it.", "If it moves left, compare it with the top of the stack (if the top is moving right). Pop from the stack as long as the left-moving asteroid destroys them."]
      },
      {
        id: 37,
        title: "Starship Crew Shift Planner",
        summary: "Schedule shifts without breaking consecutive hour limits.",
        description: "You must assign 3 crew members (A, B, C) to cover a 24-hour command shift. The rules: The bridge must always be manned by exactly 1 person. No person can work more than 4 consecutive hours. Output a valid 24-hour schedule array.",
        exampleInput: "N/A",
        exampleOutput: "['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'C', ...]",
        hints: ["Since the constraints are fixed, you can use a simple repeating pattern `['A']*4 + ['B']*4 + ['C']*4` repeated twice.", "For a programmatic approach, use a loop and keep track of who worked the last shift and for how long."]
      },
      {
        id: 38,
        title: "Satellite Signal Cleaner",
        summary: "Rebuild original message using majority vote.",
        description: "A satellite sends the same binary message 3 times, but space radiation flips some bits. You receive three strings of binary. Reconstruct the original message by using a 'majority vote' for each bit position.",
        exampleInput: "['1010', '1110', '1000']",
        exampleOutput: "'1010' (At idx 1: '0','1','0' -> majority is '0')",
        hints: ["Use the `zip()` function to group the bits from the same index across all strings.", "Use `collections.Counter` or just `sum()` the integers to find the majority for each tuple."]
      },
      {
        id: 39,
        title: "Cryo-Chamber Wake Order",
        summary: "Sort the wake-up order based on multiple criteria.",
        description: "Passengers are frozen. Wake order priority: 1) Medical Emergency (True/False), 2) Destination Distance (closest first), 3) VIP Status (True/False). Given a list of passenger objects, sort them by this wake-up priority.",
        exampleInput: "P1: (Med: F, Dist: 100, VIP: T), P2: (Med: T, Dist: 500, VIP: F)",
        exampleOutput: "Order: P2 (Medical emergency trumps all), then P1.",
        hints: ["Use `sorted()` with a custom key. Remember that in Python, `True` is greater than `False`.", "Since you want Medical Emergency `True` first, you can use `not Med` to invert it so `False` (0) comes before `True` (1) when sorting ascending, or just sort descending."]
      },
      {
        id: 40,
        title: "Galactic Passport Validator",
        summary: "Validate passports with specific formatting rules.",
        description: "A passport string must follow rules: Starts with a 3-letter species code (e.g., HUM, MAR), followed by a dash, followed by a 6-digit ID number, followed by a valid sector code (A, B, or X). Write a regex or parsing function to validate a list of passports.",
        exampleInput: "['HUM-123456A', 'ZRG-99X', 'MAR-000000B']",
        exampleOutput: "[True, False (id too short), True]",
        hints: ["Regular expressions are perfect here! The pattern `^[A-Z]{3}-\d{6}[ABX]$` solves it instantly.", "Without regex, use `split('-')` and check the lengths and types of the pieces using `isalpha()` and `isdigit()`."]
      }
    ]
  },
  {
    theme: "Mystery / Detective / Weird Theme",
    questions: [
      {
        id: 41,
        title: "Haunted Mansion Room Log",
        summary: "Determine impossible location history.",
        description: "Guests log into rooms. You are given a sequence of `(guest, room)` entries. The mansion rule: You can only move to adjacent rooms. Given an adjacency map, find which guest's log contains an impossible jump, revealing them as the ghost.",
        exampleInput: "Adj: {Hall: [Kitchen], Kitchen: [Hall, Garden]}. Log: [(G1, Hall), (G1, Garden)]",
        exampleOutput: "Guest G1 made an impossible jump (Hall to Garden without Kitchen).",
        hints: ["Group the log by guest first so you have a chronological list of rooms visited for each person.", "Iterate through each guest's list. Check if `room[i+1]` is in `Adj[room[i]]`."]
      },
      {
        id: 42,
        title: "Vampire Guest List",
        summary: "Validate movements based on sunset and garlic.",
        description: "Vampires can only enter the mansion after 18:00 and cannot enter rooms with Garlic. You are given a log of `(name, time, room_type)`. If a vampire breaks a rule, flag their name. Normal humans can do anything.",
        exampleInput: "Guests: {'Dracula': 'Vampire', 'Van Helsing': 'Human'}. Logs: [('Dracula', '17:00', 'Foyer')]",
        exampleOutput: "Dracula flagged! Entered before 18:00.",
        hints: ["Iterate through the logs. Look up the guest's species.", "If they are a Vampire, check if the hour `< 18` or if `room_type == 'Garlic'`. If so, add to a flagged set."]
      },
      {
        id: 43,
        title: "Time Traveler Diary Merger",
        summary: "Sort out-of-order diary entries.",
        description: "A time traveler's diary entries are scrambled. Each entry has a `written_date` (when they wrote it) and a `timeline_date` (the year they were physically in). Sort the entries chronologically by their *physical timeline date*, breaking ties by `written_date`.",
        exampleInput: "E1: (written 2024, timeline 1900), E2: (written 2020, timeline 2500)",
        exampleOutput: "E1 comes first, then E2.",
        hints: ["Use `sorted()` and provide a tuple key: `key=lambda x: (x.timeline_date, x.written_date)`. This perfectly handles the primary and secondary sort."]
      },
      {
        id: 44,
        title: "Ghost Message Decoder",
        summary: "Compress repeated characters.",
        description: "Ghosts moan their letters, sending messages like 'hhhheeeelllloooo'. Write a function that compresses any consecutive repeated characters down to a single character to reveal the intended word.",
        exampleInput: "'wwwhhhooo aarrreee yyyoouuu'",
        exampleOutput: "'who are you'",
        hints: ["Iterate through the string, appending characters to a new string only if they are different from the previous character you appended.", "Regular expressions can also do this: `re.sub(r'(.)\\1+', r'\\1', string)`."]
      },
      {
        id: 45,
        title: "Museum Heist Detector",
        summary: "Find the most likely path taken by a thief.",
        description: "Motion sensors trigger in rooms. You have a list of triggers `(room, time)`. The thief always moves to adjacent rooms, and takes exactly 1 minute to move. Find a contiguous sequence of triggers that perfectly matches a 1-minute interval between adjacent rooms.",
        exampleInput: "[(Lobby, 00:00), (East Wing, 00:01), (Vault, 00:02), (Roof, 00:05)]",
        exampleOutput: "Path found: Lobby -> East Wing -> Vault. (Roof broke the time rule).",
        hints: ["Iterate through the sorted triggers.", "Keep adding to the current 'path' list as long as the difference between current time and previous time is exactly 1 minute. If it breaks, reset the current path."]
      },
      {
        id: 46,
        title: "Secret Society Membership Audit",
        summary: "Find who is at the top of each recruitment tree.",
        description: "You have a dictionary mapping `recruit: recruiter`. Trace the chain of recruiters backwards to find the ultimate 'Grandmaster' (a person who was not recruited by anyone) for every member.",
        exampleInput: "{'Bob': 'Alice', 'Charlie': 'Bob', 'Alice': None}",
        exampleOutput: "Charlie's grandmaster is Alice.",
        hints: ["Write a recursive function or a `while` loop that keeps looking up the current person in the dictionary until it hits `None` or a key that doesn't exist."]
      },
      {
        id: 47,
        title: "Zombie Outbreak Simulation",
        summary: "Compute time to infect a city grid.",
        description: "A city grid contains 0 (empty), 1 (human), and 2 (zombie). Every hour, any zombie infects all adjacent humans (up, down, left, right). Return the number of hours until no humans remain, or -1 if some humans are completely blocked by empty space and survive.",
        exampleInput: "[[2, 1, 1], [1, 1, 0], [0, 1, 1]]",
        exampleOutput: "Infection takes 4 hours.",
        hints: ["This is equivalent to the 'Rotting Oranges' LeetCode problem.", "Use a Breadth-First Search (BFS) starting with all initial zombies in the queue. Track the maximum depth/hours reached."]
      },
      {
        id: 48,
        title: "Detective Evidence Matcher",
        summary: "Find suspects whose alibis conflict.",
        description: "A crime happened at 22:00. You have a list of suspects. Each suspect provides an alibi: `(location, time)`. You also have police reports confirming if certain locations were open at those times. If a suspect claims to be at a closed location, return their name.",
        exampleInput: "Suspect: 'Bob' at 'Diner' at 22:00. Reports: {'Diner': 'Closes at 21:00'}",
        exampleOutput: "Bob's alibi is busted!",
        hints: ["Parse the closing times into a comparable format (like integers `2100` for 21:00).", "Check the suspect's claimed time against the location's closing time."]
      },
      {
        id: 49,
        title: "Train Murder Seating Chart",
        summary: "Reconstruct who sat nearest the victim.",
        description: "An array represents train seats. `V` is the victim. Passengers swap seats based on a log of events: `Swap(seat_index_A, seat_index_B)`. After processing all swaps, determine the names of the passengers sitting immediately to the left and right of `V`.",
        exampleInput: "Seats: ['Alice', 'V', 'Bob', 'Charlie']. Swap(0, 3).",
        exampleOutput: "Left: Charlie, Right: Bob.",
        hints: ["Perform the swaps by simply updating the list elements: `arr[i], arr[j] = arr[j], arr[i]`.", "Find the index of 'V' and return `arr[index - 1]` and `arr[index + 1]` (handling edge cases)."]
      },
      {
        id: 50,
        title: "Cursed Auction Bidding System",
        summary: "Determine winners based on cursed reverse rules.",
        description: "An auction takes bids. Standard items: highest bid wins. Cursed items: the *lowest unique bid* wins. Given an item type and a list of bids `{'bidder': amount}`, determine the winner.",
        exampleInput: "Item: Cursed. Bids: [Alice: 10, Bob: 10, Charlie: 15, Dave: 20]",
        exampleOutput: "Charlie wins! (10 was lower, but not unique).",
        hints: ["For standard items, just find the `max()`.", "For cursed items, use `collections.Counter` on the bid amounts. Filter out any bids that have a count > 1. Then find the `min()` of the remaining bids."]
      }
    ]
  }
];
