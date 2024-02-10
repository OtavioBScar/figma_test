import React from 'react'
import { Container, Comporter, Link, Links } from './style';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const Navigate = useNavigate()

    return (
      <Container>
        <Comporter>
          <Links>
          <Link onClick={() => Navigate("/About")}>About</Link>
          <Link onClick={() => Navigate("/Price")}>Price</Link>
          <Link onClick={() => Navigate("/Product")}>Product</Link>
          <Link onClick={() => Navigate("/Contact")}>Contact</Link>
          </Links>
        </Comporter>
      </Container>
    )
}

export default Navbar;
