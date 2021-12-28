import axios from "axios";

const DailyCalendar = {
  namespace: true,
  state: {
    dailyAppoinment: [],
    dailyDate: "",
  },
  mutations: {
    setDailyAppoinment(state, payload) {
      return (state.dailyAppoinment = payload.dailyAppoinment);
    },
    setDailyDate(state, payload) {
      return (state.dailyDate = payload.dailyDate);
    },
  },
  actions: {
    changeDailyDate2(context, payload) {
      context.commit("setDailyDate", { dailyDate: payload.dailyDate });
    },
    getDailyAppoinments(context) {
      let url = "";
      if (
        context.getters.getFilterData === "doctor" ||
        context.getters.getFilterData === "assistant"
      ) {
        url = `http://localhost:8000/providersDailyAppointments/${context.getters.getLanguage}/${context.getters.getFilterData}/${context.state.dailyDate}`;
      } else if (context.getters.getFilterData === "room") {
        url = `http://localhost:8000/roomsDailyAppointments/${context.getters.getLanguage}/${context.state.dailyDate}`;
      } else if (context.getters.getFilterData === "procedure") {
        url = `http://localhost:8000/servicesDailyAppointments/${context.getters.getLanguage}/${context.state.dailyDate}`;
      }

      axios.get(url).then((res) => {
      
        context.commit("setDailyAppoinment", {
          dailyAppoinment: res.data,
        });
      });
    },
  },
  getters: {
    getterDailyAppoinment(state) {
      return state.dailyAppoinment;
    },
    getterDailyDate(state) {
      return state.dailyDate;
    },
  },
};
export default DailyCalendar;
