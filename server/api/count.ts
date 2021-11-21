import type { IncomingMessage, ServerResponse } from 'http'
import { useQuery } from 'h3'
import { getRedisKey } from '../utils';

import { getPageCount } from '../upstash'; // uses @upstash/redis
// import { getPageCount } from '../redis'; // uses ioredis

import { auth } from '@upstash/redis';
import config from '#config';

export default async (req: IncomingMessage, res: ServerResponse) => {

   auth(config.UPSTASH_REDIS_REST_URL, config.UPSTASH_REDIS_REST_TOKEN);
   
   let query = await useQuery(req)
   
   const redisKey = getRedisKey(query.path);
   
   const count = await getPageCount(redisKey);
   
   return { count }
}