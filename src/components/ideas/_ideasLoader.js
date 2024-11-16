const requireIdea = require.context('./', true, /^\.\/(?!_)[a-zA-Z]+\.js$/);

const ideaMap = (() => {
  const map = {};
  requireIdea.keys().forEach((fileName) => {
    if (fileName.includes('_IdeaTemplate')) return; // Skip self
    const ideaModule = requireIdea(fileName);
    if (ideaModule.ideaMetadata) {
      const id = fileName.replace('./', '').replace('.js', '').toLowerCase();
      map[id] = {
        metadata: ideaModule.ideaMetadata,
      };
    }
  });
  return map;
})();

export default ideaMap;
