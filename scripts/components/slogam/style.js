import { CONSTANTS } from "../constants/index.js";

export const style = `
.EspacoMakerContainer,
.EspacoMakerContainer .background,
.EspacoMakerContainer .logo,
.EspacoMakerContainer .logoContainer {
	display: flex;
	justify-content: center;
	align-items: center;
}

.EspacoMakerContainer {
	position: relative;
	height: 100vh;
	width: 50vw;
	background-color: ${CONSTANTS.gray700};
}

.EspacoMakerContainer .background {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	background-color: ${CONSTANTS.gray700};
	z-index: 0;
	overflow: hidden;
}
.EspacoMakerContainer .background img {
	width: 95%;
	height: 95%;
	object-fit: contain;
}
.EspacoMakerContainer .logoContainer {
	flex-direction: column;
	align-items: flex-start;
	color: ${CONSTANTS.colorWhite};
	z-index: 2;
}

.EspacoMakerContainer .logoContainer img {
	height: 100%;
	width: auto;
	padding: 0.5rem;
}

.EspacoMakerContainer .logoTitle,
.EspacoMakerContainer .logoSubtitle {
	font-weight: normal;
	font-family: "Poppins", sans-serif;
}

.EspacoMakerContainer .logoTitle {
	font-size: 30pt;
}

.EspacoMakerContainer .logoSubtitle {
	font-size: 15pt;
	color: ${CONSTANTS.gray200};
}

/* mobile */
@media (max-width: 800px) {
	.EspacoMakerContainer {
		width: 100%;
		height: 100%;
		min-height: 40vh;
	}
}

`