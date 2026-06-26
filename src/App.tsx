import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Home } from '@/pages/Home';
import { Platform } from '@/pages/Platform';
import { AIAgent } from '@/pages/AIAgent';
import { Solutions } from '@/pages/Solutions';
import { Integrations } from '@/pages/Integrations';
import { Pricing } from '@/pages/Pricing';
import { Contact } from '@/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
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
          <Route path="/platform" element={<Platform />} />
          <Route path="/ai-agent" element={<AIAgent />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/pricing" element={<Pricing />} />
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
