// TODO: Replace console with a more complete logger library like bunyan, winston
// TODO: return an interface and not the logger directly
export const logger = {
  log(...args: any[]) {
    console.log(...args);
  },
  error(...args: any[]) {
    console.error(...args);
  },
  info(...args: any[]) {
    console.info(...args);
  },
};
