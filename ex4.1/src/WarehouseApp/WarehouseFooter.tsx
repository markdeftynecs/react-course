import React, { ReactNode } from 'react';

//function definition to selectively accept the properties from our parameter object
const WarehouseFooter = (
    { children, contactName, contactEmail }: WarehouseFooterProps): JSX.Element => {
    return (<>

        <footer className='bg-light' >
            <br />
            {
                //passes all the children (all the content from the owner component) passed to this component:
                React.Children.map(children,
                    c => { return c; })
            }

            {/* displays the props passed to the component */}
            Contact: {contactName} <br />
            Email: {contactEmail}
        </footer>

    </>);
}

//define the properties that the WarehouseFooter function will accept, including the special children node.
export type WarehouseFooterProps = {
    contactEmail: string,
    contactName: string,
    children?: ReactNode
};

export default WarehouseFooter;