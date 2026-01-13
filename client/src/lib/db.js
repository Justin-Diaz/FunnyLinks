import Dexie from 'dexie';
import ogScraper from './ogScraper.js';

export const db = new Dexie('FunnyLinksDB');

db.version(1).stores({
  links: '++id, title, description, ogImageUrl, siteUrl',
});

export const addLink = async (url) => {
  const ogData = await ogScraper(url);
  await db.links.add({
    title: ogData.ogTitle || "Sin título",
    description: ogData.ogDescription || "Sin descripción",
    ogImageUrl: ogData.ogImage ? ogData.ogImage[0].url : null,
    siteUrl: url
  });
}

export const updateLink = async (id, data) => {
  await db.links.update(id, data);
}

export const getAllLinks = async () => {
  return await db.links.toArray();
}

export const deleteLink = async (id) => {
  await db.links.delete(id);
}