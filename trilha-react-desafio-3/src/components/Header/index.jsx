import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-dio.png'

import { Button } from '../Button'
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from './styles'

const Header = ({ autenticado }) => {
  const navigate = useNavigate()

  const redirect = (page) => {
    navigate(page)
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={() => redirect('/login')} />
              <Button title="Cadastrar" onClick={() => redirect('/signup')} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
