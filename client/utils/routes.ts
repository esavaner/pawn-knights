export const routes = {
  get base() {
    return "";
  },

  get home() {
    return "/";
  },

  get room() {
    return `${this.base}/room`;
  },

  get roomWithId() {
    return `${this.room}/[id]`;
  },

  get ai() {
    return `${this.base}/ai`;
  },

  get player() {
    return `${this.base}/player/[id]`;
  },

  get ranking() {
    return `${this.base}/ranking`;
  },

  get login() {
    return `${this.base}/login`;
  },
};
