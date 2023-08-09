import { AppContainer } from "./AppContainer";
import { RecordingsList } from "./RecordingsList";
import { UiModeButton } from "./UiModeButton";

function App() {
  return (
    <AppContainer>
      <UiModeButton />
      <RecordingsList />
    </AppContainer>
  );
}

export default App;
