import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JournalPage from "./pages/journalPage";


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/journalPage" element={<JournalPage />} />
            </Routes>
        </Router>
    )
}