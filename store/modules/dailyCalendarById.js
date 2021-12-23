import axios from "axios";

const DailyCalendarById = {
  namespace: true,
  state: {
    dailyAppoinmentById: [],
    dailyUserId: "",
    dailyUserName: "",
  },
  mutations: {
    setDailyAppoinmentById(state, payload) {
      return (state.dailyAppoinmentById = payload.dailyAppoinmentById);
    },
    setDailyUserId(state, payload) {
      return (state.dailyUserId = payload.dailyUserId);
    },
    setDailyUserName(state, payload) {
      return (state.dailyUserName = payload.dailyUserName);
    },
  },
  actions: {
    changeDailyUserId(conetx, payload) {
      conetx.commit("setDailyUserId", { dailyUserId: payload.dailyUserId });
    },
    changedailyUserName(conetx, payload) {
      conetx.commit("setDailyUserName", {
        dailyUserName: payload.dailyUserName,
      });
    },

    getDailyAppinmentsById(context) {
      console.log("jjjjjjjjjjjjjjjjjjjjj");
      let url = "";
      if (
        context.getters.getFilterData === "doctor" ||
        context.getters.getFilterData === "assistant"
      ) {
        url = `http://localhost:8000/providersDailyAppointments/${context.getters.getLanguage}/${context.getters.getFilterData}/${context.getters.getterDailyDate}/${context.state.dailyUserId}`;
      } else if (context.getters.getFilterData === "rooms") {
        url = `http://localhost:8000/roomsDailyAppointments/${context.getters.getLanguage}/${context.getters.getterDailyDate}/${context.state.dailyUserId}`;
      } else if (context.getters.getFilterData === "procedures") {
        url = `http://localhost:8000/servicesDailyAppointments/${context.getters.getLanguage}/${context.getters.getterDailyDate}/${context.state.dailyUserId}`;
      }

      axios.get(url).then((res) => {
        console.log(res.data, context.getters.getFilterData);
        context.commit("setDailyAppoinmentById", {
          dailyAppoinmentById: res.data,
        });
      });
    },
  },
  getters: {
    getterDailyAppoinmentById(state) {
      return state.dailyAppoinmentById;
    },

    getDailyUserId(state) {
      return state.dailyUserId;
    },
    getDailyUserName(state) {
      return state.dailyUserName;
    },
  },
};

export default DailyCalendarById;
