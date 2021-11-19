import { GET_FLAG, ERROR_FLAG} from "./flag.types";

export const actionFlag = (flag) => {
	return {
		type: GET_FLAG,
		payload: flag
	}
}

export const actionFlagError = (error) => {
	return {
		type: ERROR_FLAG,
		payload: error
	}
}

const initialState = {
	flag_count: 0,
	loading: true,
	error: {},
	flag_resut: null,
};

export default function flag(state = initialState, action) {
	switch (action.type) {
		case GET_FLAG:
			return {
				...state,
				flag_result: action.payload,
				loading: false
			};
		case ERROR_FLAG:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return state;
	}
}
