function getUniqueId(prefix?: string) {
  return `${prefix}-${new Date().toISOString()}-${performance.now()}`;
}

export default getUniqueId;
