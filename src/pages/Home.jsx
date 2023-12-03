import Footer from "components/Footer";
import Form from "components/Form";
import Header from "components/Header";
import LetterBox from "components/LetterBox";
import styled from "styled-components";
const Homest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Home() {
  return (
    <div>
      <Header />
      <Homest>
        <Form />
        <LetterBox />
      </Homest>

      <Footer />
    </div>
  );
}

export default Home;
