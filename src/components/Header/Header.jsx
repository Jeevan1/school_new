import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
import SuggestionForm from "../Form/SuggestionForm";
import { useState } from "react";

const Header = ({ data }) => {
  const [showSuggestion, setShowSuggestion] = useState(false);

  const toggleSuggestion = () => {
    setShowSuggestion(!showSuggestion);
  };

  return (
    <header className="header">
      <Topbar onClick={toggleSuggestion} />
      <Navbar data={data} />
      <SuggestionForm state={showSuggestion} onClick={toggleSuggestion} />
    </header>
  );
};

export default Header;
