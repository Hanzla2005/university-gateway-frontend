import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-[6.5rem]">{children}</main>
    </>
  );
};

export default Layout;
