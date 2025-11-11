export type SiteInfo = 
{
    SiteId: number,
    SiteName: string,
    ContactEmail: string,
    ContactName: string
};

export type Address = {
    street: string,
    city: string,
    country: string 
};

export type Warehouse = {
       warehouseId: number,
       warehouseName: string,
       qoh: number,
       productId: number,
       international: boolean,
       address?: Address
};
    
export type Product = {
        productId: number,
        productName: string,
        inStock: boolean,
        lastDelivery?: Date,
        warehouses: Array<Warehouse>
};    
