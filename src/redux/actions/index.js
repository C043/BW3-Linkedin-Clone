import { token } from "../../../token";
import { userId } from "../../../userId";

export const GET_USER = "GET_USER";
export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const SHOW_EXPERIENCE_ON = "SHOW_EXPERIENCE_ON";
export const SHOW_EXPERIENCE_OFF = "SHOW_EXPERIENCE_OFF";
export const SHOW_EDIT_EXPERIENCE_ON = "SHOW_EDIT_EXPERIENCE_ON";
export const SHOW_EDIT_EXPERIENCE_OFF = "SHOW_EDIT_EXPERIENCE_OFF";
export const SELECT_EXP = "SELECT_EXP";
export const SHOW_DEL_EXP_ON = "SHOW_DEL_EXP_ON";
export const SHOW_DEL_EXP_OFF = "SHOW_DEL_EXP_OFF";
export const SHOW_EDIT_PROFILE_PIC_ON = 'SHOW_EDIT_PROFILE_PIC_ON'
export const SHOW_EDIT_PROFILE_PIC_OFF = 'SHOW_EDIT_PROFILE_PIC_OFF'

export const getUserAction = () => {
  return async dispatch => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        method: "GET",
        headers: { Authorization: token },
      });
      if (resp.ok) {
        const profileData = await resp.json();
        dispatch({ type: GET_USER, payload: profileData });
      } else {
        throw new Error("Errore nel fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUsersListAction = () => {
  return async dispatch => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile", {
        method: "GET",
        headers: { Authorization: token },
      });
      if (resp.ok) {
        const profileListData = await resp.json();
        dispatch({ type: GET_USERS_LIST, payload: profileListData });
      } else {
        throw new Error("Errore nel fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExperiencesAction = () => {
  return async dispatch => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences", {
        method: "GET",
        headers: { Authorization: token },
      });
      if (resp.ok) {
        const experiences = await resp.json();
        dispatch({ type: GET_EXPERIENCES, payload: experiences });
      } else {
        throw new Error("Errore nel reperimento delle esperienze");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const showExperienceOnAction = () => ({ type: SHOW_EXPERIENCE_ON, payload: true });
export const showExperienceOffAction = () => ({ type: SHOW_EXPERIENCE_OFF, payload: false });

export const showEditExpOnAction = () => ({ type: SHOW_EDIT_EXPERIENCE_ON, payload: true });
export const showEditExpOffAction = () => ({ type: SHOW_EDIT_EXPERIENCE_OFF, payload: false });

export const selectExpAction = id => ({ type: SELECT_EXP, payload: id });

export const showDelExpOnAction = () => ({ type: SHOW_DEL_EXP_ON, payload: true });
export const showDelExpOffAction = () => ({ type: SHOW_DEL_EXP_OFF, payload: false });

export const showPicOnAction = () => ({ type: SHOW_EDIT_PROFILE_PIC_ON, payload: true });
export const showPicOffAction = () => ({ type: SHOW_EDIT_PROFILE_PIC_OFF, payload: false });

