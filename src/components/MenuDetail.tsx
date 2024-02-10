import { GetMenuGachaItem } from "../types/menu";

export const MenuDetail: React.FC<{
  menu: GetMenuGachaItem;
  index: number;
}> = ({ menu, index }) => {
  return (
    <div key={index} className="mt-5 mb-5">
      <div>{menu.name}</div>
      <div>価格: {menu.price}円</div>
      <div>カテゴリ: {menu.category}</div>
      <div>{menu.mealTimeType}</div>
    </div>
  );
};
