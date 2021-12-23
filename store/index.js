import AppLanguage from "./modules/appLang";
import Calendar from "./modules/calendar";
import Login from "./modules/login";
import DailyCalendar from "./modules/dailyCalendar";
import DailyCalendarById from "./modules/dailyCalendarById";
import CalendarWeeklyById from "./modules/calendarWeeklyById.js"
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from 'js-cookie'
const createStore = () => {
  return new Vuex.Store({
    modules: {
      AppLanguage,
      Calendar,
      Login,
      DailyCalendar,
      DailyCalendarById,
      CalendarWeeklyById
    },
    // plugins: [
    //   createPersistedState({
    //     getState: (key) => Cookies.getJSON(key),
    //     setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    //   })
    // ],
  });
};

export default createStore;
