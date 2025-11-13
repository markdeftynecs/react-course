import { Warehouse } from '../WarehouseTypes';
import  axios, { AxiosInstance, AxiosResponse }  from 'axios';
import configData from '../Warehouse.config.json';

const customAxios: AxiosInstance = axios.create(
{    
    //baseURL: 'http://localhost/WarehouseTree/ProductManagement/'  
    baseURL: configData.services.server_url 
});

export const getWarehouses = async ():Promise<Warehouse[]> => {
    try
    {
        const response:AxiosResponse<Warehouse[]> =
        await customAxios.get<Warehouse[]>( 'warehouses/' );  
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
export const updateWarehouse = async (warehouseToChange:Warehouse):Promise<Warehouse> => 
{
   try 
   {
     const resp:AxiosResponse<Warehouse> = 
         await customAxios.put<Warehouse>('warehouses/' +
           warehouseToChange.warehouseId, warehouseToChange);
     return resp.data;
   }
   catch(err: any) {
     if (err.response)
     { throw new Error ( err.response.status + ", " +
                          err.response.data ); 
     } 
     else if (err.request)
     {
       throw new Error ( "No response from server");
     }
     else { throw new Error ( err.message ); }
}};