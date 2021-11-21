
import { auth, zscore, zincrby } from '@upstash/redis';
import config from '#config';
auth(config.UPSTASH_REDIS_REST_URL, config.UPSTASH_REDIS_REST_TOKEN);

export const myZincrby = (urlPartial: string) => {
    return zincrby('myPageCounts', 1, urlPartial)
}

export const myZscore = (urlPartial: string) => {
    return zscore('myPageCounts', urlPartial)
}