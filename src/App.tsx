import { AppContainer } from "./components/AppContainer";
import { RecordingsList } from "./components/RecordingsList";
import { UiModeButton } from "./components/UiModeButton";

function App() {
  return (
    <AppContainer>
      <UiModeButton />
      <RecordingsList />
    </AppContainer>
  );
}

export default App;
