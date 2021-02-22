import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb.js';
import { News } from '../components/News.js';

const Notizie = () => (
  <main className="container">
    <Breadcrumb currentPage="Notizie e media" />
    <News />
  </main>
);

export default Notizie;
