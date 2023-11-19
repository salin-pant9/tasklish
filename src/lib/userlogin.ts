import instance from "./axios_instance"

export const userlogin = async ({username ,password}: {username:string,password:string}) => {
    const response = await instance.post('/users/login',{
        username,password
    })
    if(response.status !== 200){
        alert(response.data.non_field_errors);
    }
    localStorage.setItem('token',response.data.token);
    localStorage.setItem('user',JSON.stringify(response.data.user));
    return response
}