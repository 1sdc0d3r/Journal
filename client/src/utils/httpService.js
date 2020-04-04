import axios from "axios";
import authService from "./authService";

const httpService = {
  setupInterceptors: history => {
    console.log("HTTP SERVICE");
    axios.interceptors.response.use(
      res => {
        console.log({ res });
        return res;
      },
      error => {
        console.log({ error });
        if ((error.response.status = 401)) {
          authService.removeToken();
          history.push("/login");
        }
        return Promise.reject(error);
      }
    );
  }
};
export default httpService;

// const httpService = {
//   // we pass the redux store and history in order to dispatch the logout actions
//   // and push the user to login

//   setupInterceptors: history => {
//     console.log("HTTP SERVICE");
//     axios.interceptors.response.use(
//       response => {
//         // simply return the response if there is no error
//         console.log({ response });

//         return response;
//       },
//       error => {
//         // in this case we only care about unauthorized errors
//         console.log({ error });
//         if (error.response.status === 401) {
//           // we dispatch our logout action (more than likely changes a boolean
//           // somewhere in your store ex. isAuthenticated: false)

//           // store.dispatch(authOperations.logoutSuccess());

//           // this could just as easily be localStorage.removeItem('your-token')
//           // but it's best to encapsulate this logic so it can be used elsewhere
//           // by just importing it.

//           authService.removeToken();

//           // send the user to the login page since the user/token is not valid

//           history.push("/login");
//         }
//         return Promise.reject(error);
//       }
//     );
//   }
// };
// export default httpService;
