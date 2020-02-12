import React from "react"
import styled from "styled-components";

const Clients = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: space-between;
	width: 80%;
	max-width: 1600px;
	margin: 0 auto 3rem;
	${props => props.theme.breakpoints('sm')`
		margin: 0 auto 7rem;
	`}
`;

const Client = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 2rem 0;
	width: 50%;
	${props => props.theme.breakpoints('md')`
		width: 25%;
		height: 5rem;
  	`}
`;

const ClientLogo = styled.svg`
	max-width: 30vw;
	height: 10vw;
	max-height: 5vh;
	opacity: .5;
	${props => props.theme.breakpoints('md')`
		max-width: 10vw;
		max-height: 5vh;
	`}
`;

const ClientLogoImg = styled.img`
	max-width: 30vw;
	opacity: .5;
	${props => props.theme.breakpoints('md')`
		max-width: 10vw;
	`}
`;

export default () => (
	<Clients>
		<Client>
			<ClientLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 77"><g fill="#000" fillRule="nonzero"><path d="M159.622 74.883V64.268c0-.828.65-1.493 1.48-1.493h7.468c.73 0 1.325.6 1.325 1.344a1.32 1.32 0 01-1.325 1.32h-6.005v2.757h5.143c.727 0 1.325.6 1.325 1.34 0 .738-.598 1.323-1.325 1.323h-5.143v2.86h6.105c.73 0 1.328.594 1.328 1.338a1.32 1.32 0 01-1.328 1.318h-7.568c-.83 0-1.48-.66-1.48-1.493v.001zm-17.957-10.689c0-.838.646-1.497 1.483-1.497h.308c.708 0 1.13.347 1.535.876l5.723 7.58v-7.019a1.47 1.47 0 011.463-1.477c.807 0 1.457.662 1.457 1.477V74.96c0 .835-.65 1.497-1.48 1.497h-.093c-.717 0-1.142-.35-1.544-.873l-5.93-7.85v7.285c0 .81-.65 1.476-1.464 1.476-.81 0-1.457-.665-1.457-1.477V64.193l-.001.001zm-10.818 5.176a1.314 1.314 0 00-1.042 2.122l3.294 4.21c.35.446.787.774 1.46.774.713 0 1.405-.54 1.405-1.38 0-.464-.193-.776-.483-1.143l-2.058-2.523c1.64-.685 2.698-2 2.698-4.14v-.038c0-1.283-.408-2.354-1.158-3.108-.884-.896-2.213-1.383-3.927-1.383h-4.677c-.826 0-1.48.667-1.48 1.498v10.728c0 .83.654 1.49 1.48 1.49.83 0 1.483-.66 1.483-1.49v-9.52h2.946c1.447 0 2.325.66 2.325 1.938v.046c0 1.143-.824 1.92-2.268 1.92l.002-.001zm-21.664 5.513V64.268a1.48 1.48 0 011.48-1.493h7.468c.738 0 1.333.6 1.333 1.344a1.32 1.32 0 01-1.332 1.32h-6v2.757h5.14c.73 0 1.328.6 1.328 1.34 0 .738-.6 1.323-1.33 1.323h-5.14v2.86h6.103c.73 0 1.33.594 1.33 1.338 0 .737-.6 1.318-1.33 1.318h-7.567c-.824 0-1.48-.66-1.48-1.493l-.003.001zm-11.996-1.205c2.426 0 4.06-1.653 4.06-4.062v-.04c0-2.41-1.634-4.1-4.06-4.1h-1.84v8.202h1.84zm-4.795-9.408c0-.83.65-1.492 1.48-1.492h3.315c4.23 0 7.157 2.932 7.157 6.763v.037c0 3.83-2.927 6.8-7.157 6.8H93.87c-.83 0-1.478-.66-1.478-1.495V64.27zm-9.096-.118c0-.83.656-1.493 1.486-1.493.827 0 1.48.66 1.48 1.492V75a1.48 1.48 0 01-1.48 1.497c-.83 0-1.486-.665-1.486-1.497V64.152zM71.62 65.535h-2.85c-.753 0-1.368-.62-1.368-1.383 0-.754.615-1.377 1.367-1.377h8.665c.746 0 1.36.623 1.36 1.377 0 .763-.614 1.383-1.36 1.383h-2.853V75a1.481 1.481 0 11-2.963 0v-9.465h.002zm-9.036-2.603c.714.084 1.23.695 1.135 1.357-.094.658-.766 1.116-1.48 1.028-.87-.143-1.805-.25-2.705-.25-1.354 0-2.97.25-2.97 1.435 0 .913 1.078 1.212 2.857 1.598 2.184.475 4.902 1.066 4.902 4.073 0 2.71-2.274 4.325-6.08 4.325-1.202 0-2.45-.12-3.89-.377a1.24 1.24 0 01-1.024-1.41c.106-.68.75-1.138 1.415-1.03 1.136.236 2.165.415 3.185.415 1 0 3.332-.16 3.332-1.614 0-1.113-1.316-1.46-2.908-1.765a13.724 13.724 0 01-.756-.16c-1.95-.51-4.02-1.262-4.02-3.883 0-2.55 2.01-4.006 5.52-4.006 1.466 0 2.576.133 3.486.266l.001-.002zm-20.03 6.438c-.724 0-1.316.586-1.316 1.31 0 .312.103.585.27.812l3.297 4.21c.344.446.788.774 1.464.774.706 0 1.4-.54 1.4-1.38 0-.464-.19-.776-.478-1.143l-2.06-2.523c1.635-.685 2.693-2 2.693-4.14v-.038c0-1.283-.402-2.354-1.154-3.108-.883-.896-2.21-1.384-3.923-1.384h-4.68c-.826 0-1.48.667-1.48 1.498v10.728c0 .83.654 1.49 1.48 1.49.83 0 1.483-.66 1.483-1.49v-9.52h2.942c1.445 0 2.332.66 2.332 1.938v.046c0 1.143-.83 1.92-2.27 1.92zM26.32 70.68l-1.867-4.483-1.868 4.484h3.734l.001-.001zm-8.335 3.774L22.68 63.75c.33-.738.924-1.19 1.735-1.19h.17c.81 0 1.39.452 1.718 1.19l4.693 10.704c.096.218.154.406.154.604 0 .8-.614 1.44-1.406 1.44-.69 0-1.15-.407-1.425-1.027l-.904-2.146h-5.928l-.943 2.238c-.25.587-.752.935-1.367.935-.768 0-1.37-.62-1.37-1.403 0-.21.077-.422.177-.64l.001-.001zM8.67 70.68L6.8 66.198 4.935 70.68H8.67zM.334 74.455L5.03 63.75c.33-.74.926-1.19 1.733-1.19h.174c.81 0 1.39.452 1.714 1.19l4.7 10.704c.092.218.15.406.15.604 0 .8-.614 1.44-1.405 1.44-.692 0-1.155-.407-1.422-1.027l-.907-2.146H3.838l-.942 2.238c-.25.587-.753.935-1.367.935-.773 0-1.37-.62-1.37-1.403 0-.21.076-.422.175-.64zM84.882 10.445c-11.225 0-20.324 9.192-20.324 20.525 0 11.34 9.1 20.53 20.324 20.53 11.245 0 20.347-9.19 20.347-20.53 0-11.333-9.11-20.525-20.35-20.525m-.04 39.52c-10.28 0-18.64-8.44-18.64-18.81 0-10.378 8.36-18.817 18.64-18.817 10.28 0 18.64 8.44 18.64 18.816 0 10.37-8.37 18.81-18.65 18.81"/><path d="M83.95 25.573c-2.952 0-5.354 2.422-5.354 5.4 0 2.97 2.402 5.393 5.355 5.393 2.95 0 5.36-2.422 5.36-5.393 0-2.978-2.4-5.4-5.35-5.4"/><path d="M84.84 14.784c-8.94 0-16.213 7.348-16.213 16.365 0 9.02 7.273 16.37 16.214 16.37 8.95 0 16.22-7.35 16.22-16.38 0-9.02-7.27-16.37-16.22-16.37m11.3 25.03c-.17.644-.76 1.03-1.55 1.03-.23 0-.46-.03-.71-.086-1.49-.335-2.883-1.05-4.153-2.117a9.753 9.753 0 01-6.282 2.27c-5.432 0-9.85-4.46-9.85-9.94 0-5.49 4.42-9.947 9.85-9.947 1.56 0 3.217.55 5.044 1.67.32-.804 1.575-1.59 2.52-1.59.815 0 1.42.374 2.04 1.007.627.634.84 1.48.833 2.39L93.87 34.5c-.02.448.048.997.1 1.328.165.926.725 1.77 1.52 2.26.56.354.84 1.07.665 1.705m-4.78-32.62c-1.96 0-3.553-1.61-3.553-3.59C87.814 1.615 89.41 0 91.37 0c1.964 0 3.56 1.613 3.56 3.588 0 1.98-1.596 3.59-3.56 3.59"/></g></ClientLogo>
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-molo.png" />
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-rigshospitalet.png" />
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-aller.png" />
		</Client>
		<Client>
			<ClientLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 52"><g fill="#212121" fillRule="nonzero"><path d="M91.35 40.58L76.6 12.03 61.87 40.58h3.11l11.63-22.67 11.63 22.67zM21.35 12.9H32.8v27.68H21.35zM42.9 18.62h1.51c5.33 0 8.9 3.54 8.9 8.13 0 4.59-3.57 8.15-8.85 8.15H42.9v5.69H45c8.5 0 14.42-6.19 14.42-13.83s-6-13.83-14.51-13.83h-2l-.01 5.69z"/></g></ClientLogo>
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-bif.png" />
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-lomax.png" />
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-cvation.png" />
		</Client>
	</Clients>
)