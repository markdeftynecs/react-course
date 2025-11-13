
interface INotifyingHOC { 
   message:any
}

export const NotifyingHOC = <T extends object>
 (InComponent: React.ComponentType<T> ):React.FC<T & INotifyingHOC> =>
  ({ message, ...props}:INotifyingHOC ) =>
              {
                console.log(message);
                return(<> <InComponent {...props as T} /></>);
             };

             interface INotifyingHOC { 
                message:any
             }
             
interface IStylingHOC { 
   componentStyle:{}
}
 export const StylingHOC = <T extends object>
  (InComponent: React.ComponentType<T> ):React.FC<T & IStylingHOC> =>
      ({ componentStyle, ...props}:IStylingHOC ) =>
        {
            return(<>
                         <div style={componentStyle}>
                           <> <InComponent {...props as T} /></>;
                         </div>
                    </>);
        };
                         