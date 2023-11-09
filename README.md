# Developer test
This is a homework assignment for developer recruitment candidates. The purpose of this test is to provide a fair point of comparison between candidates and help us assess the candidate's skills based on an assignment that we are familiar with. The technologies are chosen to be similar to what are used at Komu and the task is something that we had to solve earlier ourselves.

## Criteria
Please pay attention on the following criteria when completing the assignment:
* Correctness: Your solution should do exactly what is specified.
* Quality: Your code should follow good practices and demonstrate your craftsmanship.

## Repository
The repository has been prepared to give you a starting point. Just run `npm install` and `npm test` to run the tests. `src` directory is all yours! Implement your solution and relevant tests there. Split your code to several files as you feel appropriate. If you need to add any dependencies or tweak TypeScript configuration, feel free to do so.

However, provide a single endpoint to your solution, as the default export from `src/generateSlots.ts`

## ChatGPT
We won't prevent you from using AI assistance, but please document how and to what extent you used it. Using tools efficiently is a skill, but so is problem-solving and we want to understand what we are assessing.

## Task
Some time ago, we needed to implement a time booking feature in our application. The application received minimal data from the back-end and needed to build a UI that shows times available for booking. For that need, it needed to generate the available slots in UI-friendly format.

Your task is to do the same: to develop an algorithm that generates a list of available time slots based on availability data. You can find the format of the availability data and explanations of each field in `src/types.ts`. The expected return type of the algorithm is also given there. 

For instance, consider a facility available on weekends at 18-20. You can book it no longer that 7 days ahead and it's Dec 12th 2023 now. The returned data could be something like this (depending on other parameters):

```JSON
{
    "2023-12-16": {
        "60": [{
            "from": "DateTime(2023-12-16T18:00:00.000Z)",
            "to": "DateTime(2023-12-16T19:00:00.000Z)"
        }, {
            "from": "DateTime(2023-12-16T19:00:00.000Z)",
            "to": "DateTime(2023-12-16T20:00:00.000Z)"
        }]
    },
    "2023-12-17": {
        "60": [{
            "from": "DateTime(2023-12-17T18:00:00.000Z)",
            "to": "DateTime(2023-12-17T19:00:00.000Z)"
        }, {
            "from": "DateTime(2023-12-17T19:00:00.000Z)",
            "to": "DateTime(2023-12-17T20:00:00.000Z)"
        }]
    }
}
```

If something is unclear, try to think in real life context. What are the likely constraints and desired behavior if someone wants to make a single booking to a laundry room or sauna? Feel free to send us a message if the assignment is still unclear.

Use Luxon for date manipulation. It is included in the package.json.
