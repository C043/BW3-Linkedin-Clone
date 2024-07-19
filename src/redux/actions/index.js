import { token } from "../../../token";
import { userId } from "../../../userId";

export const GET_USER = "GET_USER";
export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const GET_POSTS = "GET_POSTS";
export const GET_JOBS = "GET_JOBS";
export const GET_COMMENTS = "GET_COMMENTS"


export const SHOW_EXPERIENCE_ON = "SHOW_EXPERIENCE_ON";
export const SHOW_EXPERIENCE_OFF = "SHOW_EXPERIENCE_OFF";
export const SHOW_EDIT_EXPERIENCE_ON = "SHOW_EDIT_EXPERIENCE_ON";
export const SHOW_EDIT_EXPERIENCE_OFF = "SHOW_EDIT_EXPERIENCE_OFF";
export const SHOW_DEL_EXP_ON = "SHOW_DEL_EXP_ON";
export const SHOW_DEL_EXP_OFF = "SHOW_DEL_EXP_OFF";
export const SHOW_EDIT_PROFILE_PIC_ON = "SHOW_EDIT_PROFILE_PIC_ON";
export const SHOW_EDIT_PROFILE_PIC_OFF = "SHOW_EDIT_PROFILE_PIC_OFF";
export const SHOW_ADD_POST_ON = "SHOW_ADD_POST_ON";
export const SHOW_ADD_POST_OFF = "SHOW_ADD_POST_OFF";
export const SHOW_EDIT_POST_ON = "SHOW_EDIT_POST_ON";
export const SHOW_EDIT_POST_OFF = "SHOW_EDIT_POST_OFF";
export const SHOW_COMPANY_DES_ON = "SHOW_COMPANY_DES_ON";
export const SHOW_COMPANY_DES_OFF = "SHOW_COMPANY_DES_OFF";
export const SHOW_EDIT_COMMENT_ON = "SHOW_EDIT_COMMENT_ON";
export const SHOW_EDIT_COMMENT_OFF = "SHOW_EDIT_COMMENT_OFF";

export const SELECT_EXP = "SELECT_EXP";
export const SELECT_POST = "SELECT_POST";
export const SELECT_JOB = "SELECT_JOB";
export const SELECT_JOB_DES = "SELECT_JOB_DES";
export const SELECT_JOB_HEADER = "SELECT_JOB_HEADER";
export const SELECT_COMMENT = "SELECT_COMMENT"


export const IS_LOADING_ON = "IS_LOADING_ON";
export const IS_LOADING_OFF = "IS_LOADING_OFF";
export const IS_POSTS_LOADING_ON = "IS_POSTS_LOADING_ON";
export const IS_POSTS_LOADING_OFF = "IS_POSTS_LOADING_OFF";
export const IS_JOBS_LOADING_ON = "IS_JOBS_LOADING_ON";
export const IS_JOBS_LOADING_OFF = "IS_JOBS_LOADING_OFF";


export const HAS_ERROR_ON = "HAS_ERROR_ON";
export const HAS_ERROR_OFF = "HAS_ERROR_OFF";
export const HAS_JOB_ERROR_ON = "HAS_JOB_ERROR_ON";
export const HAS_JOB_ERROR_OFF = "HAS_JOB_ERROR_OFF";
export const HAS_POST_ERROR_ON = "HAS_POST_ERROR_ON";
export const HAS_POST_ERROR_OFF = "HAS_POST_ERROR_OFF";

export const isLoadingOnAction = () => ({ type: IS_LOADING_ON, payload: true });
export const isLoadingOffAction = () => ({ type: IS_LOADING_OFF, payload: false });

export const isPostsLoadingOnAction = () => ({ type: IS_POSTS_LOADING_ON, payload: true });
export const isPostsLoadingOffAction = () => ({ type: IS_POSTS_LOADING_OFF, payload: false });

export const isJobsLoadingOnAction = () => ({ type: IS_JOBS_LOADING_ON, payload: true });
export const isJobsLoadingOffAction = () => ({ type: IS_JOBS_LOADING_OFF, payload: false });

export const hasErrorOnAction = () => ({ type: HAS_ERROR_ON, payload: true });
export const hasErrorOffAction = () => ({ type: HAS_ERROR_OFF, payload: false });

export const hasJobErrorOnAction = () => ({ type: HAS_JOB_ERROR_ON, payload: true });
export const hasJobErrorOffAction = () => ({ type: HAS_JOB_ERROR_OFF, payload: false });

export const hasPostErrorOnAction = () => ({ type: HAS_POST_ERROR_ON, payload: true });
export const hasPostErrorOffAction = () => ({ type: HAS_POST_ERROR_OFF, payload: false });

