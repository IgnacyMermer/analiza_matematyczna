import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
	{
		title: "Strona główna",
		path:'/',
		icon: <AiIcons.AiFillHome/>,
		iconClosed: <RiIcons.RiArrowDownSFill/>,
		iconOpened: <RiIcons.RiArrowUpSFill/>,
		subNav:[
			{
				title: "Strona o autorze",
				path:'/',
				icon: <AiIcons.AiFillHome/>,
				iconClosed: <RiIcons.RiArrowDownSFill/>,
				iconOpened: <RiIcons.RiArrowUpSFill/>,
				subNav:[
					{

					}
				]
			},
			{
				title: "Bibliografia",
				path:'/',
				icon: <AiIcons.AiFillHome/>,
				iconClosed: <RiIcons.RiArrowDownSFill/>,
				iconOpened: <RiIcons.RiArrowUpSFill/>,
				subNav:[
					{

					}
				]
			},
		]
	},
	{
		title: "Podstawy",
		path:'/',
		icon: <AiIcons.AiFillHome/>,
		iconClosed: <RiIcons.RiArrowDownSFill/>,
		iconOpened: <RiIcons.RiArrowUpSFill/>,
		subNav:[
			{
				title: "Kwantyfikatory",
				path:'/',
				icon: <AiIcons.AiFillHome/>,
				iconClosed: <RiIcons.RiArrowDownSFill/>,
				iconOpened: <RiIcons.RiArrowUpSFill/>,
				subNav:[
					{

					}
				]
			},
			{
				title: "Dwumian Newtona",
				path:'/',
				icon: <AiIcons.AiFillHome/>,
				iconClosed: <RiIcons.RiArrowDownSFill/>,
				iconOpened: <RiIcons.RiArrowUpSFill/>,
				subNav:[
					{

					}
				]
			},
		]
	},
	{
		title: "Analiza",
		path:'/',
		icon: <AiIcons.AiFillHome/>,
		iconClosed: <RiIcons.RiArrowDownSFill/>,
		iconOpened: <RiIcons.RiArrowUpSFill/>,
	},
];
