import { Button } from "./atoms/Button";
import { Link } from "./atoms/Link";

function App() {
  return (
    <>
      <h1 className="text-3xl">Hi! I'm <span className="inline-block font-bold text-neutral-alpha bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 bg-clip-text">Jolene Kearse</span></h1>
      <main className="flex items-center justify-center h-screen outline-1 outline-purple-100">
        <Button text="Click Me!" />
        <Link text="Home" />
      </main>
    </>
  );
}

export default App;
