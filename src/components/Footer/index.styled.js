import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: ${({ bgColor, theme }) =>
    theme.colors[bgColor] || theme.colors.primary};
  color: #fff;
  padding: 1rem;
  text-align: center;

  .footer {
    .footer__title {
      margin-bottom: 1rem;
    }
  }
`;

export default StyledFooter;
