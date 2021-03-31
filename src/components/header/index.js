import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Container, Logo, Background, ButtonLink, Feature } from './styles/header';

export default function Header ({ bg= true, children, ...restProps }) {
	return bg ? <Background { ...restProps}>{children}</Background> : children;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink { ...restProps}>{children}</ButtonLink>
};

// Header.Feature = function HeaderFeature({ children, ...restProps }) {
//   return <Feature>{children}</Feature>;
// };

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container { ...restProps}>{children}</Container>
};


Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<Logo { ...restProps} />
		</ReactRouterLink>
	);
};
