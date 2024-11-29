// import Alert from "./components/Alert";
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
  return (
    <div>
      <Button onClick={()=>console.log("Clicked")}>button</Button>
    </div>
  );
}

export default App;
