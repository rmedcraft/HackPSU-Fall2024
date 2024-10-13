import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JournalPage from "./pages/journal1";


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/journal1" element={<JournalPage />} />
            </Routes>
        </Router>
    )
}