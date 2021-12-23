import axios from "axios";

const DailyCalendar = {
  namespace: true,
  state: {
    dailyAppoinment: [],
    dailyDate: process.client ? localStorage.getItem("dailyDate") : "",
  },
  mutations: {
    setDailyAppoinment(state, payload) {
      return (state.dailyAppoinment = payload.dailyAppoinment);
    },
    setDailyDate(state, payload) {
      if (process.client) {
        localStorage.setItem("dailyDate", payload.dailyDate);
      }
      return (state.dailyDate = payload.dailyDate);
    },
  },
  actions: {
    changeDailyDate2(context, payload) {
      console.log(payload.dailyDate, "abababababababababababa");
      context.commit("setDailyDate", { dailyDate: payload.dailyDate });
    },
    getDailyAppoinments(context) {
      let url = "";
      if (
        context.getters.getFilterData === "doctor" ||
        context.getters.getFilterData === "assistant"
      ) {
        url = `http://localhost:8000/providersDailyAppointments/${context.getters.getLanguage}/${context.getters.getFilterData}/${context.state.dailyDate}`;
      } else if (context.getters.getFilterData === "rooms") {
        url = `http://localhost:8000/roomsDailyAppointments/${context.getters.getLanguage}/${context.state.dailyDate}`;
      } else if (context.getters.getFilterData === "procedures") {
        url = `http://localhost:8000/servicesDailyAppointments/${context.getters.getLanguage}/${context.state.dailyDate}`;
      }

      axios.get(url).then((res) => {
        // console.log(res, "services");
        console.log(res.data, context.state.type);
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
