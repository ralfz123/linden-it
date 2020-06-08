import React, { useState } from "react";
import styled from "styled-components";

export default function TabBar({ tabs }) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabContainer>
				{tabs.map((tab, index) => (
					<TabButton
						key={index}
						active={activeTab === index}
						onClick={() => setActiveTab(index)}
					>
						<Title active={activeTab === index}>{tab.title}</Title>
					</TabButton>
				))}
			</TabContainer>
			{tabs[activeTab].render()}
		</>
	);
}

const TabContainer = styled.section`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 40px;
	background-color: var(--color-gray-light);
	border-radius: 5px;
    margin:10px 0 20px;
	
`;
const TabButton = styled.button`
	border: 0px solid black;
	border-radius: 5px;
	color: var(--color-gray-dark);
	width: 100%;
	height: auto;
	margin: 3px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	transition: 0.3s;
	font-size: 12px;
	font-weight: ${(props) => (props.active ? "700" : "500")};
	box-shadow: ${(props) =>
		props.active ? "0px 1px 4px rgba(0, 0, 0, 0.25)" : "0"};
	background: ${(props) => (props.active ? "var(--color-light)" : "#f2f2f2")};
	&:focus {
		outline: none;
	}
`;
const Title = styled.span`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
    width:100%;
	text-transform: uppercase;
	font-size: 11px;
	color: var(--color-gray-dark);
	transition: 0.6s;
`;
