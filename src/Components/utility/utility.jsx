import Cookies from 'js-cookie';

export function getCurrentUser() {
    const userCookie = Cookies.get('user');

    if (!userCookie) {
        return null;
    }

    try {
        return JSON.parse(decodeURIComponent(userCookie));
    } catch (error) {
        console.error('Error parsing user cookie:', error);
        return null;
    }
}

export const logout = () => {
    Cookies.remove('user');
};
