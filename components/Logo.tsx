const Logo = () => {
	return (
		<div className="logo-wrapper">
			<a
				href="https://www.zenduty.com"
				target="_blank"
				rel="noreferrer"
				style={{ ["--bg" as string]: `intial` }}
			>
				{/* <svg
					viewBox="0 0 430 103"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M138.915 67.7322H152.343C158.098 67.7322 162.787 72.4032 162.787 78.1358H124.208C124.208 66.8826 132.947 58.1772 141.047 50.3214L149.146 42.4654H134.013C128.684 42.4654 124.208 38.0065 124.208 32.6984H162.574C162.574 43.9516 153.835 52.6569 145.949 60.7255L138.915 67.7322Z"
						// fill="#1A1B25"
					/>
					<path
						d="M208.613 58.6097H175.576C175.788 61.7945 176.854 64.3423 178.985 66.2529C180.904 68.1642 183.462 68.8012 186.446 68.8012C190.709 68.8012 193.692 66.89 195.611 63.4932H207.973C206.694 67.7396 204.137 71.1365 200.513 73.8967C196.677 76.4445 192.201 78.1432 186.872 78.1432C182.609 78.1432 178.559 77.0816 175.149 75.1709C171.739 73.2597 168.968 70.7119 167.05 67.3146C165.131 63.9177 164.066 60.0958 164.066 55.2123C164.066 50.7535 165.131 46.507 167.05 43.1098C168.968 39.7126 171.526 37.1647 175.149 35.2538C178.559 33.3428 182.396 32.2812 186.872 32.2812C191.135 32.2812 194.972 33.1305 198.382 34.8291C201.792 36.74 204.35 39.2879 206.268 42.4728C208.186 45.87 209.039 49.4795 209.039 53.9383C208.826 56.0616 208.826 57.3355 208.613 58.6097ZM197.103 50.9658C197.103 47.9932 196.037 45.6576 193.906 44.1714C191.774 42.2605 189.43 41.6235 186.446 41.6235C183.462 41.6235 181.33 42.4728 179.199 44.1714C177.281 45.6576 176.002 47.9932 175.788 51.1781H197.316V50.9658H197.103Z"
						// fill="#1A1B25"
					/>
					<path
						d="M260.194 42.8958C262.112 39.4986 264.457 36.7384 267.654 34.8275C270.851 32.9165 274.261 31.8549 278.098 31.8549C281.082 31.8549 283.639 32.4919 286.41 33.7659C289.181 35.0398 291.312 36.7384 292.804 38.8617V3.4034H304.314V77.717H292.804V71.1348C291.526 73.258 289.394 75.1693 286.836 76.4429C284.065 77.717 281.295 78.5666 277.884 78.5666C274.048 78.5666 270.637 77.505 267.44 75.5938C264.243 73.6831 261.898 70.7103 259.98 67.3129C258.062 63.9161 257.209 59.8817 257.209 54.9983C257.423 50.5395 258.275 46.293 260.194 42.8958ZM291.312 48.2039C290.247 46.293 288.541 44.8067 287.05 43.7451C285.131 42.6835 283.213 42.0465 281.082 42.0465C278.95 42.0465 277.032 42.6835 275.114 43.7451C273.196 44.8067 271.916 46.0806 270.851 48.2039C269.785 50.1149 269.146 52.4504 269.146 55.2106C269.146 57.971 269.785 60.3062 270.851 62.43C271.916 64.5532 273.622 65.8268 275.114 66.8884C277.032 67.95 278.95 68.5871 281.082 68.5871C283.213 68.5871 285.131 67.95 287.05 66.8884C288.968 65.8268 290.247 64.1281 291.312 62.43C292.378 60.5187 293.018 58.183 293.018 55.2106C293.018 52.2381 292.378 50.1149 291.312 48.2039Z"
						// fill="#1A1B25"
					/>
					<path
						d="M254.865 55.4246V77.9312H244.208V55.4246C244.208 51.1781 243.142 47.9932 241.011 45.87C238.879 43.5344 236.534 42.4728 233.551 42.4728C230.566 42.4728 228.222 43.5344 226.091 45.87C224.172 47.9932 223.106 51.3904 223.106 55.4246V77.9312H212.449V55.4246C212.449 50.9658 213.515 46.9316 215.22 43.3221C217.138 39.9249 219.483 37.1647 222.68 35.2538C225.877 33.3428 229.288 32.2812 233.337 32.2812C237.387 32.2812 240.797 33.3428 243.995 35.2538C247.192 37.1647 249.536 39.7126 251.455 43.3221C253.799 46.9316 254.865 50.9658 254.865 55.4246Z"
						// fill="#1A1B25"
					/>
					<path
						d="M429.642 32.9228L411.099 76.6619L400.298 102.455H388.149L399.163 76.6619L385.081 42.2602L381.259 32.9228H382.999H394.047L405.557 64.1346L417.28 32.9228H429.642Z"
						// fill="#1A1B25"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M388.538 42.2602H385.081L381.259 32.9228H382.999L388.538 42.2602Z"
						// fill="#1A1B25"
					/>
					<path
						d="M341.827 32.9172V54.999C341.827 59.0331 340.761 62.4305 338.843 64.5537C336.712 66.8895 334.367 67.9511 331.383 67.9511C328.399 67.9511 326.054 66.8895 323.923 64.5537C321.792 62.4305 320.726 59.2457 320.726 54.999V32.9172H310.069V54.999C310.069 59.4577 310.921 63.4921 313.266 67.1015C315.184 70.7108 317.529 73.2591 320.726 75.1698C323.923 77.081 327.333 78.1426 331.383 78.1426C335.433 78.1426 338.843 77.081 342.04 75.1698C345.238 73.2591 347.582 70.4988 349.5 67.1015C351.206 63.4921 352.271 59.4577 352.271 54.999V32.9172H341.827Z"
						// fill="#1A1B25"
					/>
					<path
						d="M372.766 63.9172V42.2602H385.081L381.259 32.9228H382.999L382.997 32.9178H372.766V14.4456H361.256V32.9178H352.271V42.2602H361.256V63.9172C361.256 73.2597 366.158 77.7186 375.749 77.7186H382.997V68.1636H377.668C375.749 68.1636 374.684 67.9516 373.831 67.102C372.979 66.6775 372.766 65.6159 372.766 63.9172Z"
						// fill="#1A1B25"
					/>
					<path
						d="M57.6258 25.3448C54.0338 25.3448 48.7405 21.3765 48.7405 16.2745V9.47186C48.7405 4.36988 50.2529 0.401642 57.6258 0.401642C64.9986 0.401642 66.511 4.36988 66.511 9.47186V16.2745C66.511 21.3765 61.2178 25.3448 57.6258 25.3448Z"
						// fill="#1A1B25"
					/>
					<path
						d="M112.86 89.4017H73.3687L82.2403 65.1014C90.4597 68.6814 105.813 78.3757 114.183 86.3784C115.317 87.7013 114.561 89.4017 112.86 89.4017Z"
						// fill="#1A1B25"
					/>
					<path
						d="M74.2152 32.5261L44.7816 51.6663C36.8416 46.9422 28.3235 40.8405 22.6521 35.3605C21.5178 34.2267 22.2741 32.5261 23.9755 32.5261H74.2152Z"
						// fill="#1A1B25"
					/>
					<path
						d="M2.613 89.4016H72.3714L92.2215 34.98C92.5996 33.6573 91.8428 32.3345 90.1418 32.5235H75.5848L45.5266 52.1757L23.9753 66.1591C22.4631 67.1041 20.9504 68.0487 19.4382 69.1824L19.2491 69.3711C14.523 72.5836 10.1749 76.1741 6.20491 80.3311C4.50347 82.2207 2.80204 84.2995 1.10062 86.567C0.155387 87.7007 1.10063 89.4016 2.613 89.4016Z"
						// fill="#1A1B25"
					/>
				</svg> */}
			</a>
		</div>
	)
}

export default Logo