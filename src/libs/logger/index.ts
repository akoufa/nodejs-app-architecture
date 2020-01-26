// TODO: Replace console with a more complete logger library like bunyan, winston
// TODO: return an interface and not the logger directly
export const logger = {
  log(...args: any[]): void {
    // eslint-disable-next-line no-console
    console.log(...args);
  },
  error(...args: any[]): void {
    // eslint-disable-next-line no-console
    console.error(...args);
  },
  info(...args: any[]): void {
    // eslint-disable-next-line no-console
    console.info(...args);
  },
};
