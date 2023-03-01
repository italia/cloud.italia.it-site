import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Header as HeaderReactKit,
  Headers,
  HeaderContent,
  Icon,
  Nav,
  NavItem,
  HeaderBrand,
  HeaderLinkZone,
} from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import links from '../../contents/links.yml';
import labels from '../../contents/labels.yml';
import { HeaderNav } from '../components/HeaderNav.js';
import { ExternalLink } from '../components/ExternalLink.js';

const { internalLinks, externalLinks } = links;
const { ariaLabel, headerTitle, headerSubtitle } = labels;

const borderNoneFocus = 'none !important';
const activeBorderBottom = '3px solid #06c !important';
const transparentImportant = 'transparent !important';

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
  },
  '@media (max-width: 300px)': {
    subtitle: {
      display: 'none',
    },
  },
  trickFocus: {
    '& a:focus:not(:focus-visible)': {
      borderColor: transparentImportant,
      boxShadow: borderNoneFocus,
      outline: borderNoneFocus,
    },
  },
  trickFocusForLink: {
    '& a:focus:not(:focus-visible)': {
      borderColor: transparentImportant,
      boxShadow: borderNoneFocus,
      outline: borderNoneFocus,
      borderBottom: activeBorderBottom,
    },
  },
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
          <div className={classes.trickFocus}>
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
              <NavItem className={classes.trickFocusForLink}>
                <Link
                  to={internalLinks.strategy.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.strategy.label}</span>
                </Link>
              </NavItem>
              <NavItem className={classes.trickFocusForLink}>
                <Link
                  to={internalLinks.enablement.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.enablement.label}</span>
                </Link>
              </NavItem>
              <NavItem className={classes.trickFocusForLink}>
                <Link
                  to={internalLinks.services.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.services.label}</span>
                </Link>
              </NavItem>
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
              </NavItem> */}
              <NavItem className={classes.trickFocusForLink}>
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
              <NavItem className={classes.trickFocusForLink}>
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
            </Nav>
            <Nav navbar className="navbar-secondary">
              <NavItem>
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
