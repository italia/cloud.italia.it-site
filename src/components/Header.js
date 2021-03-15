import { Link } from 'gatsby';
import React, { useState } from 'react';
import {
  Collapse,
  Header as HeaderReactKit,
  Headers,
  HeaderContent,
  HeaderToggler,
  Icon,
  Nav,
  NavItem,
  HeaderBrand,
  HeaderLinkZone,
  HeaderRightZone,
  HeaderSocialsZone,
} from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import logo from '../images/cloud-logo.svg';
import { HeaderNav } from './HeaderNav.js';

const useStyle = createUseStyles({
  /* Used for problems with nested <a> in the HeaderToggler component */
  navToggler: {
    composes: 'd-lg-none text-primary font-weight-semibold',
    fontSize: '.778em',
    padding: '.5rem 0',
  },
  /* Used due to inability to set classes to li tag with design react kit (LinkListItem) */
  verticalGroupDelimiter: {
    borderRight: '1px solid rgba(0,89,179,.2)',
  },
  horizontalGroupDelimiter: {
    backgroundColor: 'rgba(0,89,179,.2)',
  },
  '@media (max-width: 992px)': {
    verticalGroupDelimiter: {
      borderRight: 'none',
    },
  },
});

const BrandSlimHeader = () => (
  <span className="text-primary font-weight-semibold small">
    <a
      href="https://innovazione.gov.it/dipartimento/la-struttura/"
      rel="noreferrer"
      aria-label="Dipartimento per la Trasformazione Digitale: (Link esterno) Vai a Dipartimento per la Trasformazione Digitale"
      className="mr-1"
    >
      Dipartimento per la Trasformazione Digitale
    </a>
    <span className="mr-1"> + </span>
    <a
      href="https://www.agid.gov.it/"
      rel="noreferrer"
      aria-label="Agenzia per l'Italia Digitale: (Link esterno) Vai a Agenzia per l'Italia Digitale"
      className="mr-1"
    >
      AgID
    </a>
  </span>
);

const SlimHeader = () => {
  const [isOpen, toggleDropdown] = useState(false);
  const classes = useStyle();
  return (
    <HeaderReactKit type="slim" theme="light">
      <HeaderContent>
        <HeaderBrand tag="div">
          <BrandSlimHeader />
        </HeaderBrand>
        <HeaderLinkZone>
          <HeaderToggler className={classes.navToggler} onClick={() => toggleDropdown(!isOpen)} tag="div" role="button">
            <BrandSlimHeader />
            <Icon icon="it-expand" size="sm" color="primary" />
          </HeaderToggler>
          <Collapse isOpen={isOpen} header>
            <div className="link-list-wrapper">
              <ul className="link-list pl-0 pr-0">
                <li className={classes.verticalGroupDelimiter}>
                  <a
                    href="https://pianotriennale-ict.italia.it/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Piano Triennale: (Link esterno) Vai a Piano Triennale"
                  >
                    Piano Triennale
                  </a>
                </li>
                <li aria-hidden={true}>
                  <hr className={classes.horizontalGroupDelimiter} />
                </li>
                <li>
                  <a
                    href="https://developers.italia.it/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Developers Italia: (Link esterno) Vai a Developers Italia"
                  >
                    Developers
                  </a>
                </li>
                <li className={classes.verticalGroupDelimiter}>
                  <a
                    href="https://designers.italia.it/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Designers Italia: (Link esterno) Vai a Designers Italia"
                  >
                    Designers
                  </a>
                </li>
                <li aria-hidden={true}>
                  <hr className={classes.horizontalGroupDelimiter} />
                </li>
                <li>
                  <a
                    href="https://forum.italia.it/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Forum Italia: (Link esterno) Vai a Forum Italia"
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.italia.it/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Docs Italia: (Link esterno) Vai a Docs Italia"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/italia/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Italia: (Link esterno) Vai a GitHub Italia"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </Collapse>
        </HeaderLinkZone>
      </HeaderContent>
    </HeaderReactKit>
  );
};

const CenterHeader = () => (
  <HeaderReactKit type="center" theme="light">
    <HeaderContent>
      <div className="it-brand-wrapper">
        <Link to="/">
          <div className="it-brand-text">
            <div className="d-flex align-items-center">
              <img className="icon" src={logo} alt="Cloud PA logo" />
              <div>
                <div className="h3 mb-0">Cloud Italia</div>
                <div className="small">Il Cloud della Pubblica Amministrazione</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <HeaderRightZone>
        <HeaderSocialsZone label="Seguici su">
          <ul>
            <li>
              <a
                href="https://medium.com/team-per-la-trasformazione-digitale/infrastrutture-digitali-cloud/home"
                className="d-block mr-3"
                target="_blank"
                rel="noreferrer"
                aria-label="Medium: (Link esterno) Vai al Medium di cloud.italia.it"
              >
                <Icon icon="it-medium" />
              </a>
            </li>
          </ul>
        </HeaderSocialsZone>
      </HeaderRightZone>
    </HeaderContent>
  </HeaderReactKit>
);

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toogleMenu = () => setIsOpen(!isOpen);
  return (
    <HeaderReactKit type="navbar" theme="light">
      <HeaderContent expand="lg" megamenu aria-label="Menu principale">
        <HeaderToggler
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Mostra / Nascondi la navigazione"
        >
          <Icon icon="it-burger" />
        </HeaderToggler>

        <HeaderNav isOpen={isOpen} onCloseMenu={toogleMenu}>
          <div className="menu-wrapper">
            <Nav navbar>
              <NavItem>
                <Link to="/strategia-cloud-pa/" className="nav-link" activeClassName="active" onClick={closeMenu}>
                  <span className="font-weight-semibold">Strategia cloud</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/programma-abilitazione-cloud/"
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">Programma di abilitazione</span>
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  to="/qualificazione-servizi-cloud/"
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">Qualificazione dei servizi</span>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/catalogo-servizi-cloud/" className="nav-link" activeClassName="active" onClick={closeMenu}>
                  <span className="font-weight-semibold">Cos&apos;è il catalogo dei servizi</span>
                </Link>
              </NavItem>
            </Nav>
            <Nav navbar className="navbar-secondary">
              <NavItem>
                <a
                  href="https://cloud.italia.it/marketplace"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Cloud Marketplace: (Link esterno) Vai al Cloud Marketplace"
                  className="nav-link"
                >
                  <span className="font-weight-semibold">Cloud Marketplace</span>
                  <Icon className="ml-2 pb-1" color="primary" icon="it-external-link" size="sm" />
                </a>
              </NavItem>
            </Nav>
          </div>
        </HeaderNav>
      </HeaderContent>
    </HeaderReactKit>
  );
};

export const Header = () => (
  <header>
    <Headers>
      <SlimHeader />
      <div className="it-nav-wrapper">
        <CenterHeader />
        <NavHeader />
      </div>
    </Headers>
  </header>
);
