import "./App.css";
import ChatList from "./page/ChatList";
import styled from "styled-components";

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppDiv>
      <ChatList />
    </AppDiv>
  );
}

export default App;
