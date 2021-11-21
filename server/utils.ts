/** 
// convert request URL into a unique key 
// use this key for redis to store the count against that page
*/
export const getRedisKey = (url: string) => {
    const reqURL = url?.replace("/", ".");
    const redisKey = reqURL === "." ? "page.home" : `page${reqURL}`;
    return redisKey;
}