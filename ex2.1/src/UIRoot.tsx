const UIRoot = ():JSX.Element => {
    return (<>
               <header>
                    <div className='jumbotron text-center bg-light'>
                        <h1>Welcome to Warehouse Management</h1>
                    <p>We know where it is</p>
                    </div>
                    <br />
                </header>   
                <div className='container text-primary'>
                    Warehouse information goes here
                </div>
                <footer className='bg-light'>
                    <br />
                    <div>&copy;2024 Tree Warehouse Management</div>                    
                </footer>
            </>);
}
export default UIRoot;