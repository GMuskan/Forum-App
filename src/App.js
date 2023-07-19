import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { SinglePost } from "./Pages/SinglePost";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}