export const getUserAction = () => {
  return async dispatch => {
    dispatch(hasErrorOffAction());
    dispatch(isLoadingOnAction());
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
      dispatch(hasErrorOnAction());
    } finally {
      dispatch(isLoadingOffAction());
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

export const getPostsAction = () => {
  return async dispatch => {
    dispatch(hasPostErrorOffAction());
    dispatch(isPostsLoadingOnAction());
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "GET",
        headers: { Authorization: token },
      });
      if (resp.ok) {
        const posts = await resp.json();
        dispatch({ type: GET_POSTS, payload: posts });
      } else {
        throw new Error("Errore nel reperimento dei post");
      }
    } catch (error) {
      console.log(error);
      dispatch(hasPostErrorOnAction());
    } finally {
      dispatch(isPostsLoadingOffAction());
    }
  };
};

export const getJobsAction = (query = "", company = "", category = "") => {
  return async dispatch => {
    dispatch(isJobsLoadingOnAction());
    dispatch(hasJobErrorOffAction());

    try {
      let url = "https://strive-benchmark.herokuapp.com/api/jobs";
      if (query) {
        url = `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`;
      } else if (company) {
        url = `https://strive-benchmark.herokuapp.com/api/jobs?company=${company}`;
      } else if (category) {
        url = `https://strive-benchmark.herokuapp.com/api/jobs?category=${category}`;
      }
      const resp = await fetch(url, {
        method: "GET",
        headers: { Authorization: token },
      });

      if (resp.ok) {
        const jobs = await resp.json();
        dispatch({ type: GET_JOBS, payload: jobs.data });
      } else {
        throw new Error("Errore nel reperimento dei lavori");
      }
    } catch (error) {
      console.log(error);
      dispatch(hasJobErrorOnAction());
    } finally {
      dispatch(isJobsLoadingOffAction());
    }
  };
};

export const getCommentsAction = () => {
  return async (dispatch) => {
    try {

      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "GET",
        headers: {
          Authorization: token
        },
      });

      if (resp.ok) {
        const comments = await resp.json();
        dispatch({ type: GET_COMMENTS, payload: comments });
      } else {
        throw new Error("Errore nel reperimento dei lavori");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const showExperienceOnAction = () => ({ type: SHOW_EXPERIENCE_ON, payload: true });
export const showExperienceOffAction = () => ({ type: SHOW_EXPERIENCE_OFF, payload: false });

export const showEditExpOnAction = () => ({ type: SHOW_EDIT_EXPERIENCE_ON, payload: true });
export const showEditExpOffAction = () => ({ type: SHOW_EDIT_EXPERIENCE_OFF, payload: false });

export const showDelExpOnAction = () => ({ type: SHOW_DEL_EXP_ON, payload: true });
export const showDelExpOffAction = () => ({ type: SHOW_DEL_EXP_OFF, payload: false });

export const showPicOnAction = () => ({ type: SHOW_EDIT_PROFILE_PIC_ON, payload: true });
export const showPicOffAction = () => ({ type: SHOW_EDIT_PROFILE_PIC_OFF, payload: false });

export const showAddPostOnAction = () => ({ type: SHOW_ADD_POST_ON, payload: true });
export const showAddPostOffAction = () => ({ type: SHOW_ADD_POST_OFF, payload: false });

export const showEditPostOnAction = () => ({ type: SHOW_EDIT_POST_ON, payload: true });
export const showEditPostOffAction = () => ({ type: SHOW_EDIT_POST_OFF, payload: false });

export const showCompanyDestOnAction = () => ({ type: SHOW_COMPANY_DES_ON, payload: true });
export const showCompanyDestOffAction = () => ({ type: SHOW_COMPANY_DES_OFF, payload: false });

export const showCommentModalOnAction = () => ({ type: SHOW_EDIT_COMMENT_ON, payload: true });
export const showCommentModalOffAction = () => ({ type: SHOW_EDIT_COMMENT_OFF, payload: false });

export const selectExpAction = id => ({ type: SELECT_EXP, payload: id });

export const selectedJobHeaderAction = header => ({ type: SELECT_JOB_HEADER, payload: header });

export const selectPostAction = id => ({ type: SELECT_POST, payload: id });

export const selectJobAction = job => ({ type: SELECT_JOB, payload: job });

export const selectJobDesAction = jobDes => ({ type: SELECT_JOB_DES, payload: jobDes });

export const selectCommentAction = commentObj => ({ type: SELECT_COMMENT, payload: commentObj })
