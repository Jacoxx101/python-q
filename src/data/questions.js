export const questionsData = [
  {
    theme: "Harry Potter Theme",
    questions: [
      {
        id: 1,
        title: "Hogwarts Shortest Path (Dijkstra)",
        summary: "Find the quickest route between magical locations avoiding moving staircases.",
        description: "Given a graph of Hogwarts locations where edges represent travel time in minutes, write a function using Dijkstra's algorithm to find the shortest path from the 'Gryffindor Common Room' to the 'Potions Classroom'. Some corridors have a 'moving staircase' modifier that adds a dynamic 5-minute penalty if visited at an odd minute.",
        exampleInput: "graph = {'Gryffindor': {'Great Hall': 3}, 'Great Hall': {'Potions': 4...}}",
        exampleOutput: "Path: ['Gryffindor', 'Great Hall', 'Potions'], Time: 7 mins",
        hints: ["Use `heapq` for your priority queue.", "Track the current time to determine if a dynamic penalty applies at the next node."],
        advancedChallenge: "Level Up: Also return the *second* shortest path.",
        advancedHints: ["Consider using Yen's algorithm or keeping track of multiple paths per node."]
      },
      {
        id: 2,
        title: "Polyjuice Potion Knapsack",
        summary: "Maximize the magical potency of a potion given a cauldron's weight limit.",
        description: "You have a list of rare ingredients. Each has a `weight` (g) and a `potency` score. The cauldron can hold a maximum of `W` grams before exploding. Write a dynamic programming solution to find the maximum possible potency.",
        exampleInput: "items = [(weight: 10, potency: 60), (20, 100), (30, 120)], W = 50",
        exampleOutput: "Max potency: 220 (items 1, 2, 3... wait, 10+20+30 > 50. Output: 220 using (20,100) and (30,120))",
        hints: ["This is the classic 0/1 Knapsack problem.", "Create a 2D array or use a 1D array optimized DP table."],
        advancedChallenge: "Level Up: Reconstruct and return the exact list of ingredients used.",
        advancedHints: ["Trace back through your DP table from the bottom right to the top left."]
      },
      {
        id: 3,
        title: "Wand Compatibility Matrix",
        summary: "Assign wizards to wands to maximize overall magical resonance.",
        description: "You are Ollivander. You have `N` wizards and `N` wands. You are given an `N x N` matrix where `matrix[i][j]` is the compatibility score of wizard `i` with wand `j`. Use the Hungarian algorithm (or minimum weight bipartite matching) to find the assignment that maximizes total compatibility.",
        exampleInput: "scores = [[4, 1, 5], [2, 3, 3], [5, 2, 1]]",
        exampleOutput: "Max compatibility: 11 (Wizard 0 -> Wand 2, Wizard 1 -> Wand 1, Wizard 2 -> Wand 0)",
        hints: ["You can use `scipy.optimize.linear_sum_assignment` if allowed, or implement it yourself.", "If implementing from scratch, look into augmenting paths or the min-cost max-flow approach."],
        advancedChallenge: "Level Up: Solve it without importing external libraries.",
        advancedHints: ["Implementing the Hungarian algorithm from scratch requires a cost matrix, row/column reductions, and covering zeros."]
      },
      {
        id: 4,
        title: "Marauder's Map Event Sorter",
        summary: "Sort a complex stream of student movement logs.",
        description: "You receive a JSON string of student logs: `[{'name': 'Harry', 'room': 'Kitchen', 'timestamp': '2023-10-31T23:55:00Z', 'suspicion': 8}, ...]`. Sort the logs primarily by `suspicion` (descending), then by `room` (alphabetically), and finally by `timestamp` (chronologically).",
        exampleInput: "[{'name': 'Ron', 'suspicion': 8, 'room': 'A', ...}, {'name': 'Harry', 'suspicion': 8, 'room': 'B', ...}]",
        exampleOutput: "Sorted list of dictionaries based on the 3 criteria.",
        hints: ["Use the `key` argument in `sorted()` or `.sort()`.", "You can return a tuple in the lambda: `lambda x: (-x['suspicion'], x['room'], x['timestamp'])`."],
        advancedChallenge: "Level Up: Parse the timestamps into localized aware datetime objects before sorting.",
        advancedHints: ["Use `datetime.fromisoformat()` to parse the ISO8601 strings."]
      },
      {
        id: 5,
        title: "Spell Dependency Resolution",
        summary: "Use topological sorting to determine the order of spells to learn.",
        description: "Advanced spells require mastering basic spells first. Given a dictionary of dependencies `{'Expecto Patronum': ['Lumos', 'Riddikulus'], 'Riddikulus': ['Boggart-Banishing']}...`, write a function that outputs a valid sequence to learn all spells. Detect cyclic dependencies and raise a custom `DarkMagicException`.",
        exampleInput: "deps = {'A': ['B', 'C'], 'B': ['C'], 'C': []}",
        exampleOutput: "['C', 'B', 'A']",
        hints: ["Use Kahn's algorithm or DFS with visited/visiting states.", "A cycle exists if you encounter a node currently in the 'visiting' state."],
        advancedChallenge: "Level Up: Return all possible valid learning sequences.",
        advancedHints: ["Use backtracking to explore all valid topological sorts instead of just one."]
      },
      {
        id: 6,
        title: "Triwizard Maze Backtracking",
        summary: "Find all paths through a maze with limited energy.",
        description: "Given a 2D grid representing the Triwizard maze, start at `(0,0)` and reach `(N-1, N-1)`. Some cells contain Blast-Ended Skrewts (cost 10 energy) or empty space (cost 1 energy). Write a backtracking function to find all valid paths that cost less than or equal to `MAX_ENERGY`.",
        exampleInput: "grid = [[1, 10], [1, 1]], MAX_ENERGY = 5",
        exampleOutput: "Paths: [[(0,0), (1,0), (1,1)]]",
        hints: ["Pass the current path and current energy down the recursive calls.", "Don't forget to mark cells as visited and unmark them when backtracking."],
        advancedChallenge: "Level Up: Include portkeys that teleport you to specific coordinates instantly.",
        advancedHints: ["Add a dictionary mapping `(r, c)` to `(new_r, new_c)` and update the current coordinates inside your recursive step."]
      },
      {
        id: 7,
        title: "Boggart Shape Shifter",
        summary: "Implement a robust State Machine.",
        description: "A Boggart changes shape depending on the state of the wizard facing it. Implement a finite state machine (FSM) class. States: `IDLE`, `FEAR`, `CONFUSED`, `VANISHED`. Transitions require specific spells. e.g., `FEAR` + `Riddikulus` -> `CONFUSED`. If an invalid spell is cast for the current state, raise an error.",
        exampleInput: "b = Boggart(); b.cast('Scare'); b.cast('Riddikulus')",
        exampleOutput: "State transitions from IDLE to FEAR, then FEAR to CONFUSED.",
        hints: ["Use a dictionary to map `(current_state, action)` to `next_state`.", "Handle invalid transitions gracefully."],
        advancedChallenge: "Level Up: Implement this using the State Design Pattern with separate classes for each State.",
        advancedHints: ["Each State class should implement an `on_cast()` method that returns the next State instance."]
      },
      {
        id: 8,
        title: "Parseltongue Translator",
        summary: "Build an advanced Regex parser.",
        description: "Parseltongue text looks like `'Sss[open] shh sss[door]!'`. Write a regex parser that extracts the hidden English commands located inside brackets, but only if they are preceded by exactly three 's' characters (case-insensitive).",
        exampleInput: "text = 'sss[hello] SSs[world] ss[ignored]'",
        exampleOutput: "['hello', 'world']",
        hints: ["Use the `re` module.", "Look into positive lookbehinds: `(?<=[sS]{3})\[(.*?)\]`."],
        advancedChallenge: "Level Up: Replace the brackets and English words with encrypted hex values in the original string.",
        advancedHints: ["Use `re.sub()` with a callable function to dynamically generate replacements."]
      },
      {
        id: 9,
        title: "Horcrux Memory Leak",
        summary: "Implement a custom memory manager / cache with LRU eviction.",
        description: "You must process thousands of magical memories. Implement a custom `MemoryCache` class using an OrderedDict or a combination of a dict and a doubly linked list. It should have `get(key)` and `put(key, value)` with `O(1)` time complexity. Max capacity is `N`.",
        exampleInput: "cache = MemoryCache(2); cache.put(1, 'A'); cache.put(2, 'B'); cache.put(3, 'C')",
        exampleOutput: "cache.get(1) returns -1 (evicted)",
        hints: ["`collections.OrderedDict` provides `move_to_end()` and `popitem(last=False)`.", "Every `get` or `update` must move the item to the 'most recently used' end."],
        advancedChallenge: "Level Up: Add an expiration TTL (Time To Live) to each item.",
        advancedHints: ["Store `(value, expiry_timestamp)` and lazily evict expired items during `get()` calls."]
      },
      {
        id: 10,
        title: "O.W.L. Exam Concurrency",
        summary: "Use multithreading/asyncio to grade exams simultaneously.",
        description: "You have 100 exam papers (represented by strings). Grading one paper takes `time.sleep(0.1)` simulating heavy processing. Use `concurrent.futures.ThreadPoolExecutor` or `asyncio` to grade all 100 papers in less than 2 seconds.",
        exampleInput: "papers = ['paper1', 'paper2', ...]",
        exampleOutput: "All 100 papers graded in ~1.something seconds.",
        hints: ["If using `ThreadPoolExecutor`, use `executor.map()`.", "If using `asyncio`, define an `async def` and use `asyncio.gather()`."],
        advancedChallenge: "Level Up: Handle random `GradingFailures` by automatically retrying failed papers up to 3 times.",
        advancedHints: ["Wrap your worker function in a try/except loop that breaks on success or raises after 3 attempts."]
      }
    ]
  },
  {
    theme: "Airplanes / Aviation Theme",
    questions: [
      {
        id: 11,
        title: "Runway Interval Scheduling",
        summary: "Solve the greedy interval scheduling maximization problem.",
        description: "Given a list of flight requests with `start` and `end` times, find the maximum number of flights that can land on a single runway without any overlapping times.",
        exampleInput: "flights = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 9), (5, 9), (6, 10), (8, 11), (8, 12), (2, 14), (12, 16)]",
        exampleOutput: "Max flights: 4 (e.g., (1,4), (5,7), (8,11), (12,16))",
        hints: ["Sort the flights by their `end` times.", "Iterate through the sorted list and greedily pick the next flight that starts after the last selected flight ends."],
        advancedChallenge: "Level Up: Assume you have `K` runways. Maximize the total flights across all runways.",
        advancedHints: ["Keep track of the end times for all `K` runways (e.g., using a min-heap) and assign the flight to the runway that frees up earliest but before the flight's start time."]
      },
      {
        id: 12,
        title: "Flight Crew Constraint Satisfaction",
        summary: "Assign crew members to flights based on strict union rules.",
        description: "You have `M` pilots and `N` flights. Each pilot has `max_hours`, a list of `certified_planes`, and requires 10 hours rest between flights. Assign pilots to flights using Backtracking and Constraint Satisfaction Problem (CSP) techniques. Return a valid assignment or 'No valid roster'.",
        exampleInput: "pilots = [...], flights = [...]",
        exampleOutput: "{'Flight1': 'Pilot A', 'Flight2': 'Pilot B'}",
        hints: ["Order your variables (flights) heuristically (e.g., Most Constrained Variable).", "Use forward checking to eliminate invalid pilots early."],
        advancedChallenge: "Level Up: Optimize for minimum total layover time across all pilots.",
        advancedHints: ["Instead of stopping at the first valid assignment, use Branch and Bound to find the optimal assignment."]
      },
      {
        id: 13,
        title: "Air Traffic Collision Detection",
        summary: "Find the closest pair of planes in 3D space.",
        description: "Given a list of `(x, y, z)` coordinates for 100,000 planes, write an algorithm to find the two planes that are closest to each other. An `O(N^2)` brute-force solution will time out. Use a divide-and-conquer approach or a 3D KD-Tree to achieve `O(N log N)`.",
        exampleInput: "coords = [(1, 2, 3), (4, 5, 6), (1.1, 2.1, 3.1)]",
        exampleOutput: "Closest pair: (1, 2, 3) and (1.1, 2.1, 3.1)",
        hints: ["If implementing divide-and-conquer, sort by X first, recursively find the min in left/right halves, then check the cross-boundary strip.", "A KD-Tree (`scipy.spatial.KDTree`) makes this trivial, but try implementing the core logic."],
        advancedChallenge: "Level Up: Handle planes that are moving (each has a velocity vector). Find the closest pair *at any point in the next 10 minutes*.",
        advancedHints: ["The distance between two planes is a quadratic function of time. You need to minimize this function over the interval [0, 10]."]
      },
      {
        id: 14,
        title: "Luggage Routing Network Max Flow",
        summary: "Use the Ford-Fulkerson algorithm.",
        description: "Baggage is routed through a network of conveyor belts from Check-in (Source) to the Plane (Sink). Each belt has a maximum capacity (bags per minute). Calculate the maximum number of bags per minute that can reach the plane.",
        exampleInput: "graph = {'Checkin': {'BeltA': 10, 'BeltB': 5}, 'BeltA': {'Plane': 10}...}",
        exampleOutput: "Max Flow: 15 bags/min",
        hints: ["Implement BFS to find augmenting paths (Edmonds-Karp).", "Keep track of residual capacities on the back-edges."],
        advancedChallenge: "Level Up: Find the 'bottleneck' belt (Minimum Cut).",
        advancedHints: ["After running max flow, do a BFS from the source on the residual graph. Edges from the visited set to the unvisited set form the min cut."]
      },
      {
        id: 15,
        title: "Frequent Flyer SQL-like Aggregation",
        summary: "Process massive CSVs using pandas or itertools.",
        description: "You have a massive generator yielding flight records `{'user': ID, 'miles': int, 'class': str}`. Write a function that calculates the top 5 users by total miles, but ONLY counts miles flown in 'First' or 'Business' class. Do not load all records into memory at once.",
        exampleInput: "def stream(): yield {'user': 1, 'miles': 500, 'class': 'First'}...",
        exampleOutput: "[User 42 (15000), User 7 (12000)...]",
        hints: ["Use `collections.defaultdict(int)` to accumulate miles.", "Process the stream lazily with a `for` loop, then sort the dictionary items at the very end."],
        advancedChallenge: "Level Up: Maintain a running 'Top 5' leaderboard during the stream using a Min-Heap.",
        advancedHints: ["Use `heapq`. Whenever you update a user's score, it's tricky because heaps don't support fast updates. Consider storing a separate dict of current scores and pushing new `(score, user)` tuples, ignoring stale ones on pop."]
      },
      {
        id: 16,
        title: "Aircraft Sensor Telemetry Parser",
        summary: "Parse and validate complex nested JSON using Pydantic or Dataclasses.",
        description: "You receive raw JSON telemetry data from an aircraft. Define strict Data Classes (or Pydantic models) to parse it. Ensure `altitude` is a positive float, `coordinates` is a valid tuple of `(lat, lon)`, and `engine_status` is an Enum. Raise detailed validation errors.",
        exampleInput: "{'altitude': -500, 'coordinates': [95.0, -200.0], 'engine': 'UNKNOWN'}",
        exampleOutput: "ValidationErrors: altitude must be > 0, lat must be [-90,90], etc.",
        hints: ["Using `pydantic` makes this very easy with `validator` decorators.", "If using standard library, use `@dataclass` and implement a `__post_init__` method."],
        advancedChallenge: "Level Up: Write a custom JSON encoder to serialize your Data Classes back to JSON smoothly.",
        advancedHints: ["Inherit from `json.JSONEncoder` and override the `default()` method to handle Enums and custom classes."]
      },
      {
        id: 17,
        title: "Delay Propagation Simulation",
        summary: "Simulate a cascading network failure.",
        description: "A plane flies A -> B -> C. If A -> B is delayed by 30 mins, B -> C is delayed, which delays other flights sharing the runway at B. Given a list of flights and their plane/runway dependencies, write a discrete-event simulation to propagate a 60-minute delay of the first flight through the entire network.",
        exampleInput: "Dependency graph of flights.",
        exampleOutput: "Final arrival time of the last flight in the network.",
        hints: ["Use a priority queue (event queue) where events are `(time, action, flight_id)`.", "Process events chronologically and update dependent flights when a delay occurs."],
        advancedChallenge: "Level Up: Introduce 'buffer times' and 'crew swaps' that can absorb delays.",
        advancedHints: ["Add logic to check if a delay is completely absorbed by the gap between scheduled landing and the next takeoff."]
      },
      {
        id: 18,
        title: "Ticket Pricing Trie",
        summary: "Build an efficient prefix tree for flight routes.",
        description: "You have millions of route pricing rules based on prefixes (e.g., 'US-CA-*' is $100, 'US-CA-LAX' is $150). Implement a Trie (Prefix Tree) to quickly look up the most specific price rule for a given exact route like 'US-CA-LAX'.",
        exampleInput: "insert('US-CA-*', 100), insert('US-CA-LAX', 150). search('US-CA-SFO')",
        exampleOutput: "Returns 100 (matches 'US-CA-*')",
        hints: ["Each node in the Trie represents a character or segment.", "During search, keep track of the last valid price seen as you traverse down the tree."],
        advancedChallenge: "Level Up: Support wildcard matching in the middle of the string (e.g., 'US-*-LAX').",
        advancedHints: ["When encountering a `*` in the search, you must recursively check all child branches to find the best match."]
      },
      {
        id: 19,
        title: "Black Box Binary Decoder",
        summary: "Read and decode packed binary data.",
        description: "A black box records data in packed binary format. Every 8 bytes represents: 4 bytes unsigned int (timestamp), 2 bytes signed short (altitude), 2 bytes unsigned short (speed). Use the `struct` module to read a binary string and unpack it into a list of dictionaries.",
        exampleInput: "b'\\x00\\x00\\x01\\xff\\xff\\x9c\\x01\\x04'",
        exampleOutput: "[{'timestamp': 511, 'altitude': -100, 'speed': 260}]",
        hints: ["Look at `struct.unpack('>IhH', data)`.", "Pay attention to endianness (big-endian vs little-endian)."],
        advancedChallenge: "Level Up: Implement an iterator that reads directly from a binary file chunk-by-chunk without loading the whole file into memory.",
        advancedHints: ["Use `f.read(8)` in a `while` loop and `yield` the parsed dictionaries."]
      },
      {
        id: 20,
        title: "Aircraft Maintenance Decorators",
        summary: "Use decorators for access control and logging.",
        description: "Write a `@requires_clearance(level)` decorator. Apply it to functions like `override_autopilot()`. The decorator must check a global `CURRENT_USER['clearance']` and raise a `PermissionError` if it's too low. Also, write a `@log_action` decorator and stack both on the function.",
        exampleInput: "@requires_clearance(5)\n@log_action\ndef land_plane(): ...",
        exampleOutput: "Logs the attempt, then raises PermissionError if clearance < 5.",
        hints: ["Decorators that take arguments require three levels of nested functions: `decorator_maker(args) -> decorator(func) -> wrapper(*args)`.", "Use `functools.wraps(func)` to preserve function metadata."],
        advancedChallenge: "Level Up: Make `@requires_clearance` accept a list of roles instead of an integer level.",
        advancedHints: ["Check `if CURRENT_USER['role'] not in allowed_roles: raise ...`"]
      }
    ]
  },
  {
    theme: "Fantasy Kingdom Theme",
    questions: [
      {
        id: 21,
        title: "A* Pathfinding in the Dungeon",
        summary: "Implement the A* search algorithm for optimal pathfinding.",
        description: "Given a 2D grid where `0` is floor, `1` is a wall, and `2` is mud (costs 3 movement), write an A* pathfinding algorithm to find the lowest-cost path from `(start_x, start_y)` to `(end_x, end_y)`. Use the Manhattan distance as your heuristic.",
        exampleInput: "grid = [[0, 1, 0], [0, 2, 0], [0, 0, 0]]",
        exampleOutput: "Path and total movement cost.",
        hints: ["Maintain a priority queue storing `(f_score, current_node)`.", "`f_score = g_score (actual cost so far) + h_score (heuristic estimate).`"],
        advancedChallenge: "Level Up: Support diagonal movement with a cost of 1.4.",
        advancedHints: ["Update your neighbor generation logic and use Chebyshev or Euclidean distance for the heuristic."]
      },
      {
        id: 22,
        title: "Kingdom Tax Optimizer (Linear Programming)",
        summary: "Maximize tax revenue under constraints.",
        description: "The King wants to maximize tax revenue. You can tax Farmers, Merchants, and Nobles. Farmers yield 10g, Merchants 50g, Nobles 200g. However, total tax events can't exceed 1000, Merchants taxed must be <= Farmers / 2, and Nobles taxed <= Merchants / 5. Solve this using linear programming (`scipy.optimize.linprog`).",
        exampleInput: "Constraints as described.",
        exampleOutput: "Optimal number of each class to tax.",
        hints: ["Define the objective function coefficients as negative for maximization.", "Write out the inequality constraints carefully: `Merchants - 0.5 * Farmers <= 0`."],
        advancedChallenge: "Level Up: Solve it purely iteratively or using integer linear programming.",
        advancedHints: ["Since people must be integers, you can use PulP or formulate a branch and bound wrapper."]
      },
      {
        id: 23,
        title: "Dragon DNA Longest Common Subsequence",
        summary: "Find the longest shared genetic sequence between two dragon species.",
        description: "You have two strings representing Dragon DNA (e.g., `ACGTAC` and `CGTACG`). Use Dynamic Programming to find the Longest Common Subsequence (LCS). Note: The subsequence does not need to be contiguous.",
        exampleInput: "s1 = 'AGGTAB', s2 = 'GXTXAYB'",
        exampleOutput: "'GTAB'",
        hints: ["Create a 2D array `dp[i][j]` representing the LCS length of `s1[:i]` and `s2[:j]`.", "If `s1[i] == s2[j]`, `dp[i][j] = dp[i-1][j-1] + 1`."],
        advancedChallenge: "Level Up: Return ALL possible longest common subsequences if there's a tie.",
        advancedHints: ["You will need to backtrack through the DP table and branch into multiple paths when DP values are equal."]
      },
      {
        id: 24,
        title: "Magic Spell Trie (Autocomplete)",
        summary: "Build an autocomplete engine for the wizard's spellbook.",
        description: "Implement a `Trie` class. Insert 10,000 spell names. Implement a method `autocomplete(prefix)` that returns the top 5 shortest spells starting with that prefix. This simulates a wizard quickly shouting the start of a spell in battle.",
        exampleInput: "trie.insert('Avada Kedavra'); trie.insert('Avis'); trie.autocomplete('Av')",
        exampleOutput: "['Avis', 'Avada Kedavra']",
        hints: ["A Trie node should contain a dictionary of children and a boolean `is_end_of_word`.", "Do a BFS or DFS from the node representing the end of the prefix to find words."],
        advancedChallenge: "Level Up: Support fuzzy matching (e.g., returning results even with 1 typo).",
        advancedHints: ["During traversal, keep track of an 'edit distance' budget. Allow taking the wrong branch by subtracting 1 from the budget."]
      },
      {
        id: 25,
        title: "Guild Hierarchy Tree Traverse",
        summary: "Calculate total guild power using post-order tree traversal.",
        description: "The Adventurer's Guild is a tree structure where each member manages subordinates. Each member has a `base_power`. A manager's actual power is `base_power + 10% of total subordinate power`. Write a recursive function to compute the true power of the Guildmaster.",
        exampleInput: "Node('Master', 100, [Node('Sub1', 50, []), Node('Sub2', 60, [])])",
        exampleOutput: "Master's true power = 100 + 0.1*(50 + 60) = 111",
        hints: ["Recursively call the function on all children first (Post-order).", "Sum the results and return `base_power + 0.1 * total_child_power`."],
        advancedChallenge: "Level Up: Print the hierarchy visually using indentation.",
        advancedHints: ["Pass a `depth` parameter into the recursive function and print `--` multiplied by `depth`."]
      },
      {
        id: 26,
        title: "Blacksmith Inventory Bitmasking",
        summary: "Use bitwise operations to manage a massive inventory.",
        description: "A blacksmith has 64 distinct material types. Instead of a list or set, represent a weapon's required materials as a 64-bit integer (bitmask). Write functions to `add_material()`, `remove_material()`, `has_material()`, and check if `weapon_reqs` is a subset of `inventory` using purely bitwise operators (`&`, `|`, `~`, `^`).",
        exampleInput: "inventory = 5 (binary 101), reqs = 4 (binary 100)",
        exampleOutput: "Subset check: True (inventory & reqs == reqs)",
        hints: ["`add`: `inv |= (1 << mat_id)`", "`remove`: `inv &= ~(1 << mat_id)`", "`has`: `inv & (1 << mat_id)`"],
        advancedChallenge: "Level Up: Write a function to count how many unique materials are in the inventory.",
        advancedHints: ["Use Brian Kernighan's Algorithm to count set bits: `n &= (n - 1)` in a loop."]
      },
      {
        id: 27,
        title: "Quest Board Priority Queue",
        summary: "Build a custom Heap implementation from scratch.",
        description: "The King issues quests with varying urgencies. Instead of using `heapq`, implement a `MaxHeap` class from scratch using an array. Implement `insert()`, `extract_max()`, and `heapify()`. Ensure time complexities are `O(log N)`.",
        exampleInput: "heap.insert(Quest(priority=5)); heap.insert(Quest(priority=10))",
        exampleOutput: "heap.extract_max() returns the Quest with priority 10",
        hints: ["The left child of `i` is `2i + 1`, right child is `2i + 2`.", "When inserting, append to the end and 'bubble up'. When extracting, swap root with the last element, pop, and 'bubble down'."],
        advancedChallenge: "Level Up: Make your heap iterable so it returns elements in sorted order (destructive).",
        advancedHints: ["Implement the `__iter__` and `__next__` dunder methods, calling `extract_max()` inside `__next__`."]
      },
      {
        id: 28,
        title: "Alchemist Recipe Multi-threading",
        summary: "Use threading and Locks to prevent race conditions.",
        description: "Multiple alchemist threads are brewing potions from a shared `Cauldron` object which tracks total liquid volume. If multiple threads do `volume += 1` simultaneously, race conditions occur. Implement a `threading.Lock` to ensure the final volume is exactly correct after 100 threads add 1000 units each.",
        exampleInput: "100 threads executing add_liquid(1000)",
        exampleOutput: "Final volume: 100000",
        hints: ["Create a `lock = threading.Lock()`.", "Use `with lock:` before modifying the shared state."],
        advancedChallenge: "Level Up: Implement a Producer-Consumer pattern using `queue.Queue`.",
        advancedHints: ["Have 'Gatherer' threads put ingredients into a queue, and 'Brewer' threads take them out to process."]
      },
      {
        id: 29,
        title: "Village Economy Markov Chain",
        summary: "Model economic states using matrix multiplication.",
        description: "A village economy has 3 states: Boom, Normal, Bust. You have a transition matrix representing the daily probability of moving from one state to another. Write a function to calculate the probability of being in the 'Boom' state after `N` days, starting from 'Normal'.",
        exampleInput: "matrix = [[0.6, 0.3, 0.1], [0.2, 0.6, 0.2], [0.1, 0.3, 0.6]], N = 10",
        exampleOutput: "Probabilities after 10 days.",
        hints: ["Use `numpy.dot()` to multiply the matrix by itself `N` times, or multiply a state vector by the matrix `N` times.", "Matrix exponentiation `M^N` gives the probabilities over `N` steps."],
        advancedChallenge: "Level Up: Find the 'Steady State' (equilibrium) probabilities as N approaches infinity.",
        advancedHints: ["Find the eigenvector corresponding to the eigenvalue 1, and normalize it so it sums to 1."]
      },
      {
        id: 30,
        title: "Magic Mirror Reflection (Metaclasses)",
        summary: "Use Metaclasses to intercept class creation.",
        description: "Create a `MagicMirror` metaclass. Any class created with this metaclass must automatically have all its method names reversed (e.g., `def attack()` becomes `def kcatta()`). If a user tries to call `attack()`, it should raise an AttributeError.",
        exampleInput: "class Hero(metaclass=MagicMirror): def attack(self): pass",
        exampleOutput: "h = Hero(); h.kcatta() works, h.attack() fails.",
        hints: ["Define `class MagicMirror(type): def __new__(cls, name, bases, dct): ...`", "Iterate over `dct`, and if a value is callable, add it to the dictionary under the reversed key and delete the original key."],
        advancedChallenge: "Level Up: Inject an automatic logging statement into every reversed method.",
        advancedHints: ["Inside `__new__`, wrap the callable in a new function that `print('Reflected!')` before calling the original function."]
      }
    ]
  },
  {
    theme: "Space / Sci-Fi Theme",
    questions: [
      {
        id: 31,
        title: "Asteroid Mining Optimization (Continuous DP)",
        summary: "Optimize drilling patterns with continuous state dynamic programming.",
        description: "An asteroid has a mineral density described by a mathematical function `f(x)`. You have `N` mining charges to place along the x-axis. Find the optimal placement coordinates to maximize yield. Use Scipy's optimization tools to solve this multi-variable optimization problem.",
        exampleInput: "density_func = lambda x: -(x-5)**2 + 25, N = 2",
        exampleOutput: "Optimal charge placements.",
        hints: ["Formulate an objective function that takes a list of `N` coordinates.", "Use `scipy.optimize.minimize`."],
        advancedChallenge: "Level Up: Write a custom Gradient Descent algorithm from scratch to solve it.",
        advancedHints: ["Compute the partial derivatives of your objective function manually or use a finite difference approximation."]
      },
      {
        id: 32,
        title: "Warp Drive Heat Dispersion",
        summary: "Simulate 2D heat equation using Numpy.",
        description: "A starship warp core is a 50x50 grid. The center is constantly generating heat, and the edges are absolute zero. Use the Finite Difference Method and `numpy` arrays to simulate the heat distribution over 1000 time steps. Plot the final matrix (or print a subset).",
        exampleInput: "grid = np.zeros((50,50)); grid[25,25] = 1000",
        exampleOutput: "A matrix showing the gradient of heat spreading outwards.",
        hints: ["Update each cell based on the average of its 4 neighbors: `u[i,j] = u[i,j] + alpha * (u[i+1,j] + u[i-1,j] + ... - 4*u[i,j])`.", "Avoid `for` loops. Use numpy array slicing: `u[1:-1, 1:-1]`."],
        advancedChallenge: "Level Up: Make the simulation incredibly fast by compiling it with Numba or Cython.",
        advancedHints: ["Import `numba` and add the `@jit(nopython=True)` decorator to your simulation function."]
      },
      {
        id: 33,
        title: "Interstellar Communication Delay",
        summary: "Implement an asynchronous event loop from scratch.",
        description: "Messages to Earth take hours. Write a mini-async framework without using the `asyncio` module. Implement a `Reactor` or `EventLoop` class that uses `yield` (coroutines) to pause execution of a task, sleep, and resume it when a simulated timer expires.",
        exampleInput: "loop = EventLoop(); loop.add_task(send_msg()); loop.run()",
        exampleOutput: "Task pauses, loop processes other tasks, task resumes.",
        hints: ["Generators with `yield` can pause execution.", "The event loop should maintain a queue of `(resume_time, generator_object)` and call `next()` when the time is right."],
        advancedChallenge: "Level Up: Support `yield from` to allow sub-coroutines.",
        advancedHints: ["When a generator yields another generator, push the sub-generator onto a call stack within your task state."]
      },
      {
        id: 34,
        title: "Quantum State Superposition",
        summary: "Simulate a quantum qubit using Complex Numbers in Python.",
        description: "A qubit's state is a vector of two complex numbers `[a, b]` where `|a|^2 + |b|^2 = 1`. Implement a `Qubit` class. Write methods to apply the Pauli-X (NOT) gate and the Hadamard (H) gate by multiplying the state vector by the appropriate 2x2 complex matrices using `numpy`.",
        exampleInput: "q = Qubit([1, 0]); q.apply_hadamard()",
        exampleOutput: "State becomes [0.707+0j, 0.707+0j]",
        hints: ["Python natively supports complex numbers: `1 + 2j`.", "The Hadamard matrix is `(1/sqrt(2)) * [[1, 1], [1, -1]]`."],
        advancedChallenge: "Level Up: Simulate a 2-qubit system and apply a CNOT gate to create quantum entanglement.",
        advancedHints: ["A 2-qubit system is represented by a vector of 4 complex numbers (tensor product of two 1-qubit states)."]
      },
      {
        id: 35,
        title: "Holographic Database Compression",
        summary: "Implement Huffman Coding from scratch.",
        description: "To save bandwidth, implement Huffman Encoding. Given a large string of sensor data, calculate character frequencies, build the Huffman Tree using a priority queue, generate the binary prefix codes, and encode the string. Finally, write the decoding function.",
        exampleInput: "text = 'BEEP BOOP BEEP'",
        exampleOutput: "Encoded: '1011100...' and the corresponding decoding tree.",
        hints: ["Use `collections.Counter` to get frequencies.", "Push `(frequency, Node(char))` to `heapq`. Pop two, merge into a parent node, push back."],
        advancedChallenge: "Level Up: Serialize the Huffman tree into a compact string header so the receiver can decode the data without knowing the frequencies in advance.",
        advancedHints: ["Do a pre-order traversal of the tree. Write a '1' for a leaf node followed by the character, and a '0' for an internal node."]
      },
      {
        id: 36,
        title: "Alien Flora Genetic Algorithm",
        summary: "Use evolutionary algorithms to find the optimal plant.",
        description: "An alien plant's survival score is determined by its genome (a string of 50 bits). You have a black-box fitness function `score(genome)`. Implement a Genetic Algorithm: generate a random population, select the fittest, perform crossover, add mutations, and iterate for 100 generations to find a near-optimal genome.",
        exampleInput: "population_size = 100, mutation_rate = 0.01",
        exampleOutput: "Best genome after 100 generations.",
        hints: ["Selection: Roulette wheel or Tournament selection.", "Crossover: Pick a random split point and swap the halves of two parents."],
        advancedChallenge: "Level Up: Implement 'Elitism' to guarantee the best genome is never lost.",
        advancedHints: ["Simply copy the top 1 or 2 individuals directly into the next generation without crossover or mutation."]
      },
      {
        id: 37,
        title: "Galactic Trade Route TSP",
        summary: "Solve the Traveling Salesperson Problem using Simulated Annealing.",
        description: "A merchant must visit 20 star systems and return to the start. Finding the exact shortest path is `O(N!)`. Implement the Simulated Annealing heuristic: start with a random route, randomly swap two cities, accept it if it's shorter. If it's longer, accept it with a probability that decreases as the 'temperature' cools.",
        exampleInput: "List of 20 2D coordinates.",
        exampleOutput: "Near-optimal route and distance.",
        hints: ["Acceptance probability function: `math.exp(-(new_dist - old_dist) / temperature)`.", "Gradually multiply temperature by a cooling rate (e.g., `0.99`) in a loop."],
        advancedChallenge: "Level Up: Visualize the route improving in real-time using `matplotlib` animation.",
        advancedHints: ["Use `matplotlib.animation.FuncAnimation` to clear and redraw the path array at each step."]
      },
      {
        id: 38,
        title: "Rogue AI Containment",
        summary: "Use abstract syntax trees (AST) to sanitize python code.",
        description: "You must run code generated by an AI, but it might be malicious. Write a function that uses the `ast` module to parse a string of Python code. Walk the tree to ensure there are no `Import` statements or `Call` nodes invoking `exec` or `eval`. Raise an error if dangerous code is detected.",
        exampleInput: "code = 'import os\\nos.system(\"rm -rf\")'",
        exampleOutput: "SecurityException: Imports are not allowed.",
        hints: ["Use `tree = ast.parse(code)`.", "Create a class inheriting from `ast.NodeVisitor` and override `visit_Import()` and `visit_Call()`."],
        advancedChallenge: "Level Up: Safely execute the code after passing the AST checks.",
        advancedHints: ["Use `exec(code, {'__builtins__': {}}, safe_locals_dict)` to sandbox the runtime environment."]
      },
      {
        id: 39,
        title: "Time Dilation Calculator",
        summary: "Symbolic mathematics using SymPy.",
        description: "Use the `sympy` library to calculate exact relativistic time dilation. Define symbols for velocity `v` and speed of light `c`. Write a function that takes an algebraic expression for `v` (e.g., `sympy.sqrt(3)/2 * c`) and computes the exact simplified Lorentz factor `gamma`. Do not use floating point approximations.",
        exampleInput: "v = sympy.sqrt(3)/2 * c",
        exampleOutput: "gamma = 2",
        hints: ["`gamma = 1 / sympy.sqrt(1 - (v**2 / c**2))`.", "Use `sympy.simplify()` to collapse the expression cleanly."],
        advancedChallenge: "Level Up: Compute the Taylor series expansion of gamma to the 4th order.",
        advancedHints: ["Use `gamma.series(v, 0, 4)` to show how it approximates Newtonian physics at low speeds."]
      },
      {
        id: 40,
        title: "Starship Fleet Inheritance",
        summary: "Multiple inheritance and Method Resolution Order (MRO).",
        description: "Design a complex class hierarchy for a Starfleet. `Ship` -> `Warship` & `CargoShip`. `HeavyCruiser` inherits from BOTH `Warship` and `CargoShip`. Use `super()` correctly in `__init__` so that all parent initializers are called exactly once. Print `HeavyCruiser.__mro__`.",
        exampleInput: "h = HeavyCruiser(weapons=10, capacity=500)",
        exampleOutput: "All classes initialize successfully without repeating.",
        hints: ["Every class `__init__` must accept `**kwargs` and pass them up with `super().__init__(**kwargs)`.", "This is the only safe way to use cooperative multiple inheritance in Python."],
        advancedChallenge: "Level Up: Write a custom metaclass that strictly forbids multiple inheritance.",
        advancedHints: ["In the metaclass `__new__`, check if `len(bases) > 1` and raise a TypeError."]
      }
    ]
  },
  {
    theme: "Mystery / Detective / Weird Theme",
    questions: [
      {
        id: 41,
        title: "The Enigma Cipher Reconstruction",
        summary: "Build an Object-Oriented Enigma Machine.",
        description: "Write a fully functional Enigma machine simulator. You need classes for `Rotor`, `Reflector`, and `Plugboard`. Implement the electrical signal path: keyboard -> plugboard -> rotors -> reflector -> rotors (reversed) -> plugboard. Rotors must 'step' automatically after each key press.",
        exampleInput: "machine.type_string('HELLO')",
        exampleOutput: "Ciphertext (e.g., 'XJQRM')",
        hints: ["Map the alphabet to numbers 0-25 for easier modular arithmetic.", "A Rotor has a forward mapping array, a reverse mapping array, and an offset that increments."],
        advancedChallenge: "Level Up: Write a cracking algorithm to find the rotor settings via brute force given a known plaintext 'crib'.",
        advancedHints: ["Iterate through all 26x26x26 starting positions and check if the output matches the crib."]
      },
      {
        id: 42,
        title: "Digital Forensics (Steganography)",
        summary: "Hide and extract messages in the Least Significant Bits of an image.",
        description: "Write a script that takes a 2D numpy array representing a grayscale image. Encode a secret binary string into the Least Significant Bit (LSB) of each pixel's integer value. Then write the extraction function to recover the binary string until a null terminator `00000000` is reached.",
        exampleInput: "image = np.array([[255, 254], [128, 129]]), msg = '101'",
        exampleOutput: "Extracted message: '101'",
        hints: ["To clear the LSB: `pixel & ~1`. To set it: `pixel | bit`.", "Flatten the array, apply the bits, then reshape it back."],
        advancedChallenge: "Level Up: Use AES encryption on the message before hiding it in the image.",
        advancedHints: ["Use the `cryptography` library to encrypt the text, then convert the encrypted bytes to a binary string."]
      },
      {
        id: 43,
        title: "Murder Mystery Knowledge Graph",
        summary: "Graph databases and complex querying in memory.",
        description: "Model a murder mystery using a Knowledge Graph. Implement a `Node` and `Edge` system. Parse evidence like 'Alice hates Bob', 'Bob owes Charlie'. Write a query function `find_paths(A, B, max_depth)` that finds all relationship chains linking the victim to a suspect up to 3 degrees of separation.",
        exampleInput: "find_paths('Victim', 'SuspectX', 3)",
        exampleOutput: "[['Victim', 'owed_by', 'Bob', 'married_to', 'SuspectX']]",
        hints: ["Use Depth First Search (DFS) keeping track of the path of nodes and edges.", "Prevent infinite loops by keeping a `visited` set."],
        advancedChallenge: "Level Up: Calculate PageRank on the suspects to find the most 'central' figure in the conspiracy.",
        advancedHints: ["Simulate a random surfer or iteratively apply the PageRank matrix formula until convergence."]
      },
      {
        id: 44,
        title: "Alibi Consistency Checker (SAT Solver)",
        summary: "Solve a boolean satisfiability problem to find the liar.",
        description: "Suspects give conflicting alibis: 'If A is innocent, B is guilty', 'A and C cannot both be innocent'. Formulate these statements as boolean logic formulas. Write a simple SAT solver (using backtracking) to find which assignment of True/False (Innocent/Guilty) satisfies all statements.",
        exampleInput: "exprs = [Or(Not(A), B), Not(And(A, C))]",
        exampleOutput: "Assignment: {A: True, B: True, C: False}",
        hints: ["Evaluate the expressions recursively.", "Assign a variable, simplify the formulas, and recurse. If you hit a contradiction, backtrack."],
        advancedChallenge: "Level Up: Use a 3rd party library like `z3-solver` to solve it.",
        advancedHints: ["Z3 is an SMT solver. You can define boolean variables and simply call `solver.check()`."]
      },
      {
        id: 45,
        title: "The Ghost's Regex Sandbox",
        summary: "Exploit catastrophic backtracking.",
        description: "A ghost left a broken regex puzzle. Write a regular expression that is specifically designed to cause Catastrophic Backtracking on a long string of repeating characters. Then, rewrite it to be optimal. Demonstrate the execution time difference using the `timeit` module.",
        exampleInput: "regex = '^(a+)+$', text = 'aaaaaaaaaaaaaaaaaaaaaX'",
        exampleOutput: "Takes 10 seconds. Fixed regex: '^a+$', takes 0.001 seconds.",
        hints: ["Nested quantifiers like `(a+)+` or `(a|a)+` force the regex engine to explore exponentially many paths when failing to match the end of the string."],
        advancedChallenge: "Level Up: Write a Python script to detect nested quantifiers in a given regex string.",
        advancedHints: ["You'll have to parse the regex syntax tree, looking for `+` or `*` applied to a group `(...)` that also ends with `+` or `*`."]
      },
      {
        id: 46,
        title: "Anomaly Detection with Isolation Forests",
        summary: "Find the weird data points using Machine Learning.",
        description: "You have a dataset of 10,000 normal bank transactions and 5 fraudulent ones (represented as numpy arrays of features). Without using labels, use `sklearn.ensemble.IsolationForest` to train an unsupervised anomaly detection model. Predict and output the indices of the 5 most anomalous transactions.",
        exampleInput: "X = np.random.randn(10000, 5); X[0] = [100, 100, 100...]",
        exampleOutput: "Indices of the anomalies.",
        hints: ["Fit the IsolationForest on `X`.", "Use `.decision_function(X)` to get anomaly scores. The lowest scores are the most anomalous."],
        advancedChallenge: "Level Up: Implement an Isolation Tree from scratch.",
        advancedHints: ["Recursively pick a random feature and a random split value until the data point is isolated. The path length determines the anomaly score."]
      },
      {
        id: 47,
        title: "Monkey Patching the Crime Scene",
        summary: "Dynamically modify imported modules at runtime.",
        description: "A third-party module `vault.py` has a function `check_password(pwd)` that always returns False. Write a script that imports `vault` and uses 'Monkey Patching' to dynamically replace `check_password` with a lambda that always returns True, allowing the detective to break in.",
        exampleInput: "import vault; # your code here; vault.check_password('wrong')",
        exampleOutput: "Returns True",
        hints: ["In Python, modules are just objects. You can reassign their attributes: `vault.check_password = lambda p: True`."],
        advancedChallenge: "Level Up: Intercept calls to the builtin `print()` function globally across all modules.",
        advancedHints: ["Reassign `builtins.print` to your custom function. Be sure to save a reference to the original `print` first!"]
      },
      {
        id: 48,
        title: "The Forger's Quine",
        summary: "Write a program that prints its own source code.",
        description: "A Quine is a program that takes no input and produces a copy of its own source code as its only output. Write a Python Quine. You cannot use file I/O operations (like `open(__file__)`).",
        exampleInput: "(Run the script)",
        exampleOutput: "(Exact replica of the script's source code)",
        hints: ["Assign a string representing the code to a variable `s`, then print `s` formatted with `s` itself.", "Look up standard Python quines. `s = 's = %r\\nprint(s %% s)'` is a good start."],
        advancedChallenge: "Level Up: Write a Quine that prints the source code of its *next* iteration, cycling through 3 different program states.",
        advancedHints: ["The string must contain the logic for all 3 states, and conditionally print the string formatted for the next state."]
      },
      {
        id: 49,
        title: "Cryptographic Hash Collision",
        summary: "Understand hash weaknesses by finding a partial collision.",
        description: "Implement a weak 16-bit hash function (e.g., sum of characters modulo 65536). Write a brute-force script that generates a different string that produces the exact same hash as the word 'MURDER'.",
        exampleInput: "target_hash = weak_hash('MURDER')",
        exampleOutput: "'ALIBI' (or some other string) -> hashes to the same value.",
        hints: ["Generate random strings using `itertools.product` or `random.choices` and hash them until you find a match.", "16 bits is only 65,536 possibilities, so it will take milliseconds."],
        advancedChallenge: "Level Up: Perform a Length Extension Attack on a simulated vulnerable hash function.",
        advancedHints: ["Research how MD5 length extension attacks work by initializing the hashing state with the target hash."]
      },
      {
        id: 50,
        title: "Bytecode Disassembly Analysis",
        summary: "Analyze Python bytecode to find a hidden secret.",
        description: "You are given a compiled Python function object (e.g., `mystery_func`). You don't have the source code. Use the `dis` module to disassemble the bytecode, read the opcodes, and figure out the hardcoded secret password that the function is comparing against.",
        exampleInput: "dis.dis(mystery_func)",
        exampleOutput: "LOAD_CONST 1 ('secret_password'); COMPARE_OP 2 (==)",
        hints: ["Import `dis`.", "Look for `LOAD_CONST` instructions immediately preceding `COMPARE_OP` instructions."],
        advancedChallenge: "Level Up: Dynamically construct a new code object using the `types.CodeType` constructor and execute it.",
        advancedHints: ["This is extremely advanced. You must provide argcount, stacksize, flags, raw bytecode string, constants tuple, names tuple, etc."]
      }
    ]
  }
];
