const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-full py-7">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <img src="/Vercel-Primary.svg" className="h-7 hidden md:block" />
        <p className="text-gray-400 font-bold text-xs md:text-sm">
          &#169; Copyright Hodl {new Date().getFullYear()}, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
