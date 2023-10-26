import { Badge, Tabs } from "antd";
import Leaderboard from "./components/Leaderboard";
import "./App.css";

const App = () => {
  return (
    <div className="container mb-12">
      <h1 className="text-4xl font-medium underline">THE FINALS - Unofficial Leaderboard</h1>
      <h5 className="text-xl">
        Top players from the playtests. You can find the official leaderboard{" "}
        <a href="https://www.reachthefinals.com/leaderboard-beta" target="_blank" className="link">
          here
        </a>
        . Created by{" "}
        <a href="https://twitter.com/mozzyfx" target="_blank" className="link">
          me
        </a>
        . Source{" "}
        <a href="https://github.com/leonlarsson/the-finals-leaderboard" target="_blank" className="link">
          here
        </a>
        .
      </h5>
      <hr />

      <Tabs
        defaultActiveKey="1"
        items={[
          { key: "1", label: "Closed Beta 1", children: <Leaderboard leaderboardVersion={"closedBeta1"} /> },
          { key: "2", label: "Closed Beta 2", children: <Leaderboard leaderboardVersion={"closedBeta2"} /> },
          {
            key: "3",
            label: (
              <span>
                <Badge className="mr-1" status="processing" /> Open Beta
              </span>
            ),
            children: <Leaderboard leaderboardVersion={"openBeta"} />
          }
        ]}
      />
    </div>
  );
};

export default App;
