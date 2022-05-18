const express = require('express');
const path = require('path');
const { Pool } = require('pg/lib');
const { connectionString } = require('pg/lib/defaults');
const Port = process.env.PORT || 5000;
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.Databse_URL,
    ssl: {
        rejectUnauthorized: false
    }
});