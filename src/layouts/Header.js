/* eslint-disable max-lines-per-function */
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem,
  Header as HeaderReactKit,
  Headers,
  HeaderContent,
  Icon,
  Nav,
  NavItem,
  HeaderBrand,
  HeaderLinkZone,
  UncontrolledDropdown,
} from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import links from '../../contents/links.yml';
import labels from '../../contents/labels.yml';
import { HeaderNav } from '../components/HeaderNav.js';
import { ExternalLink } from '../components/ExternalLink.js';

const { internalLinks, externalLinks } = links;
const { ariaLabel, headerTitle, headerSubtitle } = labels;
const apply0Important = '0 !important';

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
  subtitle: {
    composes: 'small',
  },
  '@media (max-width: 992px)': {
    verticalGroupDelimiter: {
      borderRight: 'none',
    },
    activeMenu: {
      borderBottom: apply0Important,
      borderLeft: '3px solid #06c !important',
    },
  },
  '@media (max-width: 300px)': {
    subtitle: {
      display: 'none',
    },
  },
  dropdownfixwidth: {
    minWidth: '16em !important',
    '& h3': {
      padding: '0 1em !important',
      '& a': {
        padding: apply0Important,
        fontWeight: 'bold !important',
        borderLeft: apply0Important,
      },
    },
    '& a': {
      padding: '0 1em !important',
      borderLeft: apply0Important,
    },
  },
  linkResetPadding: {
    padding: apply0Important,
  },
  paddingPlaceholder: {
    borderBottom: '3px solid transparent',
  },
  activeMenu: {
    borderBottom: '3px solid #06c',
  },
  mousePointer: { cursor: 'pointer' },
});

const isBrowser = typeof window !== 'undefined';

const BrandSlimHeader = () => (
  <>
    <ExternalLink linkTo={externalLinks.dipartimento.linkTo} ariaLabel={externalLinks.dipartimento.ariaLabel}>
      <span className="d-lg-inline d-none">{externalLinks.dipartimento.label}</span>
      <span className="d-lg-none d-inline">DTD</span>
    </ExternalLink>
    <span className="mx-1"> + </span>
    <ExternalLink linkTo={externalLinks.acn.linkTo} ariaLabel={externalLinks.acn.ariaLabel}>
      <span className="d-lg-inline d-none">{externalLinks.acn.label}</span>
      <span className="d-lg-none d-inline">{externalLinks.acn.labelMobile}</span>
    </ExternalLink>
  </>
);

const SlimHeader = () => {
  const [isOpen, toggleDropdown] = useState(false);
  const classes = useStyle();

  function handleWindowSizeChange() {
    toggleDropdown(window.innerWidth <= 768 ? false : true);
  }

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <HeaderReactKit type="slim" theme="light">
      <HeaderContent>
        <HeaderBrand tag="div">
          <span className="text-primary font-weight-semibold small">
            <BrandSlimHeader />
          </span>
        </HeaderBrand>
        <HeaderLinkZone aria-label={ariaLabel.slimMenu}>
          <div className={classes.navToggler}>
            <BrandSlimHeader />
            <a
              onClick={() => toggleDropdown(!isOpen)}
              aria-expanded={isOpen}
              aria-label={ariaLabel.toggleMenu}
              href="#"
              className="it-opener d-lg-none d-inline navbar-toggler"
            >
              <Icon icon="it-expand" size="sm" color="primary" />
            </a>
          </div>
          <Collapse isOpen={isOpen} header>
            <div className="link-list-wrapper">
              <ul className="link-list pl-0 pr-0 mr-0">
                <li className={classes.verticalGroupDelimiter}>
                  <ExternalLink
                    linkTo={externalLinks.pianoTriennale.linkTo}
                    ariaLabel={externalLinks.pianoTriennale.ariaLabel}
                  >
                    {externalLinks.pianoTriennale.label}
                  </ExternalLink>
                </li>
                <li aria-hidden={true}>
                  <hr className={classes.horizontalGroupDelimiter} />
                </li>
                <li>
                  <ExternalLink linkTo={externalLinks.developers.linkTo} ariaLabel={externalLinks.developers.ariaLabel}>
                    {externalLinks.developers.label}
                  </ExternalLink>
                </li>
                <li className={classes.verticalGroupDelimiter}>
                  <ExternalLink linkTo={externalLinks.designers.linkTo} ariaLabel={externalLinks.designers.ariaLabel}>
                    {externalLinks.designers.label}
                  </ExternalLink>
                </li>
                <li aria-hidden={true}>
                  <hr className={classes.horizontalGroupDelimiter} />
                </li>
                <li>
                  <ExternalLink linkTo={externalLinks.forum.linkTo} ariaLabel={externalLinks.forum.ariaLabel}>
                    {externalLinks.forum.label}
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink linkTo={externalLinks.docs.linkTo} ariaLabel={externalLinks.docs.ariaLabel}>
                    {externalLinks.docs.label}
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink linkTo={externalLinks.github.linkTo} ariaLabel={externalLinks.github.ariaLabel}>
                    {externalLinks.github.label}
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </Collapse>
        </HeaderLinkZone>
      </HeaderContent>
    </HeaderReactKit>
  );
};

