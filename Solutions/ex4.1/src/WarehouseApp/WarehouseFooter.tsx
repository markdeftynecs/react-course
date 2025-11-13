import React, {ReactNode} from 'react';

const WarehouseFooter = ({children, contactName,
    contactEmail}:WarehouseFooterProps):JSX.Element => {
    return (<>
               <footer className='bg-light' >
                    <br/>
                    {
                        React.Children.map(children,
                                        c => { return c ;})
                        }
                    Contact: {contactName} <br/>
                    Email: {contactEmail}
                </footer>
            </>);
}
export type WarehouseFooterProps = {
    contactEmail: string,
    contactName: string,
    children?: ReactNode
    };
export default WarehouseFooter;