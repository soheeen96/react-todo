import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
import { FaToggleOn } from "react-icons/fa";

const HeaderWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: min(20px, 4vw);
`;

const Title = styled.h1`
  font-size: min(30px, 5vw);
  font-weight: 700;
  color: ${(props) => props.theme.titColor};
`;

const ToggleBtn = styled.button`
  display: block;
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
  transition: all 0.3s;
  svg {
    color: ${(props) => props.theme.accentColor};
  }
`;

function Header() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <HeaderWrap>
      <Title>To Dos</Title>
      <ToggleBtn onClick={toggleDarkAtom}>
        <FaToggleOn size="26" />
      </ToggleBtn>
    </HeaderWrap>
  );
}
export default Header;
