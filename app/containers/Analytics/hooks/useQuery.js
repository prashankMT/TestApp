import { useReducer, useMemo } from "react";
import useClient from "./useClient";

const action = {
  trigger: "TRIGGER",
  success: "SUCCESS",
  failed: "FAILED"
};

function reducer(state, { type, data, error }) {
  switch (type) {
    case action.trigger:
      return {
        loaded: false,
        loading: true,
        hasError: false,
        data: undefined,
        error: undefined
      };
    case action.success:
      return {
        data,
        loaded: true,
        loading: false,
        hasError: false,
        error: undefined
      };
    case action.failed:
      return {
        error,
        loaded: false,
        loading: false,
        hasError: true,
        data: undefined
      };
    default:
      return state;
  }
}

const initialState = {
  loading: true,
  loaded: false,
  hasError: false,
  error: undefined,
  data: undefined
};

const useQuery = (query, variables) => {
  const [client] = useClient();
  const [state, dispatch] = useReducer(reducer, initialState);
  try {
    useMemo(() => {
      dispatch({ type: action.trigger });
      client
        .request(query, variables)
        .then(data => {
          dispatch({ type: action.success, data });
        })
        .catch(error => {
          const composedError = new Error(error);
          composedError.errorCode = 600;
          dispatch({ type: action.failed, error: composedError });
        });
    }, [query, variables]);
    return state;
  } catch (error) {
    throw error;
  }
};

export default useQuery;
