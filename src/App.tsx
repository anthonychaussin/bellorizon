import {Button} from 'primereact/button';
import {Divider} from 'primereact/divider';
import {Menu} from 'primereact/menu';
import {MenuItem} from 'primereact/menuitem';
import {Sidebar} from 'primereact/sidebar';
import {Toolbar} from 'primereact/toolbar';
import {useMemo, useState} from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import SiteFooter from './components/SiteFooter';
import ArtisansPage from './pages/Artisans';
import CommunePage from './pages/Commune';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import NewsPage from './pages/News';
import RegisterPage from './pages/Register';
import ReportPage from './pages/Report';
import ResidencePage from './pages/Residence';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const menuModel: MenuItem[] = useMemo(
    () => [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        command: () => {
          navigate('/');
          setMenuVisible(false);
        }
      },
      {
        label: 'Annonces',
        icon: 'pi pi-megaphone',
        command: () => {
          navigate('/news');
          setMenuVisible(false);
        }
      },
      {
        label: 'Artisans',
        icon: 'pi pi-wrench',
        command: () => {
          navigate('/artisans');
          setMenuVisible(false);
        }
      },
      {
        label: 'Signaler un problème',
        icon: 'pi pi-exclamation-circle',
        command: () => {
          navigate('/report');
          setMenuVisible(false);
        }
      }
    ],
    [navigate]
  );

  return (
    <div className="app-shell">
      <Toolbar
        className="app-toolbar"
        start={<span className="app-title">Résidence Bellôrizon</span>}
        end={
          <Button
            icon="pi pi-bars"
            rounded
            text
            aria-label="Ouvrir le menu"
            onClick={() => setMenuVisible(true)}
          />
        }
      />

      <Sidebar
        position="right"
        visible={menuVisible}
        onHide={() => setMenuVisible(false)}
        className="app-sidebar"
        header={<span>Navigation</span>}
      >
        <Menu model={menuModel} className="w-full border-none"/>
      </Sidebar>

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/commune" element={<CommunePage/>}/>
          <Route path="/residence" element={<ResidencePage/>}/>
          <Route path="/news" element={<NewsPage/>}/>
          <Route path="/artisans" element={<ArtisansPage/>}/>
          <Route path="/report" element={<ReportPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </main>

      <Divider className="footer-divider"/>
      <SiteFooter/>
    </div>
  );
}

export default App;
