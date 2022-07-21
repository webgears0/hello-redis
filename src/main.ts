import * as rd from './loaders/redis.js';
import * as server from './loaders/server.js';

// Start redis
await rd.load();

// Start the KOA server
await server.load();