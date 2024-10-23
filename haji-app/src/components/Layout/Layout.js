import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import WhatsApp from "./WhatsApp";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />

      <main style={{ minHeight: "70vh" }}>{children}</main>

      <WhatsApp />

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Haji Jewellers - Shop Now",
  description:
    "Haji Jewellers is your go-to destination for exquisite and timeless jewelry pieces. We offer a wide range of high-quality gold, Turquoise, Emerald and gemstone jewelry, meticulously crafted to suit every occasion. Whether you’re looking for bridal sets, elegant rings, necklaces, or everyday wear, Haji Jewellers has something special for everyone. Explore our exclusive collections, featuring both traditional and contemporary designs that reflect craftsmanship and beauty. Shop online with confidence, and enjoy a seamless, secure shopping experience with fast delivery. Adorn yourself or your loved ones with luxurious pieces from Haji Jewellers, where elegance meets excellence.",
  keywords:
    "Haji Jewellers, buy gold jewelry online, natural stones jewelry shop, traditional bridal jewelry, Pakistani jewelry store, gold rings, gold necklaces, gemstone jewelry collection, custom jewelry designs, affordable luxury jewelry, bridal jewelry sets, online jewelry shopping Pakistan, exclusive jewelry collection, handmade jewelry designs, high-quality jewelry, jewelry for weddings, elegant earrings and bracelets, contemporary jewelry designs",
  author: "Shaista",
};

export default Layout;
