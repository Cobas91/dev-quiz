import { HiAcademicCap } from 'react-icons/hi'
import styled from 'styled-components/macro'
import Navbar from './Navbar'

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: min-content 1fr;
`
const Logo = styled(HiAcademicCap)`
  font-size: 50px;
`
