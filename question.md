Here are **50 intermediate Python practice questions** with fun themes. I made them more story-based and less like the usual “reverse a string” type.

---

## 1) Harry Potter Theme

1. **Owl Post Sorting System**
   You receive a list of letters, each with a house name and urgency level. Write a program to group letters by house and sort each group by urgency.

2. **Wand Compatibility Checker**
   Given wizard profiles and wand properties, write a function that scores how compatible a wand is for each wizard.

3. **Marauder’s Map Tracker**
   A map log records student movements as `(name, room, time)`. Find which student changed rooms the most in one day.

4. **Potion Inventory Decoder**
   Potion ingredients are stored in a dictionary, but some quantities are strings like `"3 bottles"` or `"2.5 kg"`. Extract the numeric values and total them.

5. **Horcrux Hunt Planner**
   Given a graph of magical locations and travel costs, find all possible routes from Hogwarts to a target location under a maximum energy limit.

6. **Quidditch Score Analyzer**
   Simulate a Quidditch scoreboard where goals add 10 points and catching the Snitch adds 150 and ends the game. Determine winners from event logs.

7. **Spell Cooldown Manager**
   Each spell has a cooldown time. Given a sequence of spells cast over time, determine whether each cast is valid.

8. **Patronus Frequency Counter**
   Given a long text of wizard records, count how often each Patronus appears, ignoring case and punctuation.

9. **House Cup Ranking**
   Students gain and lose points over time. Build a running leaderboard that updates after every event.

10. **Password to the Common Room**
    Create a system where the password changes daily based on a formula using date, previous password length, and house name.

---

## 2) Airplanes / Aviation Theme

11. **Flight Delay Chain Reaction**
    One delayed flight causes later flights using the same plane to delay too. Given schedules, compute final departure times.

12. **Runway Allocation**
    Several planes need a runway at overlapping times. Find the minimum number of runways required.

13. **Seat Upgrade Engine**
    Passengers have ticket classes, loyalty points, and special requests. Assign upgrades fairly when only a few business seats are open.

14. **Black Box Event Parser**
    Parse raw event logs and count how many times each warning appears before the final system failure.

15. **Fuel Stop Optimizer**
    A plane can travel only a limited distance. Given airport positions, find the minimum number of stops needed.

16. **Baggage Belt Matching**
    Match bags to passengers using bag tags, but some tags are duplicated or missing. Identify mismatches and unclaimed baggage.

17. **Air Traffic Queue Simulation**
    Planes request landing with different urgency levels. Simulate which plane lands next using priority rules.

18. **Weather Diversion Detector**
    Flights have planned routes and actual routes. Find which flights were diverted and by how much distance.

19. **Frequent Flyer Milestone Tracker**
    Given passenger trip histories, detect when they cross reward milestones and on which flight it happened.

20. **Cabin Pressure Alert Monitor**
    Sensor readings come in every second. Detect abnormal patterns like rapid drops or repeating fluctuations.

---

## 3) Fantasy Kingdom Theme

21. **Dragon Stable Manager**
    Each dragon eats different food amounts based on age and type. Build a weekly food planner.

22. **Castle Room Booking**
    Knights, wizards, and guests request rooms with different priorities. Assign rooms while avoiding double-booking.

23. **Treasure Chest Merger**
    Two adventurers combine loot inventories. Merge them so duplicate items have summed quantities.

24. **Kingdom Tax Collector**
    Villages pay taxes in gold, grain, or livestock. Convert everything to a common value and rank villages by contribution.

25. **Magic Portal Network**
    Portals connect cities, but some only work at certain hours. Find which destinations are reachable at a given time.

26. **Sword Durability Tracker**
    Weapons lose durability after each battle. Remove broken weapons automatically and report the strongest remaining one.

27. **Royal Messenger Route**
    A messenger must deliver letters to villages in order of urgency while minimizing travel distance.

28. **Dungeon Trap Simulator**
    A player moves through a 2D dungeon grid with traps, treasures, and walls. Simulate the final state after a sequence of moves.

29. **Wizard Duel Replay**
    Two wizards cast spells with effects like damage, shield, poison, and heal. Replay the duel from action logs and determine the winner.

30. **Festival Attendance Analyzer**
    Villagers sign in and out of a festival. Find peak attendance time.

---

## 4) Space / Sci-Fi Theme

31. **Spaceship Oxygen Forecast**
    Given crew count, leak rate, and refill events, predict when oxygen runs out.

32. **Alien Language Translator**
    Build a dictionary-based translator where some alien words map to multiple possible English words. Return all possible translations for a sentence.

33. **Mars Rover Path Log**
    A rover receives movement instructions on a grid with obstacles. Report the final position and any collisions.

34. **Planet Trade Network**
    Planets trade resources. Detect cycles where a resource can be exchanged around a loop for profit.

35. **Robot Repair Queue**
    Damaged robots enter a repair bay with different severity levels and part availability. Simulate which robots get repaired first.

36. **Asteroid Collision Tracker**
    Asteroids move in opposite directions with different sizes. Simulate which survive after collisions.

37. **Starship Crew Shift Planner**
    Schedule crew shifts so every critical role is covered without any person working too many consecutive hours.

38. **Satellite Signal Cleaner**
    Given noisy binary signal chunks, rebuild the most likely original message using majority vote across repeats.

39. **Cryo-Chamber Wake Order**
    Passengers wake up based on destination arrival time, medical status, and VIP rank. Sort the wake-up order.

40. **Galactic Passport Validator**
    Validate futuristic passports with rules on species code, interplanetary visa, and date format.

---

## 5) Mystery / Detective / Weird Theme

41. **Haunted Mansion Room Log**
    Guests enter and leave rooms, but one event is missing. Determine which guest location history is impossible.

42. **Vampire Guest List**
    Guests can only enter after sunset and must avoid garlic rooms. Validate whether each movement in the log is legal.

43. **Time Traveler Diary Merger**
    A traveler writes diary entries out of order from different timelines. Sort them by actual timeline using timestamp rules.

44. **Ghost Message Decoder**
    A ghost writes repeated letters like `"heeellooo"`. Compress repeated characters and compare messages.

45. **Museum Heist Detector**
    Motion sensors in rooms trigger over time. Find the most likely path taken by the thief.

46. **Secret Society Membership Audit**
    Members recruit other members. Given a chain of invitations, find who is at the top of each recruitment tree.

47. **Zombie Outbreak Simulation**
    In a grid city, infected people spread to adjacent cells every hour. Compute how long it takes to infect the whole city.

48. **Detective Evidence Matcher**
    Clues, suspects, and alibis are stored in dictionaries and lists. Find suspects whose alibis conflict with evidence times.

49. **Train Murder Seating Chart**
    Passengers changed seats several times. Reconstruct who was sitting nearest the victim at the time of the murder.

50. **Cursed Auction Bidding System**
    Bids come in from magical artifacts, but cursed items reverse the winner rule: lowest unique bid wins instead of highest. Determine winners for mixed auction types.

---

## Extra challenge mode

For each question, try solving it in **3 versions**:

1. basic version
2. clean function-based version
3. advanced version using `dict`, `set`, `sorted`, `lambda`, `collections`, or classes

Here are some Python topics these questions naturally train:

* dictionaries and nested data
* lists of tuples
* sorting with custom keys
* parsing strings
* sets
* simulation
* grids
* graphs
* queues / priority queues
* classes and object-oriented design

I can also turn these into:

* **50 questions with answers hidden**
* **50 questions ordered from easier to harder**
* **a 7-day practice sheet PDF-style format**