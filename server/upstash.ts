
import { auth, zscore, zincrby } from '@upstash/redis';
import config from '#config';
auth(config.UPSTASH_REDIS_REST_URL, config.UPSTASH_REDIS_REST_TOKEN);

export const incrementCount = (urlPartial: string) => {
    return zincrby('myPageCounts', 1, urlPartial)
}

export const getPageCount = (urlPartial: string) => {
    return zscore('myPageCounts', urlPartial)
}