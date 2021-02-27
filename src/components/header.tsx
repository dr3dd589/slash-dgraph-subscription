import React from "react"
import { Container, Image, Menu } from "semantic-ui-react"
import logo from './diggy.png';

export function AppHeader() {
  return (
    <Menu fixed="top">
      <Container>
        <Menu.Item as="a" header>
          <Image
            size="tiny"
            src={ logo }
            style={{ marginRight: "1em" }}
          />
          Dgraph Newsletter
        </Menu.Item>
      </Container>
    </Menu>
  )
}