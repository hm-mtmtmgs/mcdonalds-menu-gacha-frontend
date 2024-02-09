import { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      <div className="text-center w-72 p-5 border-2 border-solid border-yellow-400 bg-white rounded-xl m-auto mt-2.5">
        <button className="bg-yellow-400 border-none pt-2.5 pb-2.5 pr-5 pl-5 rounded-md cursor-pointer">
          ガチャスタート！
        </button>
      </div>
    </>
  );
};
