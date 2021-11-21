
import Redis from 'ioredis';
import config from '#config';

const client = new Redis(config.UPSTASH_REDIS_CONN)

export const incrementCount = (urlPartial: string) => {
    return client.zincrby('myPageCounts', 1, urlPartial)
}

export const getPageCount = (urlPartial: string) => {
    return client.zscore('myPageCounts', urlPartial)
}