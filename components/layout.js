import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between w-screen min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {router.pathname !== "/Sign-in" &&
          router.pathname !== "/Forgot-password" &&
          router.pathname !== "/Sign-up" &&
          !router.pathname.includes("App") && <Header />}

        <div className="flex flex-row">
          {router.pathname.includes("App") && <Nav />}
          {children}
        </div>
      </div>
      {/* Aligned to the bottom */}
      {router.pathname !== "/Sign-in" &&
        router.pathname !== "/Forgot-password" &&
        router.pathname !== "/Sign-up" &&
        router.pathname !== "/App/Dashboard" && <Footer />}
    </div>
  );
};

export default Layout;
