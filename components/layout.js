import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between w-screen min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1 w-screen">
        {router.pathname !== "/sign-in" &&
          router.pathname !== "/forgot-password" &&
          router.pathname !== "/sign-up" &&
          !router.pathname.includes("app") && <Header />}

        <div className="flex flex-row w-full">
          {router.pathname.includes("app") && <Nav />}
          {children}
        </div>
      </div>
      {/* Aligned to the bottom */}
      {router.pathname !== "/sign-in" &&
        router.pathname !== "/forgot-password" &&
        router.pathname !== "/sign-up" &&
        !router.pathname.includes("app") && <Footer />}
    </div>
  );
};

export default Layout;
