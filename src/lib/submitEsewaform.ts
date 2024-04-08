import axios from "axios"
import { redirect } from "next/navigation";

const submitEsewaform = async ( url:string) => {
    try{
        const response = await axios.post(url,{
            return_url:'http://localhost:3000/payment/',
            website_url:'https://localhost:3000/',
            amount:'50000',
            purchase_order_id:'Order101',
            purchase_order_name:'test',
            customer_info:{
                name: 'Ram Bahadur',
                email:'test@khalti.com',
                phone:'9800000001'
            }
        },{
            
            headers:{
                Authorization:'key 952aea4319784b9abe0a5cd478ebbbb6 ',
                "Content-Type": 'application/json',
            }
                
            
            
        });
        console.log(response.data.payment_url);
        return response.data.payment_url;
    }catch(error){
        console.log(error);

    }
}   

export default submitEsewaform