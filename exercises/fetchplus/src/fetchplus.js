import { default as _fetch } from 'node-fetch';

/**
 * @type { {[k: string]: Promise<any> } }
 */
const fetchCache = {};

// Do not change this function signature or the tests will break
export default function fetchPlus(url, options, fetch = _fetch) {
  if (fetchCache[url]) {
    return fetchCache[url];
  } else {
    let cachedPromise = fetch(url, options).then(response => {
      return response.json();
    });
    fetchCache[url] = cachedPromise;
  }
}
