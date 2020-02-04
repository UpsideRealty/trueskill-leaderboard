#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rate_scores_1 = require("./rate-scores");
var _a = process.argv, scores = _a[2];
if (!scores)
    throw Error('No scores provided!');
rate_scores_1.rateScores(scores);
