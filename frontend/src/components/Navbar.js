import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
export default function Navbar() {
  return (
    <NavBarContainer>
      <NavBarLink to="/">Home</NavBarLink>
      <NavBarLink to="/add-question">Add Question</NavBarLink>
    </NavBarContainer>
  )
}

const NavBarContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
`
const NavBarLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`
