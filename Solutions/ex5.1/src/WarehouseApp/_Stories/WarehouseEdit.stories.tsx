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