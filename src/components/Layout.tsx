import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />
      <main className={isHome ? "" : "pt-[6.5rem]"}>{children}</main>
    </>
  );
};

export default Layout;
