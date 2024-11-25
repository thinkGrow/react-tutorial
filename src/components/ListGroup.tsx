function ListGroup() {
  let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  items = [];

  return (
    // wrapped in fragment
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
