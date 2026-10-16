module.exports = {
  lang: "en",
  eleventyComputed: {
    org: (data) => ({ ...data.site.en, url: data.siteUrl }),
    t: (data) => data.i18n.en,
    servicesList: (data) => data.services.en,
    altPath: (data) => {
      const map = data.translationKey && data.translationMap[data.translationKey];
      return (map && map.es) || "/es/";
    },
  },
};
