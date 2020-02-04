"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_trueskill_1 = require("ts-trueskill");
var csv_parse_1 = __importDefault(require("csv-parse"));
exports.rateScores = function (scores) { return csv_parse_1.default(scores, {
    comment: '#',
    delimiter: '\t',
}, function (err, rows) {
    var playersRatingsStore = {};
    var playerArrayToRatings = function (players) { return players.map(function (player) { return playersRatingsStore[player] || [new ts_trueskill_1.Rating()]; }); };
    var storePlayerRatings = function (players, ratings) {
        players.forEach(function (player, index) {
            playersRatingsStore[player] = ratings[index];
        });
    };
    rows.forEach(function (playerPositions) {
        var positionsAsRatings = playerArrayToRatings(playerPositions);
        var ratings = ts_trueskill_1.rate(__spreadArrays(positionsAsRatings));
        storePlayerRatings(playerPositions, ratings);
    });
    var playerRatings = Object.keys(playersRatingsStore).map(function (player) { return ({ name: player, rating: playersRatingsStore[player] }); });
    var sortedPlayerRatings = playerRatings.sort(function (a, b) { return a.rating[0].mu > b.rating[0].mu ? -1 : 1; });
    sortedPlayerRatings.forEach(function (player, index) { return console.log("[" + (index + 1) + "] " + player.name.padEnd(10) + " " + player.rating.toString()); });
}); };
