import Footer from "components/Footer";
import Form from "components/Form";
import Header from "components/Header";
import LetterBox from "components/LetterBox";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <Form />
        <LetterBox />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
