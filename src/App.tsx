import styled from "styled-components"
import CardPost from "./components/Card/Card"
import FeedPosts from "./components/FeedPosts/FeedPosts"


const AppContainer = styled.div`
  display: grid;
  justify-content: center;
  margin: 8.5rem 1rem;


  @media screen and (min-width: 576px) {
    margin: 8.5rem 5rem;
  }

`

function App() {

  return (
    <AppContainer>
      <CardPost />
      <FeedPosts />
    </AppContainer>
  )
}

export default App