import type { Meta, StoryObj } from '@storybook/react';
import ProductDisplay, {ProductDisplayProps} from '../ProductDisplay';
import { DummyProduct } from '../DummyInventory';
import {action} from 'storybook/actions';

/**
* Provides a framework for testing displaying a product
*/      
const metaProductDisplay = {
            component: ProductDisplay,
            title: 'Display Product',
            tags: ["autodocs"],
            parameters: {
                            componentSubtitle: "Displays all the warehouses for a product."
                        }
        } satisfies Meta<typeof ProductDisplay>;

export default metaProductDisplay;
type wDisplayStory = StoryObj<typeof ProductDisplay>;

/**
* Test using DummyProduct
*/      
export const ExistingProdStory:wDisplayStory = {
        args: {
                onRemove: (arg:number):void => {action("About to delete product ")(arg)},
                product: DummyProduct
        },      
        render: (args:ProductDisplayProps) => 
        <ProductDisplay product={args.product} onRemove={args.onRemove} />,
};
