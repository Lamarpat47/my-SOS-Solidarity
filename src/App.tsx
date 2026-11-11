import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import FullEnglishHome from './pages/FullEnglishHome';
import ActionsBafoussam from './pages/ActionsBafoussam';
import ActionsYaounde from './pages/ActionsYaounde';
import ActionsDouala from './pages/ActionsDouala';
import Contact from './pages/ContactUs';
import Footer from './pages/Footer';

export function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FullEnglishHome />} />
            
            {/* Catch-all redirect for generic /actions requests */}
            <Route path="actions" element={<Navigate to="/ActionsBafoussam" replace />} />
            <Route path="Actions" element={<Navigate to="/ActionsBafoussam" replace />} />
            
            {/* City action routes */}
            <Route path="ActionsBafoussam" element={<ActionsBafoussam />} />
            <Route path="ActionsYaounde" element={<ActionsYaounde />} />
            <Route path="ActionsDouala" element={<ActionsDouala />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Wildcard fallback for any unknown paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;