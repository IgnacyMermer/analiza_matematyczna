import React, {useState} from "react";
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SideBarData} from "./SideBarData";
import SubMenu from "./SubMenu";
import Navbar from "../navbar/Navbar";

const Nav = styled.div`background: #15171c; height: 80px; display: flex; justify-content: flex-start; align-items: center;`;
const NavIcon = styled.div`margin-left: 2rem;font-size: 2rem; height: 80px; display: flex; justify-content: flex-start; z-index: 30;align-items: center;`;
const SideBarNav = styled.nav`background: #15171c;width: ${({sidebar})=>(sidebar?'250px': '60px')}; height: 100vh;display: flex;
  justify-content: center; position: fixed;top: 0; transition: 250ms; z-index: 20;`;
const SideBarWrap = styled.nav`width: 100%`;

export default function SideBar(){
	const [sidebar, setSidebar] = useState(false);
	const showSideBar=()=>{
		setSidebar(!sidebar);
	}
	return(
		<div>
			<Nav>
				<NavIcon>
					{!sidebar?<FaIcons.FaBars onClick={setSidebar}/>:null}
					{!sidebar?<Link to="/" className="navbar-logo">
						Strona
					</Link>:null}
				</NavIcon>

				<Navbar/>


			</Nav>
			<SideBarNav sidebar={sidebar}>
				<SideBarWrap>
					{sidebar?<NavIcon>
						<AiIcons.AiOutlineClose onClick={showSideBar}/>
					</NavIcon>:null}
					{SideBarData.map((item, index)=>{
						return <SubMenu item={item} key={index} isOpened={sidebar}/>
					})}
				</SideBarWrap>
			</SideBarNav>
		</div>
	);
}