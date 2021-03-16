import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import { externalLinkPropType, internalLinkPropType } from '../utils/proptypes.js';
import { HeaderNav } from './HeaderNav.js';
import { ExternalLink } from './ExternalLink.js';

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

const SlimHeader = ({ links }) => {
  const [isOpen, toggleDropdown] = useState(false);
  const classes = useStyle();
  return (
    <HeaderReactKit type="slim" theme="light">
      <HeaderContent>
        <HeaderBrand tag="div">
          <span className="text-primary font-weight-semibold small">
            <ExternalLink linkTo={links.dipartimento.linkTo} ariaLabel={links.dipartimento.ariaLabel}>
              {links.dipartimento.label}
            </ExternalLink>
            <span className="mx-1"> + </span>
            <ExternalLink linkTo={links.agid.linkTo} ariaLabel={links.agid.ariaLabel}>
              {links.agid.label}
            </ExternalLink>
          </span>
        </HeaderBrand>
        <HeaderLinkZone>
          <HeaderToggler className={classes.navToggler} onClick={() => toggleDropdown(!isOpen)} tag="div" role="button">
            <ExternalLink linkTo={links.dipartimento.linkTo} ariaLabel={links.dipartimento.ariaLabel}>
              {links.dipartimento.label}
            </ExternalLink>
            <span className="mx-1"> + </span>
            <ExternalLink linkTo={links.agid.linkTo} ariaLabel={links.agid.ariaLabel}>
              {links.agid.label}
            </ExternalLink>
          </HeaderToggler>
          <Collapse isOpen={isOpen} header>
            <div className="link-list-wrapper">
              <ul className="link-list pl-0 pr-0">
                <li className={classes.verticalGroupDelimiter}>
                  <ExternalLink linkTo={links.pianoTriennale.linkTo} ariaLabel={links.pianoTriennale.ariaLabel}>
                    {links.pianoTriennale.label}
                  </ExternalLink>
                </li>
                <li aria-hidden={true}>
                  <hr className={classes.horizontalGroupDelimiter} />
                </li>
                <li>
                  <ExternalLink linkTo={links.developers.linkTo} ariaLabel={links.developers.ariaLabel}>
                    {links.developers.label}
                  </ExternalLink>
                </li>
                <li className={classes.verticalGroupDelimiter}>
                  <ExternalLink linkTo={links.designers.linkTo} ariaLabel={links.designers.ariaLabel}>
                    {links.designers.label}
                  </ExternalLink>
                </li>
                <li aria-hidden={true}>
                  <hr className={classes.horizontalGroupDelimiter} />
                </li>
                <li>
                  <ExternalLink linkTo={links.forum.linkTo} ariaLabel={links.forum.ariaLabel}>
                    {links.forum.label}
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink linkTo={links.docs.linkTo} ariaLabel={links.docs.ariaLabel}>
                    {links.docs.label}
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink linkTo={links.github.linkTo} ariaLabel={links.github.ariaLabel}>
                    {links.github.label}
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

SlimHeader.propTypes = {
  links: PropTypes.exact({
    pianoTriennale: externalLinkPropType,
    developers: externalLinkPropType,
    designers: externalLinkPropType,
    forum: externalLinkPropType,
    docs: externalLinkPropType,
    github: externalLinkPropType,
    dipartimento: externalLinkPropType,
    agid: externalLinkPropType,
  }).isRequired,
};

const CenterHeader = ({ title, subtitle }) => (
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

CenterHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const NavHeader = ({ links, marketPlace }) => {
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
                <Link to={links.strategy.linkTo} className="nav-link" activeClassName="active" onClick={closeMenu}>
                  <span className="font-weight-semibold">{links.strategy.label}</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={links.enablement.linkTo} className="nav-link" activeClassName="active" onClick={closeMenu}>
                  <span className="font-weight-semibold">{links.enablement.label}</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={links.services.linkTo} className="nav-link" activeClassName="active" onClick={closeMenu}>
                  <span className="font-weight-semibold">{links.services.label}</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={links.catalogue.linkTo} className="nav-link" activeClassName="active" onClick={closeMenu}>
                  <span className="font-weight-semibold">{links.catalogue.label}</span>
                </Link>
              </NavItem>
            </Nav>
            <Nav navbar className="navbar-secondary">
              <NavItem>
                <ExternalLink linkTo={marketPlace.linkTo} ariaLabel={marketPlace.ariaLabel} className="nav-link">
                  <span className="font-weight-semibold">{marketPlace.label}</span>
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

NavHeader.propTypes = {
  links: PropTypes.exact({
    strategy: internalLinkPropType.isRequired,
    enablement: internalLinkPropType.isRequired,
    services: internalLinkPropType.isRequired,
    catalogue: internalLinkPropType.isRequired,
  }).isRequired,
  marketPlace: externalLinkPropType.isRequired,
};

export const Header = () => {
  const {
    linksYaml: { internalLinks, externalLinks },
    site: {
      siteMetadata: { title, subtitle },
    },
  } = useStaticQuery(
    graphql`
      query {
        linksYaml {
          internalLinks {
            strategy {
              label
              linkTo
            }
            enablement {
              label
              linkTo
            }
            services {
              label
              linkTo
            }
            catalogue {
              label
              linkTo
            }
          }
          externalLinks {
            pianoTriennale {
              ariaLabel
              label
              linkTo
            }
            forum {
              ariaLabel
              label
              linkTo
            }
            developers {
              ariaLabel
              label
              linkTo
            }
            designers {
              ariaLabel
              label
              linkTo
            }
            docs {
              ariaLabel
              label
              linkTo
            }
            github {
              ariaLabel
              label
              linkTo
            }
            dipartimento {
              ariaLabel
              label
              linkTo
            }
            agid {
              ariaLabel
              label
              linkTo
            }
            marketplace {
              ariaLabel
              label
              linkTo
            }
          }
        }
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
    <header>
      <Headers>
        <SlimHeader links={externalLinks} />
        <div className="it-nav-wrapper">
          <CenterHeader title={title} subtitle={subtitle} />
          <NavHeader links={internalLinks} marketPlace={externalLinks.marketplace} />
        </div>
      </Headers>
    </header>
  );
};
