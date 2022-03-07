import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import ContactsList from "./components/ContactsList/ContactsList";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";

const App = () => {
  return (
    <Container>
      <Header />
      <Form />
      <Filter />
      <ContactsList />
    </Container>
  );
};
export default App;
