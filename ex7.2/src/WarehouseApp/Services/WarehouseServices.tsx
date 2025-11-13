import { Warehouse } from '../WarehouseTypes';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const customAxios: AxiosInstance = axios.create(
    {
        baseURL: 'http://localhost/WarehouseTree/ProductManagement/'
    });

export const getWarehouses = async (): Promise<Warehouse[]> => {
    try {
        const response: AxiosResponse<Warehouse[]> =
            await customAxios.get<Warehouse[]>('warehouses/');
        return response.data;
    }
    catch (err: any) {
        if (err.response) {
            throw new Error(err.response.status + ", " +
                err.response.data);
        }
        else if (err.request) {
            throw new Error("No response from server");
        }
        else { throw new Error(err.message); }
    }
}

export const updateWarehouse = async (warehouseToChange: Warehouse): Promise<void> => {
    try {
        let response: AxiosResponse = await
            customAxios.put('warehouses/' +
                warehouseToChange.warehouseId, warehouseToChange);
    }
    catch (err: any) {
        if (err.response) {
            throw new Error(err.response.status + ", " +
                err.response.data);
        }
        else if (err.request) {
            throw new Error("No response from server");
        }
        else { throw new Error(err.message); }
    }
};


