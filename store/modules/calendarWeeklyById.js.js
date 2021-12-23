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
      console.log("user id after ",payload.userId)
    },
    getWeeklyAppointmentById(context, payload) {
      console.log(" type ", context.getters.getFilterData);
      console.log(" id ", context.state.userId);
      if (
        context.getters.getFilterData === "doctor" ||
        context.getters.getFilterData === "assistant"
      ) {
        axios
          .get(
            `http://localhost:8000/providersWeeklyAppointments/${context.getters.getLanguage}/${context.getters.getFilterData}/${context.getters.getStartDate}/${context.state.userId}`
          )
          .then((res) => {
            // console.log("New list", res.data);
            console.log(context.state.userId,"./././././.assis");
            context.commit("setAppointment", {
              appointment: res.data,
            });
            // context.commit("setUserId", {
            //   userId:context.state.userId ,
            // });
          });
      } else if (context.getters.getFilterData === "rooms") {
        // console.log(" type", context.state.type);
        axios
          .get(
            `http://localhost:8000/roomsWeeklyAppointments/${context.getters.getLanguage}/${context.getters.getStartDate}/${context.state.userId}`
          )
          .then((res) => {
            // console.log("rooms api", res.data, context.getters.getFilterData);
            console.log(context.state.userId,"./././././.room");
            context.commit("setAppointment", {
              appointment: res.data,
            });
            // context.commit("setUserId", {
            //   userId: context.state.userId,
            // });
          });
      } else if (context.getters.getFilterData === "procedures") {
        console.log(" type", context.state.type);
        axios
          .get(
            `http://localhost:8000/servicesWeeklyAppointments/${context.getters.getLanguage}/${context.getters.getStartDate}/${context.state.userId}`
          )
          .then((res) => {
             console.log(context.state.userId,"./././././.ser");
            console.log(res.data, context.getters.getFilterData);
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