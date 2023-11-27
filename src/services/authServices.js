import * as httpRequest from '../utils/httpRequest';

export const registerUser = async (EMAIL) => {
    try {
        const res = await httpRequest.post('auth/registerUser', { EMAIL });
        return res.status;
    } catch (error) {
        console.log(error);
    }
};

export const verifyEmail = async (EMAIL, OTP) => {
    try {
        const res = await httpRequest.post('auth/registerUser/verifyOtp', {
            EMAIL,
            OTP,
        });
        return res.status;
    } catch (error) {
        console.log(error);
    }
};

export const login = async (EMAIL, PASSWORD) => {
    try {
        const res = await httpRequest.post("auth/login", {
            EMAIL,
            PASSWORD
        })
        return res.status;
    } catch (error) {
        console.log(error);
    }
}
