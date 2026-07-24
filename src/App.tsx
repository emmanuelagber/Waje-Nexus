import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Home } from '@/pages/Home';
import { Platform as Features } from '@/pages/Platform';
import { Integrations } from '@/pages/Integrations';
import { Contact } from '@/pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </PageWrapper>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
