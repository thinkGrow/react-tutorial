import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>World</span> World
//       </Alert>
//     </div>
//   );
// }
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>my Alert</Alert>}

      <Button onClick={() => setAlertVisibility(true)}>button</Button>
    </div>
  );
}

export default App;
