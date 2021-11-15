import { GET_FLAG } from "./flag.types";

export const actionFlag = (post) => {
	return {
		type: GET_FLAG,
		payload: post
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
				flag_result: state.flag_result,
				loading: false
			};
		default:
			return state;
	}
}
