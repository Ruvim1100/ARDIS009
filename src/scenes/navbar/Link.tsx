import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navigation.css";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (pageName: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  console.log("selectedPage в Navbar:", selectedPage);
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
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
