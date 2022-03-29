export const style = () => {
  return `
  .Load {
    display: none;
  }
  
  .Load.active {
    background-color: #3e5764;
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 8;
  }
  
  .Spinner {
    width: 80px;
    height: 80px;
    position: relative;
  }
  
  .Load h1 {
    color: #96a7af;
  }
  
  .Spinner div {
    position: absolute;
    width: 64px;
    height: 64px;
    border: 8px solid #ff941a;
    border-radius: 50%;
    animation: Spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #ff941a transparent transparent transparent;
  }
  
  .Spinner div:nth-child(1) {
    animation-delay: -0.45s;
  }
  
  .Spinner div:nth-child(2) {
    animation-delay: -0.3s;
  }
  
  .Spinner div:nth-child(3) {
    animation-delay: -0.15s;
  }
  
  @keyframes Spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  `;
}