import {Component} from '@angular/core';

@Component({
  selector: 'app-artisants',
  templateUrl: './artisants.component.html',
  styleUrls: ['./artisants.component.scss']
})
export class ArtisantsComponent {

  public contactData = [
    {
      title: "GROS ŒUVRE",
      name: "PINTO",
      web: "pinto-maconnerie.fr",
      nameWeb: "www.pinto-maconnerie.fr",
      mails: ["l.bollard@pinto-maconnerie.fr"],
      tel: "04 50 64 56 73",
      svg: false
    },
    {
      title: "FLOCAGE",
      name: "GONNET ISOLATION",
      web: "groupegdi.fr",
      nameWeb: "www.groupegdi.fr",
      mails: ["accueil@dsetancheite.fr"],
      tel: "09 83 29 09 37",
      svg: false
    },
    {
      title: "CHARPENTE",
      name: "SABAUDIA",
      web: "charpente-sabaudia.com",
      nameWeb: "www.charpente-sabaudia.com",
      mails: ["contact@sabaudiacharpente.fr", "sabaudiacharp@orange.fr"],
      tel: "04 79 31 00 31",
      svg: false
    },
    {
      title: "MENUISERIES EXTERNE",
      name: "ALB ALU",
      web: "alb-alu.fr",
      nameWeb: null,
      mails: ["j.tsan@alb-alu.fr"],
      tel: "04 26 78 47 15",
      svg: false
    },
    {
      title: "CLOISONS",
      name: "KOCPINAR",
      web: null,
      nameWeb: null,
      mails: ["contact@sarlkocpinar.fr", "ssevestre@pgiraudmenuiseries.com"],
      tel: "09 60 40 77 42 ",
      svg: false
    },
    {
      title: "MENUISERIES INTERNE",
      name: "PIERRE GIRAUD",
      web: "pgiraudmenuiseries.com",
      nameWeb: "www.pgiraudmenuiseries.com",
      mails: ["ssevestre@pgiraudmenuiseries.com", "kcostanzo@pgiraudmenuiseries.com"],
      tel: "04 72 54 02 52",
      svg: false
    },
    {
      title: "CHAPES",
      name: "TERRA CERAMIC",
      web: null,
      nameWeb: null,
      mails: ["terraceramic@gmail.com"],
      tel: "04 76 03 32 94 ",
      svg: false
    },
    {
      title: "PEINTURES INT.",
      name: "A&R PEINTURE",
      web: null,
      nameWeb: null,
      mails: ["contact@arpeinture.fr​"],
      tel: "04 79 62 25 29",
      svg: false
    },
    {
      title: "SOLS SOUPLES",
      name: "DECOPARQUET",
      web: null,
      nameWeb: null,
      mails: ["decoparquet@orange.fr​"],
      tel: "04 78 34 68 30",
      svg: false
    },
    {
      title: "CARRELAGES",
      name: "TERRA CERAMIC",
      web: null,
      nameWeb: null,
      mails: ["terraceramic@gmail.com"],
      tel: "04 76 03 32 94",
      svg: false
    },
    {
      title: "PORTE GARAGE",
      name: "ACAF",
      web: "acaf.fr",
      nameWeb: null,
      mails: ["chantiers74@acaf.fr"],
      tel: "04 50 27 85 71",
      svg: true
    },
    {
      title: "ASCENSEURS",
      name: "TK ELEVATOR",
      web: "tkelevator.com",
      nameWeb: "www.tkelevator.com",
      mails: ["jean-pierre.barbe@tkelevator.com"],
      tel: "04 76 54 82 35",
      svg: false
    },
    {
      title: "FACADES/RPE",
      name: "EXYU FACADES",
      web: "exyufacade.fr",
      nameWeb: null,
      mails: ["info@exyufacade.fr"],
      tel: "06 28 80 79 47",
      svg: false
    },
    {
      title: "PLOMBERIE CVC",
      name: "PONCET",
      web: "sasponcet.com",
      nameWeb: "www.sasponcet.com",
      mails: ["entreprise.poncet@poncetsarl.com"],
      tel: "04 50 46 23 42",
      svg: false
    },
    {
      title: "ELECTRICITE",
      name: "JUSTE ELEC",
      web: null,
      nameWeb: null,
      mails: ["contact@justelect.fr"],
      tel: "09 65 40 02 90",
      svg: true
    },
    {
      title: "ESPACE VERT",
      name: "ARTEMIS",
      web: "artemis-paysages.fr",
      nameWeb: "www.artemis-paysages.fr",
      mails: ["contact@artemis-paysage.fr"],
      tel: "04 76 31 80 84",
      svg: false
    },
    {
      title: "ETANCHEITE",
      name: "DIAS ETANCHEITE",
      web: null,
      nameWeb: null,
      mails: ["accueil@dsetancheite.fr"],
      tel: "09 83 29 09 37",
      svg: false
    },
    {
      title: "SERRURERIE",
      name: "STYLE METAL",
      web: "stylemetal.fr",
      nameWeb: "www.stylemetal.fr",
      mails: ["atelier@style-metal.fr"],
      tel: "04 50 01 45 48",
      svg: false
    },
    {
      title: null,
      name: "",
      web: "",
      nameWeb: "",
      mails: [""],
      tel: "",
      svg: false
    },
  ]

  constructor() {
  }
}
