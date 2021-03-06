import { rate, Rating } from 'ts-trueskill';
import csvParser from 'csv-parse';

export const rateScores = (scores: string) => csvParser(scores, {
    comment: '#',
    delimiter: '\t',
}, (err, rows: string[][]) => {
    const playersRatingsStore: { [name: string]: Rating[] } = {};

    const playerArrayToRatings = (players: string[]): Rating[][] => players.map(player => playersRatingsStore[player] || [new Rating()]);
    const storePlayerRatings = (players: string[], ratings: Rating[][]): void => {
        players.forEach((player, index) => {
            playersRatingsStore[player] = ratings[index];
        });
    };

    rows.forEach(playerPositions => {
        const positionsAsRatings = playerArrayToRatings(playerPositions);
        const ratings = rate([...positionsAsRatings]);
        storePlayerRatings(playerPositions, ratings);
    });

    const playerRatings: { name: string, rating: Rating[] }[] = Object.keys(playersRatingsStore).map(player => ({ name: player, rating: playersRatingsStore[player] }));
    const sortedPlayerRatings = playerRatings.sort((a, b) => a.rating[0].mu > b.rating[0].mu ? -1 : 1 );
    sortedPlayerRatings.forEach((player, index) => console.log(`[${index + 1}] ${player.name.padEnd(10)} ${player.rating.toString()}`));
});
