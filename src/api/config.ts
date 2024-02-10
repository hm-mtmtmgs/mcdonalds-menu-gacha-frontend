import axios, { AxiosRequestConfig } from "axios";

type fetchWrapProps<T> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  body?: T;
  query?: T;
};

const fetchWrap = async <T, U>({
  method,
  url,
  body,
  query,
}: fetchWrapProps<T>): Promise<U> => {
  const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BACKEND_URL,
    params: query || undefined,
  };
  try {
    const { data } =
      (method === "GET" && (await axios.get(url, config))) ||
      (method === "POST" && (await axios.post(url, body, config))) ||
      (method === "PUT" && (await axios.put(url, body, config))) ||
      (method === "DELETE" && (await axios.delete(url, config))) ||
      {};
    return data;
  } catch (e: any) {
    throw e;
  }
};

export const GET = <T = {}, U = any>(url: string, query?: T): Promise<U> => {
  return fetchWrap<T, U>({ method: "GET", url, query });
};

export const POST = <T = {}, U = any>(url: string, body?: T): Promise<U> => {
  return fetchWrap<T, U>({ method: "POST", url, body });
};

export const PUT = <T = {}, U = any>(url: string, body?: T): Promise<U> => {
  return fetchWrap<T, U>({ method: "PUT", url, body });
};

export const DELETE = <T = {}, U = any>(url: string, body?: T): Promise<U> => {
  return fetchWrap({ method: "DELETE", url, body });
};
