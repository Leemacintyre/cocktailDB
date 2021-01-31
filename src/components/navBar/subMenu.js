import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
	display: flex;
	color: #e1e9fc;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	list-style: none;
	height: 60px;
	text-decoration: none;
	font-size: 10px;
`;

const sidebarLabel = styled.span``;

export const SubMenu = ({ item }) => {
	return (
		<div>
			<SidebarLink to={item.path}>
				<div>
					{item.icon}
					<sidebarLabel>{item.title}</sidebarLabel>
				</div>
			</SidebarLink>
		</div>
	);
};
