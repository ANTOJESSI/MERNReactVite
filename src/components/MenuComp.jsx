import {NavLink} from 'react-router-dom'
export default function MenuComp(){
    return(
        <>
        <p>
            <NavLink to='/'>Home |</NavLink>
            <NavLink to='/about'>About |</NavLink>
            <NavLink to='/contact'>Contact |</NavLink>
            <NavLink to='/blog'>Blog </NavLink>
        </p>
        </>
    )

}