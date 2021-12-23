import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    key: "vuex",
    paths: [
      "Calendar",
      "AppLanguage",
      "Login",
      "DailyCalendar",
      "DailyCalendarById",
    ],
    
  })(store);
};
