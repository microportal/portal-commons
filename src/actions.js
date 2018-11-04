import axios from 'axios';

export const loadServices = async () => {
    const {data} = await axios.get('/portal-service/applications/services');
    return {type: 'LOAD_SERVICES', payload: data};
};
