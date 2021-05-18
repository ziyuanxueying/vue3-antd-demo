import fetch from 'cross-fetch';
import { message } from 'antd';

const request = (url: string, config: any) => {
  return fetch(url, config)
    .then((res) => {
      return res.json();
    })
    .then((resJson: any) => {
      if (resJson.status && 200 !== resJson.status) {
        throw Error(resJson.message);
      }
      return resJson;
    })
    .catch((error: Error) => {
      // 公共错误处理
      message.error(error.message);
    });
};

// GET请求
export const get = (url: string) => {
  return request(url, { method: 'GET' });
};

// POST请求
export const post = (url: string, data: any, config: any = {}) => {
  return request(url, {
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    ...config,
  });
};
