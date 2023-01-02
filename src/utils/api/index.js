import axios from "axios";

const endpointToken = "https://frontend-test-assignment-api.abz.agency/api/v1/token";
const endpointUsers = "https://frontend-test-assignment-api.abz.agency/api/v1/users";

//users
export const getUsers = async (nextLink = undefined) => {

    const res = await axios(nextLink === undefined ? endpointUsers + "?page=1&count=6" : nextLink);
    const data = await res.data;
    return data;
}

export const getToken = async () => {

    const res = await axios(endpointToken);
    const data = await res.data;

    if (data.success) {
        return data.token;
    } else {
        return "";
    }
}

export const postUser = async (formData) => {

    const token = await getToken();

    const res = await axios(endpointUsers, {
        method: "POST",
        headers: { 'Token': token },
        data: formData
    });
    const data = await res.data;
    return await data.success === true;
}