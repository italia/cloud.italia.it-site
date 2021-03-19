import React from 'react';
import { Layout } from './src/layouts/Layout.js';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
