import { AppContainer } from "./components/AppContainer";
import { Betsy } from "./components/Betsy";
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
      <Betsy />
      {currentRecording ? <RecordingPage /> : <RecordingsList />}
    </AppContainer>
  );
}

export default App;
