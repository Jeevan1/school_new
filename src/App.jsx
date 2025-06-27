import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import {
  default as BlogDetailPage,
  default as ProgramDetailPage,
} from "./pages/BlogDetailPage";
import BlogPage from "./pages/BlogPage";
import LandingPage from "./pages/LandingPage";
import NoticePage from "./pages/NoticePage";
// import GalleryPage from "./pages/GalleryPage";
import Data from "./data.json";
import AlbumPage from "./pages/AlbumPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import TeamPage from "./pages/TeamPage";
import NewsDetailsPage from "./pages/NewsDetailPage";
import BatchTopperPage from "./pages/BatchTopperPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import CoursePage from "./pages/CoursePage";
import PageNotFound from "./pages/PageNotFound";
import CurriculumPage from "./pages/CurriculumPage";
import ReportsPage from "./pages/ReportsPage";
import ResultsPage from "./pages/ResultsPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route
          path="/notices/:id"
          element={<NewsDetailsPage data={Data.notices} />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage data={Data.blog} />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/album/:id" element={<GalleryPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/batch" element={<BatchTopperPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
