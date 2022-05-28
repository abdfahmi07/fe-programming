import StyledFooter from "./index.styled";

function Footer() {
  return (
    <StyledFooter bgColor="primary">
      <footer className="footer">
        <h2 className="footer__title">Movie App</h2>
        <p className="footer__author">Created by Dull</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
