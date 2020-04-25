import * as React from "react"
import execHttp from "./execHttp"

type TbApiState<RawBody> = {
  statusCode: number | null;
  body: RawBody | null;
};

type StatusCode = number;

type ReturnType<RawBody> = [boolean, StatusCode | null, RawBody | null];

export function useTbApi<RawBody>(request: any): ReturnType<RawBody> {
  const [response, setResponse] = React.useState<TbApiState<RawBody>>({body: null, statusCode: null});

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await execHttp(request)
      setResponse(response)
    };
    fetchData();
  }, []);

  const waiting = (response.statusCode == null || response.body == null);

  return [waiting, response.statusCode, response.body]
};
