import { Product, Warehouse, SiteInfo } from './WarehouseTypes';

export let siteInfo:SiteInfo = {
                SiteId: 1,
                SiteName: "Product Management",
                ContactEmail: "peter.vogel@phvis.com",
                ContactName: "Peter Vogel"
            };
            
let currentDate:Date = new Date();
export let DummyWarehouse:Warehouse = {
    warehouseId: -1, 
    productId: -1, 
    international: false, 
    warehouseName: '', 
    qoh: -1 
};
let warehouse0: Warehouse = {
    warehouseId: 1,   
    warehouseName: 'Eastern US',
    qoh: 5,
    productId: 109,
    international: false,
    address: {
        city: 'Pittsburg',
        street: '63 Overlea',
        country: 'USA'
    }
};

let warehouse1: Warehouse = {
    warehouseId: 2,
    warehouseName: 'Central US',
    qoh: 5,
    productId: 387,
    international: false,
    address: {
        city: 'Chicago',
        street: '500 Ridout st.',
        country: 'USA'
    }
};

let warehouse2: Warehouse = {
        warehouseId: 3,
        warehouseName: 'Central Canada',
        qoh: 5,
        productId: 109,
        international: true,
        address: {
            city: 'Regina',
            street: '319 Rae',
            country: 'Saskatchewan'
        }
};

let warehouse3: Warehouse = {
        warehouseId: 4,
        warehouseName: 'Great Britain',
        qoh: 15,
        productId: 387,
        international: true,
        address: {
            city: 'Manchester',
            street: '424 Overlea',
            country: 'United Kingdon'
        }
    };

let warehouse4: Warehouse = {
   warehouseId: 5,
   warehouseName: 'Scandanavia',
   qoh: 213,
   productId: 387,
   international: true,
   address: {
       city: 'Stockholm',
       street: '408 Durand',
       country: 'Sweden'
   }
};

export let warehouse5: Warehouse = {
    warehouseId: 6,
    warehouseName: 'South America',
    qoh: 112,
    productId: 423,
    international: true,
    address: {
        city: 'Rio de Janeiro',
        street: '53 St. Patrick',
        country: 'Brazil'
    }
 };
 
let warehouse6: Warehouse = {
    warehouseId: 7,
    warehouseName: 'East Asia',
    qoh: 5,
    productId: 387,
    international: true,
    address: {
        city: 'Hong Kong',
        street: '2322 Colborne',
        country: 'China'
    }
 };

 export let Warehouses:Warehouse[] = [  warehouse0,
                                        warehouse1,
                                        warehouse2, 
                                        warehouse3, 
                                        warehouse4,
                                        warehouse5, 
                                        warehouse6 
                                    ];

export let DummyProduct:Product = {
    productId: -1, 
    productName:'', 
    inStock: false, 
    warehouses:[]
};

export let Product1:Product = {
    productId: 109,
    productName: 'Widget',
    lastDelivery: new Date(currentDate.getFullYear()-1,12,15),
    inStock: true,
    warehouses: [ Warehouses[0], 
                  Warehouses[2] ]
}
let Product2:Product = {
    productId: 423,
    productName: "Sprocket",
    lastDelivery: new Date(currentDate.getFullYear()-1,11,12),
    inStock: true,
    warehouses: [ Warehouses[5] ]
}
let Product3:Product = {
    productId: 387,
    productName: "Doodad",
    lastDelivery: new Date(currentDate.getFullYear()-1,10,12),
    inStock: true,
    warehouses: [ Warehouses[1], 
                  Warehouses[3], 
                  Warehouses[4], 
                  Warehouses[6] ]
}
export let Products: Array<Product> = [Product1, Product2, Product3];