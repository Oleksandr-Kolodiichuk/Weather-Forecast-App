import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fetch from "node-fetch";
import mongoose from "mongoose";
import pg from "pg";
const { Pool } = pg;
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file
const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});























app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})