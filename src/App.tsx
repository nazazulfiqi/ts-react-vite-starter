import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center mx-auto">
      <div className="flex gap-2 justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="mt-4 font-semibold">Vite + React Typescript</h1>
      <div className="text-center">
        <Button
          className="my-4 rounded bg-primary-500 text-white hover:bg-primary-600"
          variant={"default"}
          asChild
        >
          <a href="https://github.com/nazazulfiqi">Let's connect!</a>
        </Button>
        <footer className="text-gray-700">
          © {new Date().getFullYear()} By{" "}
          <a href="https://github.com/nazazulfiqi">Naza Zulfiqi</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
