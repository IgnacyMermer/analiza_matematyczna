import React, {useState} from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import DropdownItem from "react-bootstrap/DropdownItem";

const SideBarLink=styled(Link)`
  display: flex;
  color: #e1e9fc;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  justify-content: ${({isOpened})=>(isOpened?'left':'center')};
  
  &:hover{
    background: #252831;
    border-left: 1px solid #632ce4;
    cursor: pointer;
    
  }
`;

const SideBarLabel=styled.span`
	margin-left: 16px;
`;

const DropdownLink=styled(Link)`	  
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  
  &:hover{
    background: #632ce4;
    cursor: pointer;
    
  }
`;

export default function SubMenu({item,key,isOpened}){
	console.log(isOpened);

	const [subnav, setSubnav] = useState(false);
	const showSubnav = ()=>{
		if(isOpened) {
			setSubnav(!subnav);
		}
	}

	return(
		<div>
			<SideBarLink to={item.path} onClick={item.subNav&&showSubnav}>
				<div>
					{item.icon}
					{isOpened?<SideBarLabel>
						{item.title}
					</SideBarLabel>:null}
				</div>
				<div>
					{isOpened?(item.subNav&&subnav?item.iconOpened:item.subNav?item.iconClosed:null):null}
				</div>
			</SideBarLink>
			{isOpened&&subnav&&item.subNav.map((item, index)=>{
				return(
					<DropdownLink to={item.path} key={index}>
						{item.title}
					</DropdownLink>
				);
			})}
		</div>
	);
}