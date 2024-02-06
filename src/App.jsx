import { useState } from 'react'
import './App.css'

const phrases = [
  "No.",
  "Are You sure",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "I'm gonan cry....",
  "You're breaking my heart heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const yesButtonSize = noCount * 20 + 16;

  const handleClick = () => {
    setNoCount(prevValue => prevValue + 1)
  }
  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {
        yesPressed ? (<div>
          <img
            alt='bear-kissing'
            src="https://tenor.com/view/bear-kiss-bear-kisses-kiss-kisses-love-gif-22536058.gif"
          />
          <div className='text'>Yayyy!!!</div>
        </div>)
          :
          (<div>
            <img
              alt='sorry-feeling-bear'
              src='https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif'
            />
            <div>Will you be my valentine?</div>
            <div>
              <button
                className='yesButton'
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}>
                Yes
              </button>
              <button onClick={handleClick}
                className='noButton'>
                {getNoButtonText()}
              </button>
            </div>
          </div>)
      }
    </div>
  )
}

export default App
