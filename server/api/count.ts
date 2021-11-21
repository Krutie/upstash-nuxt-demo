import type { IncomingMessage, ServerResponse } from 'http'
import { useQuery } from 'h3'
import { getRedisKey } from '../utils';

import { myZscore } from '../upstash';
// import { myZscore } from '../redis';

import { auth } from '@upstash/redis';
import config from '#config';

export default async (req: IncomingMessage, res: ServerResponse) => {

   auth(config.UPSTASH_REDIS_REST_URL, config.UPSTASH_REDIS_REST_TOKEN);
   
   let query = await useQuery(req)
   
   const redisKey = getRedisKey(query.path);
   
   const count = await myZscore(redisKey);
   
   return { count }
}