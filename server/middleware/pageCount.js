import { getRedisKey } from '../utils';

import { incrementCount } from '../upstash'; // uses @upstash/redis
// import { incrementCount } from '../redis'; // uses ioredis

export default async function (req, res, next) {
  
  const redisKey = getRedisKey(req.url);

  await incrementCount(redisKey);
  
  next();

}