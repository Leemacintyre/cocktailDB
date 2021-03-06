import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import { SubMenu } from './subMenu';

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Nav = styled.div`
	background: #dad2d8;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background: #dad2d8;
	width: 250px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
	transition: 350ms;
	z-index: 10;
	@media only screen and (max-width: 400px) {
		overflow: scroll;
	}
`;
const SidebarNavInvisible = styled.nav`
	background: transparent;
	width: calc(100% - 250px);
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	right: ${({ sidebar }) => (sidebar ? '0' : '110%')};
	transition: 350ms;
	z-index: 9;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

export const NavBar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: '#0F8B8D' }}>
				<Nav>
					<NavIcon to='#'>
						<FaIcons.FaBars onClick={showSidebar} />
					</NavIcon>
				</Nav>
				<SidebarNavInvisible
					sidebar={sidebar}
					onClick={showSidebar}></SidebarNavInvisible>
				<SidebarNav className='media' sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon to='#'>
							<AiIcons.AiOutlineClose onClick={showSidebar} />
						</NavIcon>
						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />;
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};
