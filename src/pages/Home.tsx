import { FC, useState } from "react";
import { getMenuGacha } from "../api/menu";
import { GetMenuGachaRequest, GetMenuGachaResponse } from "../types/menu";

export const Home: FC = () => {
  const initialMenus: GetMenuGachaResponse = {
    items: [],
  };
  const [menus, setMenus] = useState<GetMenuGachaResponse>(initialMenus);
  const handleClick = async () => {
    const query: GetMenuGachaRequest = { budget: 1000 };
    const menus = await getMenuGacha(query);
    setMenus(menus);
  };

  return (
    <>
      <div className="text-center w-72 p-5 border-2 border-solid border-yellow-400 bg-white rounded-xl m-auto mt-2.5">
        <button
          className="bg-yellow-400 border-none pt-2.5 pb-2.5 pr-5 pl-5 rounded-md cursor-pointer"
          onClick={handleClick}
        >
          ガチャスタート！
        </button>
      </div>
      <div className="text-center">
        <div className="mt-7 mb-7">
          <div>予算: {menus.budget}</div>
          <div>合計金額: {menus.totalPrice}</div>
        </div>
        {menus.items.map((item, index) => (
          <div key={index} className="mt-5 mb-5">
            <div>{item.name}</div>
            <div>価格: {item.price}円</div>
            <div>カテゴリ: {item.category}</div>
            <div>{item.mealTimeType}</div>
          </div>
        ))}
      </div>
    </>
  );
};
