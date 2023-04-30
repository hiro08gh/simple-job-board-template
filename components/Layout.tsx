import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";

type Props = {
  isHeroImage?: boolean;
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ isHeroImage = false, children }) => {
  return (
    <div>
      <Header />
      {isHeroImage && <Hero />}
      {children}
      <Footer />
    </div>
  );
};
