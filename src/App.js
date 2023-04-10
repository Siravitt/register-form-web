import { Toaster } from "react-hot-toast";
import Form from "./components/Form";
import ShowUser from "./components/ShowUser";

function App() {
  return (
    <div className="min-h-screen bg-[#3e424f] flex flex-col items-center gap-8">
      <Form />
      <ShowUser />
      <Toaster />
    </div>
  );
}

export default App;
