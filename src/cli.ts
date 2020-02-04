#!/usr/bin/env node

import { rateScores } from './rate-scores';

const [,, scores] = process.argv;

if (!scores) throw Error('No scores provided!');

rateScores(scores);
