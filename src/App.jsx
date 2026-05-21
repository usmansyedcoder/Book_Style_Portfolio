import Book from "./components/Book.jsx";
import CoverPage from "./components/CoverPage.jsx";
import HomePage from "./components/HomePage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import EducationPage from "./components/EducationPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import EndPage from "./components/EndPage.jsx";

const PAGE_LABELS = [
  "Cover",
  "Home",
  "Projects",
  "Education",
  "Contact",
  "End",
];

const PAGES = [
  <CoverPage />,
  <HomePage />,
  <ProjectsPage />,
  <EducationPage />,
  <ContactPage />,
  <EndPage />,
];

export default function App() {
  return <Book pages={PAGES} pageLabels={PAGE_LABELS} />;
}