const CenterHeader = () => {
  const classes = useStyle();
  return (
    <HeaderReactKit type="center" theme="light">
      <HeaderContent>
        <div className="it-brand-wrapper">
          <Link to="/">
            <div className="it-brand-text pr-0">
              <div className="d-flex align-items-center">
                <img className="icon" src="/assets/cloud-logo.svg" alt="Logo Cloud Italia" />
                <div>
                  <div className="h3 mb-0">{headerTitle}</div>
                  <div className={classes.subtitle}>{headerSubtitle}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </HeaderContent>
    </HeaderReactKit>
  );
};

const NavHeader = () => {
  const classes = useStyle();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toogleMenu = () => setIsOpen(!isOpen);
  const [openFirst, toggleFirst] = useState(false);
  const [openSecond, toggleSecond] = useState(false);
  const [openThird, toggleThird] = useState(false);
  const [activeView, SetActiveView] = useState({
    strategy: false,
    abilitazionePa: false,
    qualificazione: false,
    notizie: false,
    glossario: false,
  });
  const [dropDownOpened, SetDropDownOpened] = useState(null);
  let pathName = '';
  if (isBrowser) {
    pathName = window.location.pathname;
  }

  useEffect(() => {
    const checkActiveView = window.location.pathname;
    isOpen && setIsOpen(!isOpen);
    toggleFirst(false);
    toggleSecond(false);
    toggleThird(false);
    if (checkActiveView.includes('strategia-cloud-pa')) {
      SetActiveView({ strategy: true, abilitazionePa: false, qualificazione: false, notizie: false, glossario: false });
    } else if (checkActiveView.includes('programma-abilitazione-cloud')) {
      SetActiveView({ strategy: false, abilitazionePa: true, qualificazione: false, notizie: false, glossario: false });
    } else if (checkActiveView.includes('abilitazione')) {
      SetActiveView({ strategy: false, abilitazionePa: true, qualificazione: false, notizie: false, glossario: false });
    } else if (checkActiveView.includes('qualificazione-servizi-cloud')) {
      SetActiveView({ strategy: false, abilitazionePa: false, qualificazione: true, notizie: false, glossario: false });
    } else if (checkActiveView.includes('notizie')) {
      SetActiveView({ strategy: false, abilitazionePa: false, qualificazione: false, notizie: true, glossario: false });
    } else if (checkActiveView.includes('glossario')) {
      SetActiveView({ strategy: false, abilitazionePa: false, qualificazione: false, notizie: false, glossario: true });
    } else {
      SetActiveView({
        strategy: false,
        abilitazionePa: false,
        qualificazione: false,
        notizie: false,
        glossario: false,
      });
    }
    // eslint-disable-next-line
  }, [pathName]);

  const manageDropDowns = (menuPos) => {
    toggleFirst(false);
    toggleSecond(false);
    toggleThird(false);
    if (menuPos !== dropDownOpened) {
      SetDropDownOpened(menuPos);
    } else if (menuPos === dropDownOpened && window.innerWidth < 768) {
      switch (menuPos) {
        case 1:
          toggleFirst(true);
          break;
        case 2:
          toggleSecond(true);
          break;
        case 3:
          toggleThird(true);
          break;
        default:
          null;
      }
    }
    switch (menuPos) {
      case 1:
        !openFirst && toggleFirst(true);
        break;
      case 2:
        !openSecond && toggleSecond(true);
        break;
      case 3:
        !openThird && toggleThird(true);
        break;
      default:
        null;
    }
  };

  return (
    <HeaderReactKit type="navbar" theme="light">
      <HeaderContent expand="lg" megamenu aria-label={ariaLabel.menu} className="px-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={ariaLabel.toggleMenu}
          aria-expanded={isOpen}
          type="button"
          className="custom-navbar-toggler navbar-toggler"
        >
          <Icon icon="it-burger" />
        </button>

        <HeaderNav isOpen={isOpen} onCloseMenu={toogleMenu}>
          <div className="menu-wrapper">
            <Nav navbar>
              <UncontrolledDropdown
                nav
                inNavbar
                className={`mr-3 ${(classes.mousePointer, classes.paddingPlaceholder)} ${activeView.strategy && classes.activeMenu
                  }`}
                isOpen={openFirst}
                toggle={() => manageDropDowns(1)}
              >
                <DropdownToggle nav caret>
                  <span className="font-weight-semibold">{internalLinks.strategy.label}</span>
                </DropdownToggle>
                <DropdownMenu className={classes.dropdownfixwidth}>
                  <LinkList>
                    <LinkListItem tag="div" header size="medium">
                      <Link
                        to={internalLinks.strategy.linkTo}
                        className="nav-link"
                        activeClassName="active"
                        partiallyActive={true}
                      >
                        <span>{internalLinks.strategy.subTitle}</span>
                      </Link>
                    </LinkListItem>
                    <LinkListItem divider />
                    <LinkListItem tag="div" size="medium">
                      <Link
                        to={internalLinks.pnrrStrategy.linkTo3}
                        className="nav-link"
                        activeClassName="active"
                        partiallyActive={true}
                      >
                        <span>{internalLinks.pnrrStrategy.label3}</span>
                      </Link>
                    </LinkListItem>
                    <LinkListItem tag="div" size="medium">
                      <Link
                        to={internalLinks.pnrrStrategy.linkTo}
                        className="nav-link"
                        activeClassName="active"
                        partiallyActive={true}
                      >
                        <span>{internalLinks.pnrrStrategy.label}</span>
                      </Link>
                    </LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown
                nav
                inNavbar
                className={`mr-3 ${(classes.mousePointer, classes.paddingPlaceholder)} ${activeView.abilitazionePa && classes.activeMenu
                  }`}
                isOpen={openSecond}
                toggle={() => manageDropDowns(2)}
              >
                <DropdownToggle nav caret>
                  <span className="font-weight-semibold">{internalLinks.enablement.label}</span>
                </DropdownToggle>
                <DropdownMenu className={classes.dropdownfixwidth}>
                  <LinkList>
                    <LinkListItem tag="div" header size="medium">
                      <Link
                        to={internalLinks.enablement.linkTo}
                        className="nav-link"
                        activeClassName="active"
                        partiallyActive={true}
                      >
                        <span>{internalLinks.enablement.subTitle}</span>
                      </Link>
                    </LinkListItem>
                    <LinkListItem divider />
                    <LinkListItem tag="div" size="medium">
                      <Link
                        to={internalLinks.classifServizi.linkTo}
                        className="nav-link"
                        activeClassName="active"
                        partiallyActive={true}
                      >
                        <span>{internalLinks.classifServizi.label}</span>
                      </Link>
                    </LinkListItem>
                    <LinkListItem tag="div" size="medium">
                      <Link
                        to={internalLinks.avvisiPnrr.linkTo}
                        className="nav-link"
                        activeClassName="active"
                        partiallyActive={true}
                      >
                        <span>{internalLinks.avvisiPnrr.label}</span>
                      </Link>
                    </LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown
                nav
                inNavbar
                className={`mr-3 ${(classes.mousePointer, classes.paddingPlaceholder)} ${activeView.qualificazione && classes.activeMenu
                  }`}
                isOpen={openThird}
                toggle={() => manageDropDowns(3)}
              >
                <DropdownToggle nav caret>
                  <span className="font-weight-semibold">{internalLinks.services.label}</span>
                </DropdownToggle>
                <DropdownMenu className={classes.dropdownfixwidth}>
                  <LinkList>
                    <LinkListItem tag="div" header size="medium">
                      <Link
                        to={internalLinks.services.linkTo}
                        className="nav-link"
                        activeClassName="active"
                        partiallyActive={true}
                      >
                        <span>{internalLinks.services.subTitle}</span>
                      </Link>
                    </LinkListItem>
                    <LinkListItem divider />
                    <LinkListItem tag="div" size="medium">
                      <Link
                        to={internalLinks.qualificazione.linkTo}
                        className="nav-link"
                        activeClassName="active"
                        partiallyActive={true}
                      >
                        <span>{internalLinks.qualificazione.label}</span>
                      </Link>
                    </LinkListItem>
                    <LinkListItem tag="div" size="medium">
                      <Link
                        to={internalLinks.quadroregolatorio.linkTo}
                        className="nav-link"
                        activeClassName="active"
                        partiallyActive={true}
                      >
                        <span>{internalLinks.quadroregolatorio.label}</span>
                      </Link>
                    </LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link
                  to={internalLinks.news.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold" style={{ marginBottom: '3px' }}>
                    {internalLinks.news.label}
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.glossary.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold" style={{ marginBottom: '3px' }}>
                    {internalLinks.glossary.label}
                  </span>
                </Link>
              </NavItem>
            </Nav>
            <Nav navbar className="navbar-secondary">
              <NavItem className={classes.paddingPlaceholder}>
                <ExternalLink
                  linkTo={externalLinks.marketplace.linkTo}
                  ariaLabel={externalLinks.marketplace.ariaLabel}
                  className="nav-link pr-0"
                >
                  <span className="font-weight-semibold">{externalLinks.marketplace.label}</span>
                  <Icon
                    className="ml-2 pb-1"
                    color="primary"
                    icon="it-external-link"
                    size="sm"
                    focusable={false}
                    role="img"
                    aria-label={ariaLabel.externalLink}
                  />
                </ExternalLink>
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
      <div className="py-2 py-lg-1 lightgrey-bg-a2">
        <div className="container">
          <section className="ml-3 ml-lg-5 d-flex flex-column flex-md-row flex-sm-column align-items-start align-items-lg-baseline justify-content-between justify-content-lg-start">
            <div className="pt-1 pb-1 pb-md-1 d-lg-flex align-items-lg-center">
              <h3 className="h5 font-weight-bold pr-lg-3 pt-1">Novità PNRR</h3>
              <div className="pr-lg-4">Scopri come accedere ai fondi per la migrazione al cloud di Comuni e scuole</div>
            </div>
            <a
              href="https://areariservata.padigitale2026.gov.it/Pa_digitale2026_avvisi"
              className="btn text-primary text-uppercase ml-0 ml-md-4 pt-0 pt-md-3 pb-3 px-0"
              target="_blank"
              rel="noreferrer"
              aria-label="Primi avvisi per la digitalizzazione di Comuni e scuole (link esterno)"
            >
              Vai al sito PA digitale 2026
            </a>
          </section>
        </div>
      </div>
    </Headers>
  </header>
);
