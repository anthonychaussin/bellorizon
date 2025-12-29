import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Toast} from 'primereact/toast';
import {FormEvent, useRef, useState} from 'react';
import {NavLink} from 'react-router-dom';
import SEO from '../components/SEO';

const LoginPage = () => {
  const toast = useRef<Toast | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (event: FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      toast.current?.show({ severity: 'warn', summary: 'Champs requis', detail: 'Renseignez vos identifiants.' });
      return;
    }

    toast.current?.show({ severity: 'info', summary: 'Connexion', detail: 'Authentification simulée.' });
  };

  return (
    <>
      <SEO
        title="Connexion - Résidence Bellôrizon"
        description="Connectez-vous à votre compte résident pour accéder aux services et informations de la Résidence Bellôrizon."
        keywords="connexion, login, compte résident, authentification, résidence Bellôrizon"
        url="/login"
        noindex={true}
      />
      <div className="page p-3">
        <Toast ref={toast} position="top-center" />
      <Card title="Connexion" className="form-card">
        <form className="p-fluid" onSubmit={onLogin}>
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

          <Button type="submit" label="Se connecter" icon="pi pi-sign-in" className="mt-2" />
        </form>

        <p className="mt-3">
          Pas encore inscrit ? <NavLink to="/register">Créer un compte</NavLink>
        </p>
      </Card>
    </div>
    </>
  );
};

export default LoginPage;
