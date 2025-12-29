import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Toast} from 'primereact/toast';
import {FormEvent, useRef, useState} from 'react';
import SEO from '../components/SEO';

const ReportPage = () => {
  const toast = useRef<Toast | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitReport = (event: FormEvent) => {
    event.preventDefault();
    if (!title || !description) {
      toast.current?.show({ severity: 'warn', summary: 'Champs requis', detail: 'Merci de compléter tous les champs.' });
      return;
    }

    toast.current?.show({ severity: 'success', summary: 'Signalement envoyé', detail: 'Nous revenons vers vous rapidement.' });
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <SEO
        title="Signaler un problème - Résidence Bellôrizon"
        description="Signalez un problème ou une panne dans la Résidence Bellôrizon. Notre équipe traitera votre demande rapidement."
        keywords="signaler problème, maintenance, panne, résidence Bellôrizon, assistance"
        url="/report"
        noindex={true}
      />
      <div className="page p-3">
        <Toast ref={toast} position="top-center" />
      <Card title="Signaler un problème" className="form-card">
        <form className="p-fluid" onSubmit={submitReport}>
          <div className="field">
            <label htmlFor="title">Titre du problème</label>
            <InputText
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value ?? '')}
              placeholder="Ex. Ascenseur en panne"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="description">Description</label>
            <InputTextarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value ?? '')}
              rows={5}
              autoResize
              placeholder="Merci de détailler le problème rencontré"
              required
            />
          </div>

          <Button type="submit" label="Envoyer" icon="pi pi-send" className="mt-2" />
        </form>
      </Card>
    </div>
    </>
  );
};

export default ReportPage;
