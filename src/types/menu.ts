export type GetMenuGachaRequest = {
  budget?: number;
};

export type GetMenuGachaResponse = {
  budget?: number;
  totalPrice?: number;
  items: GetMenuGachaItem[];
};

export type GetMenuGachaItem = {
  id?: number;
  createdAt?: string;
  name?: string;
  price?: number;
  category?: string;
  mealTimeType?: string;
};
