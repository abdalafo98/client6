import axios from "axios";
var jwt = require("jsonwebtoken");
const Login = {
  namespace: true,
  state: {
    message: "",
    forgetMessage: "",
    phoneNumber: "",
    tokenId: "",
    workingHours: {},
  },
  mutations: {
    setWorkingHour(state, payload) {
      return (state.workingHours = payload.workingHours);
    },
  },
  actions: {
    changeWorkingHours(context, payload) {
      console.log(payload,"hhhhuuuhuhuhuh")
      context.commit("setWorkingHour", {
        workingHours: payload.workingHours,
      });
    },
    async LOGIN(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/login",
          payload
        );
        if (result.data.firstTime) {
          this.$router.push("/");
        } else {
          this.$router.push("/workinghour");
        }
        document.cookie = `token=${result.data.token}`;
        console.log(result);
        context.state.tokenId=result.data.token;
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);
        context.state.message = err.response.data.message;
      }
    },
    async forgetPassword(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/forgot",
          payload
        );
        console.log(result);
        console.log(result.data.token);
        const decoded = jwt.verify(token, "change this key later on 00");
        context.state.phoneNumber = decoded.phone;
        console.log(context.state.phoneNumber);
        this.$router.push("/forgetCode");
      } catch (err) {
        console.log("error in catch");
        console.log(err.response.data.message);
        console.log(err.response.status);
        context.state.forgetMessage = err.response.data.message;
      }
    },
    async forget2(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/forgot/verify",
          payload
        );
        console.log(result);
        this.$router.push("/restPassword");
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
    },
    async restPassword(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/forgot/password",
          payload
        );
        console.log(result);
        this.$router.push("/login");
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
    },
  },
  getters: {
    getMessage(state) {
      return state.message;
    },
    getForgetMessage(state) {
      return state.forgetMessage;
    },
    getPhoneNumber(state) {
      return state.phoneNumber;
    },
    getTokenId(state) {
      return state.tokenId;
    },
    getWorkingHours(state) {
      return state.workingHours;
    },
  },
};
export default Login;