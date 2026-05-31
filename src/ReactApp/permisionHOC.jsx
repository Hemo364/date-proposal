import { useState } from "react"

export const permisionHOC = (WrappedComponent) => {

    const NewComponent = (props) => {
        const [permision, setPermision] = useState(true); 
        
        return permision ? <WrappedComponent {...props} /> : null
    }
    return NewComponent;
}
