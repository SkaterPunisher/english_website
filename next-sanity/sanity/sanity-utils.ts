import { clientConfig } from '@/config/client-config';
import { createClient, groq } from 'next-sanity';

export const getProjects = async () =>
  createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        category
    }`
  );
