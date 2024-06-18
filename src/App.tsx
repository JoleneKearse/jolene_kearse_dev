import { Button } from "./atoms/Button";

function App() {
  return (
    <>
      <h1 className="text-3xl">Meet your new developer... Jolene Kearse</h1>
      <main className="flex items-center justify-center h-screen outline-1 outline-purple-100">
        <Button text="Click Me!" />
      </main>
    </>
  );
}

export default App;
