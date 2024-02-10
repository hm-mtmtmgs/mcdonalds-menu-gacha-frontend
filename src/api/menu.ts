import { GetMenuGachaRequest, GetMenuGachaResponse } from "../types/menu";
import { GET } from "./config";

export const getMenuGacha = (query?: GetMenuGachaRequest) => {
  return GET<GetMenuGachaRequest, GetMenuGachaResponse>("/menu-gacha", query);
};
