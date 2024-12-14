import {NgForOf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ArtisantFilterPipe} from '../../pipe/artisant-filter.pipe';

@Component({
             selector: 'app-artisants',
             templateUrl: './artisants.component.html',
             styleUrls: ['./artisants.component.scss'],
             imports: [
               IonContent,
               IonCard,
               IonCardHeader,
               IonImg,
               IonCardTitle,
               IonCardSubtitle,
               IonMenuButton,
               IonButtons,
               IonTitle,
               IonToolbar,
               IonHeader,
               NgForOf,
               IonCardContent,
               IonLabel,
               IonList,
               IonItem,
               ArtisantFilterPipe,
               FormsModule,
               IonSearchbar
             ],
             standalone: true
           })
export class ArtisantsComponent implements OnInit {

  public artisants = [{
    type: 'GROS ŒUVRE',
    name: 'PINTO',
    url: 'https://www.pinto-maconnerie.fr',
    mail: ['l.bollard@pinto-maconnerie.fr'],
    tel: '0450645673',
    img: '../../ressources/img/PINTO.webp'
  }, {
    type: 'FLOCAGE',
    name: 'GONNET ISOLATION',
    url: 'https://www.groupegdi.fr',
    mail: ['accueil@dsetancheite.fr'],
    tel: '0983290937',
    img: '../../ressources/img/GDI.webp'
  }, {
    type: 'CHARPENTE',
    name: 'SABAUDIA',
    url: 'https://www.charpente-sabaudia.com',
    mail: ['contact@sabaudiacharpente.fr', 'sabaudiacharp@orange.fr'],
    tel: '0479310031',
    img: '../../ressources/img/charpente.webp'
  }, {
    type: 'MENUISERIES EXTERNE',
    name: 'ALB ALU',
    url: 'https://alb-alu.fr',
    mail: ['j.tsan@alb-alu.fr'],
    tel: '0426784715',
    img: '../ressources/img/ALB_ALU.webp'
  }, {
    type: 'CLOISONS',
    name: 'KOCPINAR',
    url: undefined,
    mail: ['contact@sarlkocpinar.fr', 'ssevestre@pgiraudmenuiseries.com'],
    tel: '0960407742',
    img: '../ressources/img/kocpinar.webp'
  }, {
    type: 'MENUISERIES INTERNE',
    name: 'PIERRE GIRAUD',
    url: 'http://www.pgiraudmenuiseries.com',
    mail: ['ssevestre@pgiraudmenuiseries.com', 'kcostanzo@pgiraudmenuiseries.com'],
    tel: '0472540252',
    img: '../ressources/img/GIRAUD.webp'
  }, {
    type: 'CHAPES',
    name: 'TERRA CERAMIC',
    url: undefined,
    mail: ['terraceramic@gmail.com'],
    tel: '0476033294',
    img: '../ressources/img/TERRA.webp'
  }, {
    type: 'PEINTURES INT.',
    name: 'A&R PEINTURE',
    url: undefined,
    mail: ['contact@arpeinture.fr'],
    tel: '0479622529',
    img: '../ressources/img/PEINTURE.webp'
  }, {
    type: 'SOLS SOUPLES',
    name: 'DECOPARQUET',
    url: undefined,
    mail: ['decoparquet@orange.fr'],
    tel: '0478346830',
    img: '../ressources/img/DECOPARQUET.webp'
  }, {
    type: 'CARRELAGES',
    name: 'TERRA CERAMIC',
    url: undefined,
    mail: ['terraceramic@gmail.com'],
    tel: '0476033294',
    img: '../ressources/img/TERRA.webp'
  }, {
    type: 'PORTE GARAGE',
    name: 'ACAF',
    url: 'https://acaf.fr',
    mail: ['chantiers74@acaf.fr'],
    tel: '0450278571',
    img: '../ressources/img/Acaf.svg'
  }, {
    type: 'ASCENSEURS',
    name: 'TK ELEVATOR',
    url: 'https://www.tkelevator.com',
    mail: ['jean-pierre.barbe@tkelevator.com'],
    tel: '0476548235',
    img: '../ressources/img/TKE.webp'
  }, {
    type: 'FACADES/RPE',
    name: 'EXYU FACADES',
    url: 'https://exyufacade.fr',
    mail: ['info@exyufacade.fr'],
    tel: '0628807947',
    img: '../ressources/img/EXYU.webp'
  }, {
    type: 'PLOMBERIE CVC',
    name: 'PONCET',
    url: 'https://www.sasponcet.com',
    mail: ['entreprise.poncet@poncetsarl.com'],
    tel: '0450462342',
    img: '../ressources/img/Poncet.webp'
  }, {
    type: 'ELECTRICITE',
    name: 'JUSTE ELEC',
    url: null,
    mail: ['contact@justelect.fr'],
    tel: '0965400290',
    img: '../ressources/img/JUSTEELEC.svg'
  }, {
    type: 'ESPACE VERT',
    name: 'ARTEMIS',
    url: 'https://www.artemis-paysages.fr',
    mail: ['contact@artemis-paysage.fr'],
    tel: '0476318084',
    img: '../ressources/img/artemis.webp'
  }, {
    type: 'ETANCHEITE',
    name: 'DIAS ETANCHEITE',
    url: null,
    mail: ['accueil@dsetancheite.fr'],
    tel: '0983290937',
    img: '../ressources/img/dsetancheite.jpeg'
  }, {
    type: 'SERRURERIE',
    name: 'STYLE METAL',
    url: 'https://www.stylemetal.fr',
    mail: ['atelier@style-metal.fr'],
    tel: '0450014548',
    img: '../ressources/img/STYLEMETAL.webp'
  }];

  public searchValue?: string;

  constructor() { }

  ngOnInit() {}

}
