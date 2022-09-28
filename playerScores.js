export default function getPlayerScores() {
    return new Promise((resolve) => {
        const players = [
            'alice',
            'bob',
            'charlie',
            'david',
            'eric',
            'fabiano',
            'george',
            'harry'
        ];
        const matches = [];

        const matchCount = Math.floor(Math.random() * 100);
        for (let i = 0; i < matchCount; i++) {
            const p1Name = players[Math.floor(Math.random() * players.length)];
            let p2Name;
            do {
                p2Name = players[Math.floor(Math.random() * players.length)];
            } while (p1Name == p2Name);

            const p1Score = Math.round(Math.random() * 10);
            const p2Score = Math.round(Math.random() * 10);
            matches.push({[p1Name]: p1Score, [p2Name]: p2Score});
        }
        const waitTime = Math.round(Math.random() * 2000);
        setTimeout(() => {
            return resolve(matches);
        }, waitTime);
    });
}