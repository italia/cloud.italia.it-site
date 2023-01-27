import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Dropdown,
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
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink
} from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import links from '../../contents/links.yml';
import labels from '../../contents/labels.yml';
import { HeaderNav } from '../components/HeaderNav.js';
import { ExternalLink } from '../components/ExternalLink.js';

const { internalLinks, externalLinks } = links;
const { ariaLabel, headerTitle, headerSubtitle } = labels;

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
      borderBottom: "0 !important",
      borderLeft: "3px solid #06c !important"
    },
  },
  '@media (max-width: 300px)': {
    subtitle: {
      display: 'none',
    },
  },
  dropdownfixwidth:{
    minWidth: "16em !important",
    '& h3': {
      padding: "0 1em !important",
      '& a': {
      padding: "0 !important",
      fontWeight: "bold !important",
      borderLeft: "0 !important",
    }
    },
    '& a': {
      padding: "0 1em !important",
      borderLeft: "0 !important",
    }
  },
  linkResetPadding: {
    padding: "0 !important"
  },
  activeMenu: {
    borderBottom: "3px solid #06c"
  },
  mousePointer: {cursor: "pointer"},
});

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
  const [openFourth, toggleFourth] = useState(false);
  const [openFifth, toggleFifth] = useState(false);
  const [activeView, SetActiveView] = useState({strategy: false, abilitazionePa: false, qualificazione: false, notizie: false, glossario: false});

  useEffect(() => {
    console.log("CHANGE URL")
    const checkActiveView = window.location.pathname;
    isOpen && setIsOpen(!isOpen);
    if(checkActiveView.includes("strategia-cloud-pa")) {
      SetActiveView({strategy: true, abilitazionePa: false, qualificazione: false, notizie: false, glossario: false})
      toggleFirst(!openFirst);
    } else if(checkActiveView.includes("programma-abilitazione-cloud")) {
      SetActiveView({strategy: false, abilitazionePa: true, qualificazione: false, notizie: false, glossario: false})
    } else if(checkActiveView.includes("qualificazione-servizi-cloud")) {
      SetActiveView({strategy: false, abilitazionePa: false, qualificazione: true, notizie: false, glossario: false})
    } else if(checkActiveView.includes("notizie")) {
      SetActiveView({strategy: false, abilitazionePa: false, qualificazione: false, notizie: true, glossario: false})
    } else if(checkActiveView.includes("glossario")) {
      SetActiveView({strategy: false, abilitazionePa: false, qualificazione: false, notizie: false, glossario: true})
    } else {
      SetActiveView({strategy: false, abilitazionePa: false, qualificazione: false, notizie: false, glossario: false})
    }
  }, [window.location.pathname]);

  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  const manageDropDowns = (menuPos) => {
    toggleFirst(false);
    toggleSecond(false);
    toggleThird(false);
    toggleFourth(false);
    let menuToOpen = 0;
    switch(menuPos) {
      case 1:
        !openFirst && toggleFirst(true);
        break;
      case 2:
        !openSecond && toggleSecond(true);
        break;
      case 3:
        !openThird && toggleThird(true);
        break;
      case 4:
        !openFourth && toggleFourth(true);
        break;
      default:
        null
    }
  }
   return (
    <>
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
              <UncontrolledDropdown nav inNavbar className={`mr-3 ${classes.mousePointer} ${activeView.strategy && classes.activeMenu}`} isOpen={openFirst} toggle={() => manageDropDowns(1)}>
                <DropdownToggle nav caret>
                  <span className="font-weight-semibold">{internalLinks.strategy.label}</span>
                </DropdownToggle>
                <DropdownMenu className={classes.dropdownfixwidth}>
                  <LinkList>
                    <LinkListItem tag='div' header size="medium">
                  <Link
                      to={internalLinks.strategy.linkTo}
                      className="nav-link"
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      <span>Cos'è e perchè</span>
                  </Link>
                </LinkListItem>
                <LinkListItem divider />
                <LinkListItem tag='div' size="medium">
                  <Link
                      to={internalLinks.pnrrStrategy.linkTo3}
                      className="nav-link"
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      <span>{internalLinks.pnrrStrategy.label3}</span>
                  </Link>
                  </LinkListItem>
                <LinkListItem tag='div' size="medium">
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
              <UncontrolledDropdown nav inNavbar className={`mr-3 ${classes.mousePointer} ${activeView.abilitazionePa && classes.activeMenu}`} isOpen={openSecond} toggle={() => manageDropDowns(2)}>
                <DropdownToggle nav caret>
                  <span className="font-weight-semibold">{internalLinks.enablement.label}</span>
                </DropdownToggle>
                <DropdownMenu className={classes.dropdownfixwidth}>
                  <LinkList>
                    <LinkListItem tag='div' header size="medium">
                      <Link
                          to={internalLinks.enablement.linkTo}
                          className="nav-link"
                          activeClassName="active"
                          partiallyActive={true}
                        >
                          <span>Come funziona il programma</span>
                      </Link>
                    </LinkListItem>
                    <LinkListItem divider />
                    <LinkListItem tag='div' size="medium">
                      <ExternalLink
                        linkTo={externalLinks.classificazDati.linkTo}
                        ariaLabel={externalLinks.classificazDati.ariaLabel}
                        className="nav-link pr-0"
                      >
                        <span>{externalLinks.classificazDati.label}</span>
                      </ExternalLink>
                    </LinkListItem>
                    <LinkListItem tag='div' size="medium">
                      <ExternalLink
                        linkTo={externalLinks.candidarsiPNRR.linkTo}
                        ariaLabel={externalLinks.candidarsiPNRR.ariaLabel}
                        className="nav-link pr-0"
                      >
                        <span>{externalLinks.candidarsiPNRR.label}</span>
                    </ExternalLink>
                    </LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar className={`mr-3 ${classes.mousePointer} ${activeView.qualificazione && classes.activeMenu}`} isOpen={openThird} toggle={() => manageDropDowns(3)}>
                <DropdownToggle nav caret>
                  <span className="font-weight-semibold">{internalLinks.services.label}</span>
                </DropdownToggle>
                <DropdownMenu className={classes.dropdownfixwidth}>
                  <LinkList>
                    <LinkListItem tag='div' header size="medium">
                      <Link
                          to={internalLinks.services.linkTo}
                          className="nav-link"
                          activeClassName="active"
                          partiallyActive={true}
                        >
                          <span>Cos'e e come funziona</span>
                      </Link>
                    </LinkListItem>
                    <LinkListItem divider />
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar className={`mr-3 ${classes.mousePointer} ${activeView.notizie && classes.activeMenu}`} isOpen={openFourth} toggle={() => manageDropDowns(4)}>
                <DropdownToggle nav caret>
                  <span className="font-weight-semibold">{internalLinks.news.label}</span>
                </DropdownToggle>
                <DropdownMenu className={classes.dropdownfixwidth}>
                  <LinkList>
                    <LinkListItem tag='div' header size="medium">
                      <Link
                          to={internalLinks.news.linkTo}
                          className="nav-link"
                          activeClassName="active"
                          partiallyActive={true}
                        >
                          <span>Cos'e e come funziona</span>
                      </Link>
                    </LinkListItem>
                    <LinkListItem divider />
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <Link
                  to={internalLinks.strategy.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.strategy.label}</span>
                </Link>
              </NavItem> */}
              {/* <NavItem>
                <Link
                  to={internalLinks.enablement.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.enablement.label}</span>
                </Link>
              </NavItem> */}
              {/* <NavItem>
                <Link
                  to={internalLinks.services.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.services.label}</span>
                </Link>
              </NavItem> */}
              {/* <NavItem>
                <Link
                  to={internalLinks.catalogue.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.catalogue.label}</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.news.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.news.label}</span>
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
                  <span className="font-weight-semibold">{internalLinks.glossary.label}</span>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="font-weight-semibold">Dropdown item</span>
                </DropdownToggle>
                <DropdownMenu>
                  <LinkList>
                    <LinkListItem header>Header</LinkListItem>
                    <LinkListItem>
                      <span>Link list 1</span>
                    </LinkListItem>
                    <LinkListItem>
                      <span>Link list 2</span>
                    </LinkListItem>
                    <LinkListItem>
                      <span>Link list 3</span>
                    </LinkListItem>
                    <LinkListItem divider />
                    <LinkListItem>
                      <span>Link list 4</span>
                    </LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown> */}

            </Nav>
            <Nav navbar className="navbar-secondary">
            <UncontrolledDropdown nav inNavbar className="mr-3">
                <DropdownToggle nav caret tag="a">
                  <span className="font-weight-semibold">{externalLinks.marketplace.label}</span>
                </DropdownToggle>
                <DropdownMenu className={classes.dropdownfixwidth}>
                  <LinkList>
                    <LinkListItem header href={externalLinks.marketplace.linkTo}>
                          <span>Visista il {externalLinks.marketplace.label}</span>
                          <Icon
                            className="ml-2 pb-1"
                            color="primary"
                            icon="it-external-link"
                            size="sm"
                            focusable={false}
                            role="img"
                            aria-label={ariaLabel.externalLink}
                          />
                    </LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
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
              </NavItem> */}
            </Nav>
          </div>
        </HeaderNav>
      </HeaderContent>
    </HeaderReactKit>
    {/* <HeaderReactKit type="navbar" theme="light">
      <HeaderContent expand="lg" megamenu aria-label={ariaLabel.menu} className="px-2">
        <Dropdown className={`pl-3 pr-3 mr-3 ${classes.mousePointer} ${activeView.strategy && classes.activeMenu}`} isOpen={openFirst} toggle={() => toggleFirst(!openFirst)}>
            <DropdownToggle color='light' tag="a">
               <span className="font-weight-semibold">{internalLinks.strategy.label}</span>
            </DropdownToggle>
            <DropdownMenu className={classes.dropdownfixwidth}>
              <LinkList>
                <LinkListItem tag='div' header size="medium">
                  <Link
                      to={internalLinks.strategy.linkTo}
                      className="nav-link"
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      <span>Cos'è e perchè</span>
                  </Link>
                </LinkListItem>
                <LinkListItem divider />
                <LinkListItem tag='div' size="medium">
                  <Link
                      to={internalLinks.pnrrStrategy.linkTo3}
                      className="nav-link"
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      <span>{internalLinks.pnrrStrategy.label3}</span>
                  </Link>
                  </LinkListItem>
                <LinkListItem tag='div' size="medium">
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
        </Dropdown>
      </HeaderContent>
    </HeaderReactKit> */}
    
    </>
  );
};

export const Header = () => {
  return (
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
)};
