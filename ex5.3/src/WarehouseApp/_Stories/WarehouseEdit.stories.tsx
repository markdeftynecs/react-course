import type { Meta, StoryObj } from '@storybook/react';
import WarehouseEdit, {WarehouseEditProps} from '../WarehouseEdit';
import { DummyWarehouse } from '../DummyInventory';

/**
* Provides a framework for testing editing a warehouse
*/      
const metaWarehouseEdit = {
            component: WarehouseEdit,
            title: 'Edit Warehouse',
            tags: ["autodocs"],
            parameters: {
                            componentSubtitle: "Displays default, new, and invalid data."
                        }
        } satisfies Meta<typeof WarehouseEdit>;

export default metaWarehouseEdit;
type wEditStory = StoryObj<typeof WarehouseEdit>;

const EmptyProps:WarehouseEditProps = {
        warehouse: DummyWarehouse
};

/**
* Tests for an **Empty/New** Warehouse object
*/      
export const EmptyStory:wEditStory = {
        args: {
                warehouse: EmptyProps.warehouse
        },
        render: (args:WarehouseEditProps) => <WarehouseEdit
        warehouse={args.warehouse} />,
};

const ExistingProps:WarehouseEditProps = {
                warehouse: {
                                warehouseId: 0,
                                warehouseName: "New Product",
                                qoh: 10,
                                productId: 387,
                                international: false 
                          }
};
export const Existing: wEditStory = {
                args: {
                        warehouse: ExistingProps.warehouse
                },
                render:( {warehouse} ) => 
                                <WarehouseEdit warehouse={warehouse}/>
                };


const BadDataProps:WarehouseEditProps = {
                                          warehouse: {
                                          warehouseId: 99,
                                          warehouseName: "Product 387 with negative qoh",
                                          qoh: -5, 
                                          productId: 387, 
                                          international: false 
                                        }
};
export const BadData:wEditStory = {
                                   args: {
                                           warehouse: BadDataProps.warehouse
                                   },
                                   render:
                                      ( {warehouse} ) => <WarehouseEdit warehouse={warehouse}/>
};