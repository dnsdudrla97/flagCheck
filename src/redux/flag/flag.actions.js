import { GET_FLAG } from './flag.types';
import api from '../../services/api';

export const sendFlag = async(flag) => {
	return await api.post(`/api/flag/`, flag)
};
