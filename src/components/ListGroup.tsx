// import { MouseEvent } from "react";
import { useState } from "react";
import { jsx } from "react/jsx-runtime";

interface Props {
  items: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // wrapped in fragment
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
