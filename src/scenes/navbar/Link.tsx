import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navigation.css";
type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (pageName: string) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  console.log("selectedPage в Navbar:", selectedPage);
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  const linkClass =
    selectedPage === lowerCasePage ? "selected-link" : "normal-link";
  return (
    <AnchorLink
      className={linkClass}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
