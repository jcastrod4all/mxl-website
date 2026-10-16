/**
 * Static translationKey -> { en, es } URL map, built directly from source
 * data (not from Eleventy's computed-data cascade). This sidesteps a known
 * Eleventy limitation where `eleventyComputed` values on paginated templates
 * are not reliably reflected when read from `collections.all` by sibling
 * pages (only the first paginated item's computed value is visible there).
 * Used by partials/hreflang.njk, sitemap.njk, and the language switcher.
 */
const servicesEn = require("./services/en.json");
const servicesEs = require("./services/es.json");

const staticPages = {
  home: { en: "/", es: "/es/" },
  about: { en: "/about/", es: "/es/nosotros/" },
  contact: { en: "/contact/", es: "/es/contacto/" },
  services: { en: "/services/", es: "/es/servicios/" },
};

const serviceEntries = {};

for (const service of servicesEn) {
  serviceEntries[service.translationKey] = {
    ...(serviceEntries[service.translationKey] || {}),
    en: `/services/${service.slug}/`,
  };
}

for (const service of servicesEs) {
  serviceEntries[service.translationKey] = {
    ...(serviceEntries[service.translationKey] || {}),
    es: `/es/servicios/${service.slug}/`,
  };
}

module.exports = { ...staticPages, ...serviceEntries };
