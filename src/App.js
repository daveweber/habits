import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Goals and Habits</h1>
        <div class="btn-group">
          <a class="btn" href="https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/learn-the-abridged-history-of-OKRs/" target="_blank" rel="noreferrer">Guide to setting Goals</a>
          <a class="btn" href="https://jamesclear.com/habits" target="_blank" rel="noreferrer">Guide to forming Habits</a>
        </div>
      </header>
      <Tabs>
        <div label="Goals">
          <button>New Goal</button>
        </div>
        <div label="Habits">
          <button>New Habit</button>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
