import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
	{
		title: 'Search All',
		path: '/',
		icon: <GiIcons.GiDrinkMe />,
		cName: 'nav-text',
	},
	{
		title: 'Vodka',
		path: '/selectedalch',
		icon: <BiIcons.BiDrink />,
		cName: 'nav-text',
	},
	{
		title: 'Whisky',
		path: '/selectedalch',
		icon: <BiIcons.BiDrink />,
		cName: 'nav-text',
		subNav: [
			{
				title: 'Whisky',
				path: '/selectedalch',
				icon: <FaIcons.FaGlassWhiskey />,
			},
			{
				title: 'Whiskey',
				path: '/selectedalch',
				icon: <FaIcons.FaGlassWhiskey />,
			},
			{
				title: 'Scotch',
				path: '/selectedalch',
				icon: <FaIcons.FaGlassWhiskey />,
			},
			{
				title: 'Bourbon',
				path: '/selectedalch',
				icon: <FaIcons.FaGlassWhiskey />,
			},
			{
				title: 'Irish Whiskey',
				path: '/selectedalch',
				icon: <FaIcons.FaGlassWhiskey />,
			},
			{
				title: 'Blended Whiskey',
				path: '/selectedalch',
				icon: <FaIcons.FaGlassWhiskey />,
			},
		],
	},
	{
		title: 'Rum',
		path: '/selectedalch',
		icon: <BiIcons.BiDrink />,
		cName: 'nav-text',
	},
	{
		title: 'Gin',
		path: '/selectedalch',
		icon: <BiIcons.BiDrink />,
		cName: 'nav-text',
	},
];
