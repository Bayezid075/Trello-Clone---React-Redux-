export const boardReducer = (state = [null], action) => {
  switch (action.type) {
    case "board/create": {
      const newBoard = {
        id: Math.random(),
        title: action.payload,
        lists: [],
        tasks: [],
      };

      return [...state, newBoard];
    }

    default:
      return state;
      break;
  }
};
