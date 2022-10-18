# Prerequisites
* npm

Run `npm install` in the project root.

# Task
Your task is to implement a function that returns the names of players sorted by their number of wins. Use `playerScores.js` to get the player scores. It returns an array of match results, where each element contains the scores of two players. The higher score wins and there can be ties. For example, the following return value means that Alice has won two games: 
```
[{
    'alice': 10, 
    'bob': 6
}, {
    'charlie': 4, 
    'alice': 10
}]
```
If two or more players have won the same number of games, you can return them in any order. In the above example, your function should return 
```
['alice', 'bob', 'charlie']  // or ['alice', 'charlie', 'bob]
```

Export your solution as the default export of `index.js`. Do not edit `playerScores.js`. For example, someone could use your solution like this:
```
import playersByScore from 'path/to/thisfolder/index.js'

async function printLeaderBoard() {
    console.log(await playersByScore()); // Prints ['alice', 'bob', 'charlie']
}

printLeaderBoard();
```

# Tests
Mocha package will be installed when you run `npm install`. Implement comprehensive unit tests that cover as many different cases as possible. See https://mochajs.org/#getting-started for a simple example test. Write your tests in `test.js` and run them with `npm test`.

# Emphasis
Prefer `async/await` over `.then()` syntax when dealing with promises. Style-wise you can choose whatever you prefer (single or double quotation marks, semi-colon at the end of lines, indentations etc.) but be consistent.

Pay extra attention on the quality of your solution. We want to see that you can write code that follows good practices, is consistent, doesn't contain whitespace when it doesn't help readability, is cleaned of `console.log`s etc.
