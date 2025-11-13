import {action} from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import ProductDisplay, {ProductDisplayProps} from '../WarehouseApp/ProductDisplay'; 
import { DummyProduct } from '../WarehouseApp/DummyInventory';

/**
* Provides a framework for displaying a product with its warehouses
*/
const metaProductDisplay = {
    component: ProductDisplay,
    title: 'Display Product',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: "Displays a product with its warehouses."     
    }
} satisfies Meta<typeof ProductDisplay>;

export default metaProductDisplay;
type wEditStory = StoryObj<typeof ProductDisplay>;

/**
* Test for a **Standard** Product
*/
const ExistingProps:ProductDisplayProps = {
    product: {
            productId: 423,
            productName: "Sprocket",
            lastDelivery: new Date(new Date().getFullYear()-1,11,12),
            inStock: true,
            warehouses: [ {
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
            } ]
    },
    onRemove: () => {}
  };
  export const ExistingProdStory: wEditStory = {
     args: {
             onRemove: (arg:number):void => {action("About to delete product ") (arg);},
             product: ExistingProps.product
             },
     render: ( {product, onRemove} ) => <ProductDisplay product={product} onRemove={onRemove}/>
  };