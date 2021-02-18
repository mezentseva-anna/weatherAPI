export default function (store = {status: false, message: null}, action) {
  switch (action.type) {
      case 'ERR_IN_APP':
          return action.payload
      default:
          return store;
  }
};