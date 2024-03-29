export const Header: React.FC = () => {
  return (
    <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="/" className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-xl ml-3">ハンバーガーメニューガチャ</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="/" className="mr-5 hover:text-blue-400 duration-300">
            遊び方
          </a>
          <a href="/login" className="mr-5 hover:text-blue-400 duration-300">
            ログイン
          </a>
        </nav>
      </div>
    </header>
  );
};
