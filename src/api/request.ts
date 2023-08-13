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

// export const baseURL = process.env.NODE_ENV === 'production' ? 'http://65.49.195.65:4000/' : 'http://localhost:4000/'
export const baseURL = 'http://65.49.195.65:4000/'

const token = window.localStorage.getItem('token')

export const sendRequest = async (url: string, options: FetchOptions = {}): Promise<Response> => {
  const response = await fetch(baseURL+url, {
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
