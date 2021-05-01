import Header from "../components/header";
import Footer from "../components/footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between min-h-screen w-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {router.pathname !== "/Sign-in" &&
          router.pathname !== "/Forgot-password" && <Header />}
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      {router.pathname !== "/Sign-in" &&
        router.pathname !== "/Forgot-password" && <Footer />}
    </div>
  );
};

export default Layout;
