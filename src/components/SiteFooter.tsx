import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {useNavigate} from 'react-router-dom';

const SiteFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="">
      <Card>
        <div className="grid align-items-center justify-content-center footer-actions">
          <div className="col-12 md:col-6 text-center">
            <Button
              label="Signaler un problème"
              icon="pi pi-exclamation-circle"
              className="p-button-text"
              onClick={() => navigate('/report')}
            />
          </div>
          <div className="col-12 md:col-6 text-center">
            <Button
              label="Contact"
              icon="pi pi-envelope"
              className="p-button-text"
              onClick={() => window.open('mailto:syndic.bellhorizon@gmail.com')}
            />
          </div>
        </div>
      </Card>
    </footer>
  );
};

export default SiteFooter;
