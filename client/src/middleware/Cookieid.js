
import Cookies from 'js-cookie';

export const userid = async () => {
    const response = await Cookies.get("userid");
    return response;
}