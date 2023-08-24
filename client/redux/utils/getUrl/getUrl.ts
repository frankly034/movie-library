interface GetURL {
  baseUrl: string;
  queryParams?: Record<string, string>;
  arrayParams?: Record<string, string[]>;
  url: string;
}

const getUrl = ({ arrayParams, baseUrl, queryParams, url }: GetURL) => {
  const urlObj = new URL(url, baseUrl);

  let urlParams = new URLSearchParams();

  if (queryParams && Object.keys(queryParams).length) {
    for (const key in queryParams) {
      queryParams[key] && urlParams.append(key, queryParams[key]);
    }
  }

  if (arrayParams && Object.keys(arrayParams).length) {
    for (const key in arrayParams) {
      for (let i = 0; i < arrayParams[key].length; i++) {
        arrayParams[key][i] && urlParams.append(key, arrayParams[key][i]);
      }
    }
  }

  urlObj.search = urlParams.toString();

  return urlObj.toString();
};

export default getUrl;
