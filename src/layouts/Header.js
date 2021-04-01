import { Link } from 'gatsby';
import React, { useState } from 'react';
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
});

const BrandSlimHeader = () => (
  <>
    <ExternalLink linkTo={externalLinks.dipartimento.linkTo} ariaLabel={externalLinks.dipartimento.ariaLabel}>
      <span className="d-inline d-lg-none d-xl-inline">{externalLinks.dipartimento.label}</span>
      <span className="d-none d-lg-inline d-xl-none">DTD</span>
    </ExternalLink>
    <span className="mx-1"> + </span>
    <ExternalLink linkTo={externalLinks.agid.linkTo} ariaLabel={externalLinks.agid.ariaLabel}>
      <span className="d-inline d-lg-none d-xl-inline">{externalLinks.agid.label}</span>
      <span className="d-none d-lg-inline d-xl-none">AGID</span>
    </ExternalLink>
  </>
);

const SlimHeader = () => {
  const [isOpen, toggleDropdown] = useState(false);
  const classes = useStyle();
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
              <NavItem>
                <Link
                  to={internalLinks.strategy.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.strategy.label}</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.enablement.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.enablement.label}</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.services.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.services.label}</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.catalogue.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.catalogue.label}</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.glossary.linkTo}
                  className="nav-link"
                  activeClassName="active"
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
    </Headers>
  </header>
);
