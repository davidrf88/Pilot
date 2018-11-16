import express from 'express';
import consign from 'consign';

const app = express();

consign()
.include('libs/configs.js')
.then('routes')
.include('libs/boot.js')
.into(app);