import { AppContainer } from "./components/AppContainer";
import { RecordingPage } from "./components/RecordingPage";
import { RecordingsList } from "./components/RecordingsList";
import { useCurrentRecording } from "./hooks/use-current-recording";
import { useWatchNavigation } from "./hooks/use-watch-navigation";

function App() {
  useWatchNavigation();
  const { currentRecording } = useCurrentRecording();
  console.log(currentRecording?.song);

  return (
    <AppContainer>
      {currentRecording ? <RecordingPage /> : <RecordingsList />}
    </AppContainer>
  );
}

export default App;
