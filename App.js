import AppNavigation from "./src/components/navigation/appNavigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
}
