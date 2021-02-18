import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => (
  <>
    <Helmet title="Pagina non trovata" />
    <div>Page not found</div>
    <Link to="/">Go home</Link>
  </>
);

export default NotFoundPage;
