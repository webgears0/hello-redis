import { createClient } from 'redis';

const client = createClient();

export async function load() {
  client.on('error', err => console.log('Redis Client Error', err));
  
  await client.connect();
}
