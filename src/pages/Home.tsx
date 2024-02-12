import { useState } from "react";
import { getMenuGacha } from "../api/menu";
import { MenuDetail } from "../components/MenuDetail";
import { GetMenuGachaRequest, GetMenuGachaResponse } from "../types/menu";

export const Home: React.FC = () => {
  const initialMenus: GetMenuGachaResponse = {
    items: [],
  };
  const [menus, setMenus] = useState<GetMenuGachaResponse>(initialMenus);
  const [budget, setBudget] = useState<number>(1000);

  const handleClick = async () => {
    const query: GetMenuGachaRequest = { budget: budget };
    const menus = await getMenuGacha(query);
    setMenus(menus);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(parseInt(e.target.value));
  };

  return (
    <>
      <section>
        <div className="container mx-auto py-10 px-5 items-center">
          <div className="text-center w-72 p-5 border-2 border-solid border-yellow-400 bg-white rounded-xl m-auto mt-2.5">
            <button
              className="bg-yellow-400 pt-2.5 pb-2.5 pr-5 pl-5 rounded text-lg hover:bg-blue-400 duration-300"
              onClick={handleClick}
            >
              ガチャスタート！
            </button>
          </div>
          <div className="text-center">
            <div className="my-7">
              予算:
              <input
                className="text-center border-2 border-gray-500 mx-3"
                type="number"
                value={budget}
                onChange={handleChange}
              />
              円<div className="my-5">合計金額: {menus.totalPrice}円</div>
            </div>
            {menus.items.map((item, index) => (
              <MenuDetail menu={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
