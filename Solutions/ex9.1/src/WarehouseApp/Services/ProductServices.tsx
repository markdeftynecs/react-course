import  axios, { AxiosResponse, AxiosInstance }  from 'axios';
import {Product} from '../WarehouseTypes';

const customAxios: AxiosInstance = axios.create(
{    
   baseURL: 'http://localhost/WarehouseTree/ProductManagement/'    
});

export const deleteProduct = async (prodId:number):Promise<void> => {
    try 
    {    
        const response:AxiosResponse = await customAxios.delete(
            'products/' + prodId.toString() );  
    }  
    catch (err: any)  
    {
        if (err.response)
        {
            throw new Error ( err.response.status + ", " +     
                              err.response.data );     
        }     
        else if (err.request)     
        {     
           throw new Error ( "No response from server");     
        }     
        else { throw new Error ( err.message ); }
    }
}

export const getProducts = async ():Promise<Product[]> => {
    try
    {
        const response:AxiosResponse<Product[]> =
        await customAxios.get<Product[]>( 'products/' );
  
        return response.data;    
    }
    catch(err: any) 
    {
        if (err.response)
        {
           throw new Error ( err.response.status + ", " +     
                                  err.response.data );     
        }
        else if (err.request)
        {       
             throw new Error ( "No response from server");       
        }
        else { throw new Error ( err.message ); }
    }
}