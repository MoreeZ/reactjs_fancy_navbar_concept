const initState = {
  aboutMe: false,
  mySkills: false,
  myProjects: false,
  contactMe: false
};

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_ABOUTME":
      return { ...state, aboutMe: true };
    case "SET_MYSKILLS":
      return { ...state, mySkills: true };
    case "SET_MYPROJECTS":
      return { ...state, myProjects: true };
    case "SET_CONTACTME":
      return { ...state, contactMe: true };
    case "RESET_PAGES":
      return {
        aboutMe: false,
        mySkills: false,
        myProjects: false,
        contactMe: false
      };
    default:
      return state;
  }
};

export default myReducer;
