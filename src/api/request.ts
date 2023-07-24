interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
}

const token = window.localStorage.getItem('token')

export const sendRequest = async (url: string, options: FetchOptions = {}): Promise<Response> => {
  const response = await fetch(url, {
    method: options.method || 'GET',
    headers: {
      "Content-Type": "application/json",
      "token": `Bearer ${token}`
    },
    body: options.body || undefined,
    mode: options.mode || 'cors',
    credentials: options.credentials || 'same-origin',
    cache: options.cache || 'default',
    redirect: options.redirect || 'follow',
    referrer: options.referrer || '',
    referrerPolicy: options.referrerPolicy || 'no-referrer',
    integrity: options.integrity || ''
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response;
}
