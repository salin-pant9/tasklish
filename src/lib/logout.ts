import { redirect } from "next/navigation";

export const logout =  () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    redirect('/login');
}
