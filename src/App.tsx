import { ThemeProvider } from "@/components/themeProvider";
import { Playground } from "@/components/playground/playground.tsx";

function App() {
  return (
    <ThemeProvider>
      <Playground />
    </ThemeProvider>
  );
}

export default App;
