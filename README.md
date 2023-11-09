# Developer test
This is a homework assignment for developer recruitment candidates. The purpose of this test is to provide a fair point of comparison between candidates and to help us assess each candidate's skills based on an assignment with which we are familiar. The chosen technologies are similar to those used at Komu, and the task is one we have previously solved ourselves.

## Criteria
When completing the assignment, please pay attention to the following criteria:
* Correctness: Your solution should do exactly what is specified.
* Quality: Your code should follow good practices and demonstrate your craftsmanship.

## Repository
The repository has been prepared to give you a starting point. Run `npm install` and `npm test` to execute the tests. The `src` directory is all yours! Implement your solution and relevant tests there. Split your code into several files as you feel appropriate. Feel free to add any dependencies or tweak the TypeScript configuration if needed.

However, provide a single endpoint for your solution, as the default export from `src/generateSlots.ts`.

## ChatGPT
While we won't prevent you from using AI assistance, please document how and to what extent you used it. Efficiently using tools is a skill, but so is problem-solving, and we want to understand exactly what we are assessing.

## Task
Some time ago, we had to implement a sauna and laundry booking feature in our application. The application received minimal data from the back-end and required a UI that displayed available booking times. The challenge was to generate these available time slots in a user-friendly format.

Your task is to develop an algorithm that generates a list of available time slots based on availability data. You can find the format of the availability data and explanations of each field in `src/types.ts`. The expected return type of the algorithm is also provided there.

For example, consider a facility available on weekends from 18:00 to 20:00. You can book it no more than 7 days in advance, and today is December 12th, 2023. The returned data could be something like this (depending on other parameters):

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

If something is unclear, try to think in the context of real-life scenarios. What are the likely constraints and desired behavior if someone wants to make a single booking for a laundry room or sauna? If the assignment is still unclear, feel free to send us a message.

Use Luxon for date manipulation. It is included in the package.json.

Here's a screenshot of how the data is used in the application, to help you orientate (you can ignore the Facility selection, as its related data is omitted in this task):

<img width=400 src="./docs/bookingScreenshot.png" />