import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { alchType } from '../../redux/actions';

const SidebarLink = styled(Link)`
	display: flex;
	color: #143642;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	list-style: none;
	height: 60px;
	text-decoration: none;
	font-size: 18px;
	&:hover {
		background: #ec9a29;
		border-left: 4px solid #a8201a;
		cursor: pointer;
	}
`;

const SidebarLabel = styled.span`
	margin-left: 16px;
`;

const DropdownLink = styled(Link)`
	background: #e3dde2;
	height: 60px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #143642;
	font-size: 18px;
	&:hover {
		background: #efa742;
		cursor: pointer;
		border-left: 4px solid #a8201a;
	}
`;

export const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);
	const dispatch = useDispatch();

	const showSubnav = () => setSubnav(!subnav);

	return (
		<>
			<SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
				<div onClick={item.subNav ? '' : () => dispatch(alchType(item.title))}>
					{item.icon}
					<SidebarLabel>{item.title}</SidebarLabel>
				</div>
				<div>
					{item.subNav && subnav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null}
				</div>
			</SidebarLink>
			{subnav &&
				item.subNav.map((item, index) => {
					return (
						<DropdownLink
							to={item.path}
							key={index}
							onClick={() => dispatch(alchType(item.title))}>
							{item.icon}
							<SidebarLabel>{item.title}</SidebarLabel>
						</DropdownLink>
					);
				})}
		</>
	);
};
