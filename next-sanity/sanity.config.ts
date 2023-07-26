import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: '3rv2br1w',
  dataset: 'production',
  title: 'English website',
  apiVersion: '2023-03-04',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn: false,
});

export default config;
