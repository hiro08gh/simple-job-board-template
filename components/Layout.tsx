import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroImage } from "./HeroImage";

type Props = {
  isHeroImage?: boolean;
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ isHeroImage = false, children }) => {
  return (
    <div>
      <Header />
      {isHeroImage && <HeroImage />}
      {children}
      <Footer />
    </div>
  );
};
