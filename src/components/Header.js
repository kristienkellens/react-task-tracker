import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add new"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker default",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
