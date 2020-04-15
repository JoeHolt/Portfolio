var mappings = {
  mapSkillToColor(type) {
    let map = {
      lang: '#FFB300',
      tool: '#1E88E5',
      dev: '#4527A0',
      plan: '#E53935'
    };
    return map[type];
  }
};
export default mappings;
