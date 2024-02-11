import { useState } from "react";
import "./App.css";

const bearGifs2 = [
  {
    id: 1,
    phrases: "No.",
    image:
      "https://tenor.com/view/bear-kiss-bear-kisses-kiss-kisses-love-gif-22536058.gif",
  },
  {
    id: 2,
    phrases: "Are You sure",
    image: "https://tenor.com/view/love-bear-panda-gif-18519831.gif",
  },
  {
    id: 3,
    phrases: "Really sure?",
    image: "https://tenor.com/view/love-bear-panda-gif-18519830.gif",
  },
  {
    id: 4,
    phrases: "Pookie please",
    image: "https://tenor.com/view/milk-mocha-milkandmochabears-cute-sad-gif-6687707215043094293.gif",
  },
  {
    id: 5,
    phrases: "Don't do this to me",
    image:
      "https://tenor.com/view/dudu-bubu-dudu-bear-bubu-bear-dudu-sad-gif-4448420702393269990.gif",
  },
  {
    id: 6,
    phrases: "I'm gonan cry....",
    image: "https://tenor.com/view/love-you-gif-20040131.gif",
  },
  {
    id: 7,
    phrases: "You're breaking my heart heart ;(",
    image:
      "https://tenor.com/view/milkandmocha-cry-sad-tears-upset-gif-12962738.gif",
  },
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleClick = () => {
    setNoCount((prevValue) => prevValue + 1);
  };
  const getNoButtonText = () => {
    return bearGifs2[Math.min(noCount, bearGifs2.length - 1)].phrases;
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <div className="data-container">
          <img
            alt="bear-kissing"
            src="https://tenor.com/view/bear-kiss-bear-kisses-kiss-kisses-love-gif-22536058.gif"
            className="image"
          />
          <div className="text">Yayyy!!!</div>
        </div>
      ) : (
        <div className="data-container">
          <img
            alt={noCount < bearGifs2.length - 1 ? bearGifs2[noCount + 1].phrases : bearGifs2[bearGifs2.length - 1].phrases}
            src={noCount < bearGifs2.length - 1 ? bearGifs2[noCount + 1].image : bearGifs2[bearGifs2.length - 1].image}
            className="image"
          />
          <div>Will you be my valentine?</div>
          <button
            className="yesButton"
            id="button"
            style={{
              fontSize: yesButtonSize,
              borderRadius: yesButtonSize * 0.5,
              width: yesButtonSize * 3,
              heightwidth: yesButtonSize * 3,
              maxWidth: '408px'
            }}
            onClick={() => setYesPressed(true)}
          >Yes</button>
          <button onClick={handleClick} className="noButton">
            {getNoButtonText()}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
