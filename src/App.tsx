import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ShowsPage } from "./pages/ShowsPage";
import { ShowDetailPage } from "./pages/ShowDetailPage";
import { TicketsPage } from "./pages/TicketsPage";
import { VendorsPage } from "./pages/VendorsPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { VenuePage } from "./pages/VenuePage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { VideosPage } from "./pages/VideosPage";
import { CollaboratorsPage } from "./pages/CollaboratorsPage";
import { FaqPage } from "./pages/FaqPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shows" element={<ShowsPage />} />
        <Route path="/shows/:id" element={<ShowDetailPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/venue" element={<VenuePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/collaborators" element={<CollaboratorsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
