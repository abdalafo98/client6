const AppLanguage = {
  namespace: true,
  state: {
    direction: "ltr",
    alignment: "left",
    position: "start",
    language: "en",
  },
  mutations: {
    changeDirection(state, payload) {
      return (state.direction = payload.direction);
    },
    changeAlignment(state, payload) {
      return (state.alignment = payload.alignment);
    },
    changeLanguage(state, payload) {
      if (process.client) {
        localStorage.setItem("startDate", payload.startDate);
      }
      return (state.language = payload.language);
    },
    changePosition(state, payload) {
      return (state.position = payload.position);
    },
  },
  actions: {
    setDirection(context, payload) {
      context.commit("changeDirection", {
        direction: payload.direction,
      });
    },
    setAlignment(context, payload) {
      context.commit("changeAlignment", {
        alignment: payload.alignment,
      });
    },
    setLanguage(context, payload) {
      context.commit("changeLanguage", {
        language: payload.language,
      });
    },
    setPosition(context, payload) {
      context.commit("changePosition", {
        position: payload.position,
      });
    },
  },
  getters: {
    getDirection(state) {
      return state.direction;
    },
    getAlignment(state) {
      return state.alignment;
    },
    getLanguage(state) {
      return state.language;
    },
    getPosition(state) {
      return state.position;
    },
  },
};
export default AppLanguage;
