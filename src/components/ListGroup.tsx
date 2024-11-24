function ListGroup() {
  const items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

  return (
    // wrapped in fragment
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
