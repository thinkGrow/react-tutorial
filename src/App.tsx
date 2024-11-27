// import Message from './Message'
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  return (
    <div>
      {" "}
      <ListGroup items = {items} heading="Cities" />
    </div>
  );
}

export default App;
