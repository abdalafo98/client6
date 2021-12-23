import axios from "axios";

const Calendar = {
  namespace: true,
  state: {
    startDate: "",
    startDate2: "",
    weeklyHeaderDays: "",
    list: [],
    appointmentsList: [],
    type: "doctor",
    filters: "",
    lang: "ar",
  },

  mutations: {
    changeStartDate(state, payload) {
      if (process.client) {
        localStorage.setItem("startDate", payload.startDate);
      }
      return (state.startDate = payload.startDate);
    },
    changeStartDate2(state, payload) {
      return (state.startDate2 = payload.startDate2);
    },
    changeWeeklyHeaderDays(state, payload) {
      return (state.weeklyHeaderDays = payload.weeklyHeaderDays);
    },
    changeList(state, payload) {
      return (state.list = payload.list);
    },
    filterUsers(state, payload) {
      return (state.type = payload.type);
    },

    changeLang(state, payload) {
      return (state.lang = payload.lang);
    },
    changeAppointmentsList(state, payload) {
      return (state.appointmentsList = payload.appointmentsList);
    },
  },
  actions: {
    getStartDateToPage({ commit }, payload) {
      var curr = new Date(payload.date); // get current date
      // if day === 0 = sunday
      while (curr.getDay() != payload.day) {
        curr.setDate(curr.getDate() - 1);
      }
      return curr;
    },

    setLang(context, payload) {
      context.commit("changeLang", {
        lang: payload.lang,
      });
    },
    addDays(context, payload) {
      const newD = new Date(payload.date);
      newD.setDate(newD.getDate() + payload.num);
      if (payload.status === "change_startDate")
        context.commit("changeStartDate", { startDate: newD });
      else if (payload.status === "change_startDate2")
        context.commit("changeStartDate2", { startDate2: newD });
      else if (payload.status === "change_dailyCalendar")
        context.commit("setDailyDate", { dailyDate: newD });
    },

    getFilters(context) {
      let url = "";
      if (
        context.state.type === "doctor" ||
        context.state.type === "assistant"
      ) {
        url = `http://localhost:8000/providers/${context.getters.getLanguage}/${context.state.type}`;
      } else if (context.state.type === "rooms") {
        url = `http://localhost:8000/rooms/${context.getters.getLanguage}`;
      } else if (context.state.type === "procedures") {
        url = `http://localhost:8000/services/${context.getters.getLanguage}`;
      }

      axios.get(url).then((res) => {
        context.commit("changeList", { list: res.data.filters });
      });
    },

    getAppoinments(context) {
      let url = "";
      if (
        context.state.type === "doctor" ||
        context.state.type === "assistant"
      ) {
        url = `http://localhost:8000/providersWeeklyAppointments/${context.getters.getLanguage}/${context.state.type}/${context.state.startDate}`;
      } else if (context.state.type === "rooms") {
        url = `http://localhost:8000/roomsWeeklyAppointments/${context.getters.getLanguage}/${context.state.startDate}`;
      } else if (context.state.type === "procedures") {
        url = `http://localhost:8000/servicesWeeklyAppointments/${context.getters.getLanguage}/${context.state.startDate}`;
      }
      axios.get(url).then((res) => {
        context.commit("changeAppointmentsList", {
          appointmentsList: res.data,
        });
      });
    },
    getFilterData(context, payload) {
      context.commit("filterUsers", { type: payload.type });
    },
    getDailyDate(context, payload) {
      context.commit("changeDailyDate", { dailyDate: payload.dailyDate });
    },
    async workingHour(context, payload) {
      const cookie = document.cookie.split(";");
      let token = "";
      cookie.forEach(value=>{
        if(value.includes("token")){
          token = value.slice(value.indexOf("=")+1);
        }  
      })
      console.log("Bearer " + token);
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/workingHours",
          payload,{
            headers: {
              authorization: "Bearer " + token,
            },
          }
        );
        console.log(result, "ppopopopopo");
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
    },
  },
  getters: {
    getStartDate(state) {
      return state.startDate;
    },
    getStartDate2(state) {
      return state.startDate2;
    },
    getWeeklyHeaderDays(state) {
      return state.weeklyHeaderDays;
    },
    getAppoinment(state) {
      return state.list;
    },

    gettersFilter(state) {
      return state.appointmentsList;
    },
    getFilterData(state) {
      return state.type;
    },

    getLang(state) {
      return state.lang;
    },
  },
};
export default Calendar;
