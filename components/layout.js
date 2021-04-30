import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen w-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        <Header />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
