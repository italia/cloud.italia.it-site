import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { StaticImage } from 'gatsby-plugin-image';
import { Hero } from '../components/hero/Hero.js';
import { List } from '../components/List.js';
import { Paragraph } from '../components/Paragraph.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Timeline } from '../components/Timeline.js';

const useStyles = createUseStyles({
  title: {
    composes: 'h5 font-weight-semibold',
    color: '#455A64',
  },
  text: {
    composes: 'col-xs-12 col-sm-10 col-md-8 col-lg-6 m-auto',
    '@global': {
      h3: {
        color: '#455A64',
        fontWeight: 600,
      },
      'ul li': {
        color: 'var(--primary)',
        '& span': {
          color: 'initial',
        },
      },
    },
  },
});

const StrategyPage = () => {
  const classes = useStyles();
  const {
    allStrategyResourcesYaml: { nodes: resources },
    allStrategyTimelineYaml: { nodes: timelineData },
  } = useStaticQuery(graphql`
    {
      allStrategyResourcesYaml {
        nodes {
          id
          title
          references {
            action
            ariaLabel
            description
            icon
            link
            title
          }
        }
      }
      allStrategyTimelineYaml {
        nodes {
          body
          date
          id
          title
        }
      }
    }
  `);

  return (
    <>
      <h1 className="sr-only">Strategia cloud</h1>
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title="La strategia nazionale cloud della PA" className="text-info" Tag="h2" />
              <HeroBody>
                Il Piano triennale per l’informatica nella pubblica amministrazione prevede la realizzazione del sistema
                operativo del paese mediante l’adozione del modello cloud computing nelle pubbliche amministrazioni. Il
                Dipartimento per la trasformazione digitale, in collaborazione con AgID, ha definito la strategia Cloud
                della PA e il programma per abilitare il cloud computing nel settore pubblico.
              </HeroBody>
            </div>
          </div>
        </div>
      </Hero>

      <StaticImage
        aspectRatio={1280 / 548}
        src="../images/strategia_hero_cloud_2x.jpg"
        alt=""
        placeholder="blurred"
        formats={['AUTO', 'AVIF', 'WEBP']}
      />

      <Hero>
        <Paragraph>
          <div>
            La strategia per il cloud prevista dal Piano triennale individua tre linee di indirizzo che caratterizzano
            il percorso di trasformazione:
          </div>
          <ul className="pl-4 mt-4">
            <li className="mb-3 text-primary">
              <span className="text-info">
                <strong>cloud first:</strong> incentivare le pubbliche amministrazioni all’adozione di soluzioni basate
                sul cloud computing, nell’ottica di proporre un’offerta di servizi digitali e infrastrutture
                tecnologiche sicure, efficienti, affidabili e autonome, in linea con le raccomandazioni destinate
                all’intero mercato europeo;
              </span>
            </li>
            <li className="mb-3 text-primary">
              <span className="text-info">
                <strong>Polo Strategico Nazionale:</strong> mettere in sicurezza gli asset strategici per il Paese
                mediante lo sviluppo di un&apos;infrastruttura ad alta affidabilità promossa dalla Presidenza del
                Consiglio dei ministri (articolo 35 del Decreto legge Semplificazioni e innovazione digitale);
              </span>
            </li>
            <li className="mb-3 text-primary">
              <span className="text-info">
                <strong>data center di qualità della PA:</strong> valorizzando le strutture delle amministrazioni e
                rafforzando la loro capacità di offrire servizi cloud ad altre amministrazioni.
              </span>
            </li>
          </ul>
        </Paragraph>
      </Hero>

      <Hero bgColor="light">
        <Timeline data={timelineData} title="Piano di attuazione" />
      </Hero>

      <Hero>
        <Paragraph>
          <h2 className="h5 font-weight-semibold mb-4">Adottare il modello Cloud della PA</h2>
          <div>
            Al fine di attuare la strategia Cloud della PA, abbiamo definito il programma di abilitazione al cloud, che
            supporta le pubbliche amministrazioni nel percorso di migrazione al cloud computing. Nell’ambito del
            programma è stato definito un modello di organizzazione (framework) per le unità operative che supporteranno
            la migrazione (unità di controllo, unità di esecuzione e centri di competenza), ed è stata elaborata la
            prima versione del kit di abilitazione al cloud, una raccolta di metodologie, buone pratiche e strumenti
            dedicati alle PA coinvolte nel programma.
          </div>
        </Paragraph>
      </Hero>

      <Hero bgColor="light">
        <div className="col-xl-8 col-lg-10 m-auto">
          <div className="mx-4">
            <h2 className={classes.title}>Risorse utili</h2>
          </div>
          <ResourcesWithList resources={resources} />
        </div>
      </Hero>

      <Hero>
        <Paragraph>
          <h2 className="h5 font-weight-semibold mb-4">Cloud first e modello Cloud della PA</h2>
          <div>
            La strategia italiana sul cloud per la PA prevede il principio cloud first. Tuttavia, non tutti i servizi
            cloud hanno le medesime caratteristiche di qualità, adeguate alle esigenze della PA. A tal fine, la
            strategia ha previsto la definizione di requisiti che devono essere soddisfatti dai servizi cloud offerti
            alla PA. I servizi cloud che soddisfano tali requisiti sono qualificati da AgID ed entrano così a far parte
            del modello Cloud della PA. Il modello consente di qualificare servizi e infrastrutture secondo parametri
            idonei per le esigenze della PA e che rispettano i principi di:
          </div>
          <List
            items={[
              {
                id: 1,
                html:
                  'miglioramento dei livelli di servizio, accessibilità, usabilità e sicurezza nel rispetto di standard\n' +
                  '                  definiti a livello internazionale;',
              },
              {
                id: 2,
                html: 'sovranità digitale, controllo e protezione dei dati nel rispetto dei valori europei;',
              },
            ]}
          />
          <div>
            Il Cloud della PA si compone di infrastrutture e servizi, qualificati da AgID sulla base di requisiti minimi
            descritti nelle circolari AgID n.2 e n.3 del 2018.
          </div>
        </Paragraph>
        <Paragraph>
          <h2 className="h5 font-weight-semibold my-4">Data center di qualità e Polo Strategico Nazionale</h2>
          <div>
            Le infrastrutture digitali ricoprono un ruolo vitale per un gran numero di attività che sono ormai parte
            della nostra vita quotidiana nonché l’ossatura portante del sistema di servizi che le amministrazioni
            utilizzano ed erogano a cittadini e imprese. Le infrastrutture digitali della PA devono quindi essere
            affidabili, sicure, ecologiche ed economicamente sostenibili.
          </div>
        </Paragraph>
        <Paragraph>
          <h2 className="h5 font-weight-semibold my-4">Lo stato dell&apos;arte</h2>
          <div>
            AgID ha fotografato lo stato molto precario di queste infrastrutture, pubblicando il Censimento del
            Patrimonio ICT della PA 2018-2019. Al censimento hanno partecipato 990 amministrazioni, centrali e locali,
            permettendo la valutazione di 1252 data center. I dati non sono incoraggianti: il 95% dei data center
            analizzati sono carenti dei requisiti minimi di sicurezza, affidabilità, capacità elaborativa ed efficienza
            (denominati Gruppo B). Questo dato implica che una buona parte dei servizi digitali offerti dalla Pubblica
            Amministrazione ai cittadini può essere vulnerabile agli attacchi informatici oppure incapace di gestire i
            picchi di traffico dei propri utenti. Come capita sempre più spesso, a causa di queste criticità, i servizi
            pubblici in digitale possono essere indisponibili all’utilizzo del cittadino. Il censimento ha consentito
            anche di identificare un insieme di 63 data center di qualità (di tipo A), che rispettano i requisiti minimi
            di affidabilità definiti da AgID. Di questi 63 data center, 24 appartengono a PA centrali e i restanti 39 a
            PA locali.
          </div>
        </Paragraph>
      </Hero>
    </>
  );
};

export default StrategyPage;
