import { graphql, Link, useStaticQuery } from 'gatsby';
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
} from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import logo from '../images/cloud-logo.svg';
import links from '../../contents/links.yml';
import labels from '../../contents/labels.yml';
import { HeaderNav } from '../components/HeaderNav.js';
import { ExternalLink } from '../components/ExternalLink.js';

const { internalLinks, externalLinks } = links;
const { ariaLabel } = labels;

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

const SlimHeader = () => {
  const [isOpen, toggleDropdown] = useState(false);
  const classes = useStyle();
  return (
    <HeaderReactKit type="slim" theme="light">
      <HeaderContent>
        <HeaderBrand tag="div">
          <span className="text-primary font-weight-semibold small">
            <ExternalLink linkTo={externalLinks.dipartimento.linkTo} ariaLabel={externalLinks.dipartimento.ariaLabel}>
              {externalLinks.dipartimento.label}
            </ExternalLink>
            <span className="mx-1"> + </span>
            <ExternalLink linkTo={externalLinks.agid.linkTo} ariaLabel={externalLinks.agid.ariaLabel}>
              {externalLinks.agid.label}
            </ExternalLink>
          </span>
        </HeaderBrand>
        <HeaderLinkZone>
          <HeaderToggler className={classes.navToggler} onClick={() => toggleDropdown(!isOpen)} tag="div" role="button">
            <ExternalLink linkTo={externalLinks.dipartimento.linkTo} ariaLabel={externalLinks.dipartimento.ariaLabel}>
              {externalLinks.dipartimento.label}
            </ExternalLink>
            <span className="mx-1"> + </span>
            <ExternalLink linkTo={externalLinks.agid.linkTo} ariaLabel={externalLinks.agid.ariaLabel}>
              {externalLinks.agid.label}
            </ExternalLink>
          </HeaderToggler>
          <Collapse isOpen={isOpen} header>
            <div className="link-list-wrapper">
              <ul className="link-list pl-0 pr-0">
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
  const {
    site: {
      siteMetadata: { title, subtitle },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `
  );
  return (
    <HeaderReactKit type="center" theme="light">
      <HeaderContent>
        <div className="it-brand-wrapper">
          <Link to="/">
            <div className="it-brand-text">
              <div className="d-flex align-items-center">
                <img className="icon" src={logo} alt="Cloud PA logo" />
                <div>
                  <div className="h3 mb-0">{title}</div>
                  <div className="small">{subtitle}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* <HeaderRightZone> */}
        {/*  <HeaderSocialsZone label="Seguici su"> */}
        {/*    <ul> */}
        {/*      <li> */}
        {/*        <a */}
        {/*          href="https://medium.com/team-per-la-trasformazione-digitale/infrastrutture-digitali-cloud/home" */}
        {/*          className="d-block mr-3" */}
        {/*          target="_blank" */}
        {/*          rel="noreferrer" */}
        {/*          aria-label="Medium: (Link esterno) Vai al Medium di cloud.italia.it" */}
        {/*        > */}
        {/*          <Icon icon="it-medium" /> */}
        {/*        </a> */}
        {/*      </li> */}
        {/*    </ul> */}
        {/*  </HeaderSocialsZone> */}
        {/* </HeaderRightZone> */}
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
      <HeaderContent expand="lg" megamenu aria-label={ariaLabel.menu}>
        <HeaderToggler onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={ariaLabel.toggleMenu}>
          <Icon icon="it-burger" />
        </HeaderToggler>

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
            </Nav>
            <Nav navbar className="navbar-secondary">
              <NavItem>
                <ExternalLink
                  linkTo={externalLinks.marketplace.linkTo}
                  ariaLabel={externalLinks.marketplace.ariaLabel}
                  className="nav-link"
                >
                  <span className="font-weight-semibold">{externalLinks.marketplace.label}</span>
                  <Icon className="ml-2 pb-1" color="primary" icon="it-external-link" size="sm" />
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
