import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Toast} from 'primereact/toast';
import {FormEvent, useRef, useState} from 'react';
import SEO from '../components/SEO';

const RegisterPage = () => {
  const toast = useRef<Toast | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = (event: FormEvent) => {
    event.preventDefault();
    if (!name || !email || !password) {
      toast.current?.show({severity: 'warn', summary: 'Champs requis', detail: 'Merci de remplir tous les champs.'});
      return;
    }

    toast.current?.show({severity: 'success', summary: 'Inscription', detail: 'Votre compte sera activé prochainement.'});
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <SEO
        title="Inscription - Résidence Bellôrizon"
        description="Créez votre compte résident pour accéder aux services et informations de la Résidence Bellôrizon."
        keywords="inscription, register, créer compte, résidence Bellôrizon, nouveau résident"
        url="/register"
        noindex={true}
      />
      <div className="page p-3">
        <Toast ref={toast} position="top-center"/>
      <Card title="Inscription" className="form-card">
        <form className="p-fluid" onSubmit={onRegister}>
          <div className="field">
            <label htmlFor="name">Nom</label>
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value ?? '')}
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <InputText
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value ?? '')}
              placeholder="nom@exemple.fr"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Mot de passe</label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value ?? '')}
              toggleMask
              feedback={false}
              required
            />
          </div>

          <Button type="submit" label="S'inscrire" icon="pi pi-user-plus" className="mt-2"/>
        </form>
      </Card>
    </div>
    </>
  );
};

export default RegisterPage;
