import { getRedisKey } from '../utils';
import { myZincrby } from '../upstash';
// import { myZincrby } from '../redis';

export default async function (req, res, next) {
  
  const redisKey = getRedisKey(req.url);

  await myZincrby(redisKey);
  
  next();

}