import { createContext, useContext, useState } from "react";
import { loginUserApi } from '../helpers/users/loginUser.api.js';
import { currentUserApi } from '../helpers/users/currentUser.api.js';
import { userRegisterApi } from '../helpers/users/registerUser.api.js';
import { updDataUserApi } from "../helpers/users/updDataUser.api.js";
// import { updateUserApi } from '../helpers/users/updateUser.api.js';

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        data: null,
        error: null,
        logged: false,
        registered: false,
        update: false
    });

    const register = async (user) => {
        setLoading(true);
        const registerData = await userRegisterApi(user);
        if (registerData.error) {
            setLoading(false);
            return setUser({ error: registerData.error });
        };
        if (registerData.status === 'success') {
            localStorage.setItem('token', registerData.accesToken);
            await current();
        };
        setLoading(false);
    };

    const login = async (user) => {
        setLoading(true);
        const loginData = await loginUserApi(user);
        if (loginData.error) setUser({ ...user, error: loginData.error })
        if (loginData.status === 'success') {
            localStorage.setItem('token', loginData.accesToken);
            await current();
        };
        setLoading(false);
    };

    const logout = () => {
        setUser({ data: null, error: null, logged: false, registered: false });
        localStorage.removeItem('token');
        localStorage.removeItem('path');
    };

    const current = async () => {
        const response = await currentUserApi();
        if (response && response.user) {
            setUser({ data: response.user, logged: true, registered: true });
        };
    };

    const updateUser = async (user) => {
        const response = await updDataUserApi(user);
        if (response.status === 'success') {
            if (response.accesToken) {
                localStorage.setItem('token', response.accesToken);
                await current();
                return { status: 'success' };
            } else return { status: 'success' };
        } else return { status: 'error' };
    };

    return (
        <LoginContext.Provider
            value={{
                register, loading, user, current, logout, login, updateUser
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;