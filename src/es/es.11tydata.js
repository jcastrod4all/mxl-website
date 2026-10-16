module.exports = {
  lang: "es",
  eleventyComputed: {
    org: (data) => ({ ...data.site.es, url: data.siteUrl }),
    t: (data) => data.i18n.es,
    servicesList: (data) => data.services.es,
    altPath: (data) => {
      const map = data.translationKey && data.translationMap[data.translationKey];
      return (map && map.en) || "/";
    },
  },
};
