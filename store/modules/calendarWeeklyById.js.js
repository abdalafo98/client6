import axios from "axios";
const CalendarWeeklyById = {
  namespace: true,
  state: {
    userId: "",
    appointment: [],
  },
  mutations: {
    setUserId(state, payload) {
      return (state.userId = payload.userId);
    },
    setAppointment(state, payload) {
      return (state.appointment = payload.appointment);
    },
  },
  actions: {
    changeUserId(context, payload) {
      context.commit("setUserId", { userId: payload.userId });
    },
    getWeeklyAppointmentById(context, payload) {

      if (
        context.getters.getFilterData === "doctor" ||
        context.getters.getFilterData === "assistant"
      ) {
        axios
          .get(
            `http://localhost:8000/providersWeeklyAppointments/${context.getters.getLanguage}/${context.getters.getFilterData}/${context.getters.getStartDate}/${context.state.userId}`
          )
          .then((res) => {
            context.commit("setAppointment", {
              appointment: res.data,
            });
            // context.commit("setUserId", {
            //   userId:context.state.userId ,
            // });
          });
      } else if (context.getters.getFilterData === "room") {
        axios
          .get(
            `http://localhost:8000/roomsWeeklyAppointments/${context.getters.getLanguage}/${context.getters.getStartDate}/${context.state.userId}`
          )
          .then((res) => {

            context.commit("setAppointment", {
              appointment: res.data,
            });
    
          });
      } else if (context.getters.getFilterData === "procedure") {
        axios
          .get(
            `http://localhost:8000/servicesWeeklyAppointments/${context.getters.getLanguage}/${context.getters.getStartDate}/${context.state.userId}`
          )
          .then((res) => {

            context.commit("setAppointment", {
              appointment: res.data,
            });
            // context.commit("setUserId", {
            //   userId: context.state.userId,
            // });
          });
      }
    },
    addHoursToDate(from, to) {
      const arr = [];
      for (let i = parseInt(from); i <= parseInt(to); i++) {
        let number = moment(`${i}:00`, ["HH.mm"]).format("hh:mm a");
        arr.push(number);
      }
      return arr;
    },
  },
  getters: {
    getterAppointment(state) {
      return state.appointment;
    },
    getUserId(state) {
      return state.userId;
    },
  },
};
export default CalendarWeeklyById;