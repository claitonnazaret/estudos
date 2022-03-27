import React from "react";
import {
  Button,
  ButtonToolbar,
  FlexboxGrid,
  Footer,
  Form,
  Panel,
} from "rsuite";

const Login = () => {
  return (
    <FlexboxGrid
      justify="center"
      align="middle"
      style={{
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <FlexboxGrid.Item colspan={6}>
        <Panel header={<h3>Login</h3>}>
          <Form fluid>
            <Form.Group>
              <Form.ControlLabel>Username or email address</Form.ControlLabel>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar
                as={FlexboxGrid}
                style={{
                  flexDirection: "row-reverse",
                  gap: "5px",
                }}
              >
                <Button appearance="primary">Sign in</Button>
                <Button appearance="link">Forgot password?</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Panel>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item>
        <Footer>
          Copyright @ {new Date().getFullYear()} - Todos os direitos reservados
        </Footer>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Login;
