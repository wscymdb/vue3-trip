/**
 * 在vite中，获取资源的url
 * @params {String}
 */

export const getAssetsUrl = (url) => {
  return new URL(`../assets/images/${url}`, import.meta.url).href
}
