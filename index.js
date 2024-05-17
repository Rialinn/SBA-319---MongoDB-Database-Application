import express from 'express';
import dotenv from 'dotenv';

// inits the dotenv package
dotenv.config();

// App port
const PORT = process.env.PORT || 4000;

// express app
const app = express();