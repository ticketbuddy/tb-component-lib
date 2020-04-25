import {Request} from "tb-sdk"

export default async (request: Request<any>) => {
  const res = await fetch(request.path, {
    method: request.method,
    headers: {'Content-Type': 'application/json'},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: request.body ? JSON.stringify(request.body) : null
  });

  const json = await res.json();
  return {body: json, statusCode: res.status};
}
