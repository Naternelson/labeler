import { Redirect } from "react-router-dom";
const ProtectedComponent = props => {
    const {condition, redirectTo} = props
    if(condition instanceof Function && condition()){
        return {children}
    } else {
       {redirectTo ? <Redirect to={redirectTo}/> :  null}
    }
}

export default ProtectedComponent