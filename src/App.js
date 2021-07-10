import "./App.css";
import ChatList from "./page/ChatList";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import ChatDetail from "./page/ChatDetail";

const AppDiv = styled.div`
  width: 500px;
  height: 800px;
  margin: 20px auto auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppDiv>
      <Switch>
        <Route exact path="/" component={ChatList} />
        <Route exact path="/:id" component={ChatDetail} />
      </Switch>
    </AppDiv>
  );
}

export default App;
