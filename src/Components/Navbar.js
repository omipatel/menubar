import React from 'react'; 
import { 
Nav, 
NavLink, 
Bars, 
NavMenu, 
NavBtn, 
NavBtnLink, 
} from './NavbarElements'; 

const Navbar = () => { 
return ( 
	<> 
	<Nav> 
		<Bars /> 
		<NavMenu> 
		<NavLink to='/' activeStyle> 
			Home 
		</NavLink> 
		<NavLink to='/woman' activeStyle> 
			Woman
		</NavLink> 
		<NavLink to='/man' activeStyle> 
			Man
		</NavLink> 
		<NavLink to='/kids' activeStyle> 
			Kids
		</NavLink> 
		<NavLink to='/blogs' activeStyle> 
			Blogs 
		</NavLink> 
		<NavLink to='/sign-up' activeStyle> 
			Sign Up 
		</NavLink> 
		{/* Second Nav */} 
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */} 
		</NavMenu> 
		<NavBtn> 
		<NavBtnLink to='/sign-in'activeStyle> Sign In</NavBtnLink> 
		</NavBtn> 
	</Nav> 
	</> 
); 
}; 

export default Navbar;
