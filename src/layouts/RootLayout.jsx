import Sidebar from "./sidebar";
import "../index.css";

const RootLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="max-w-full flex justify-center flex-1 pt-[120px] px-6 pb-[160px]">
      <div className="gradient"/>
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
