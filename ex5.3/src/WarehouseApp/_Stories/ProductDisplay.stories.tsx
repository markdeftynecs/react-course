
/*
Not resolved issues by

npx clear-npx-cache
npx storybook@latest upgrade --force

change the import.
from
//import { action } from '@storybook/addon-actions';
to
import { action } from 'storybook/actions';

npm run storybook
*/


//import { action } from '@storybook/addon-actions';
import { action } from 'storybook/actions';

import type { Meta, StoryObj } from '@storybook/react';
import ProductDisplay, { ProductDisplayProps } from '../ProductDisplay';
import { DummyProduct } from '../DummyInventory';

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
export const ExistingProdStory: wDisplayStory = {
        args: {
                onRemove: (arg: number): void => { action("About to delete product ")(arg) },
                product: DummyProduct
        },
        render: ( {product, onRemove} ) => <ProductDisplay product={product} onRemove={onRemove}/>,
};
