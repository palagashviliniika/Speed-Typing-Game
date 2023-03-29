import {useState, useEffect, useRef} from 'react'

function useWordGame(defaultTime = 10) {
    const [text, setText] = useState("")
    const [wordCount, setWordCount] = useState(0)
    const [timeRemaining, setTimeRemaining] = useState(defaultTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const textBoxRef = useRef(null)
  
    const handleText = (e) => {
      const {value} = e.target
      setText(value)
    }
  
    const countWords = (text) => {
      const length = text.trim().split(' ')
      return length.filter(word => word !== "").length
    }
  
    const startGame = () => {
      setIsTimeRunning(true)
      setTimeRemaining(defaultTime)
      setText("")
      textBoxRef.current.disabled=false
      textBoxRef.current.focus()
    }
  
    const endGame = () => {
      setIsTimeRunning(false)
      setWordCount(countWords(text))
    }
    
    useEffect(() => {
      if(isTimeRunning && timeRemaining > 0){
        setTimeout(() => {
          setTimeRemaining(prevTime => prevTime - 1)
        }, 1000)
      } else if (timeRemaining === 0) {
        endGame()
      }
    }, [isTimeRunning, timeRemaining])

    return {textBoxRef, handleText, text, isTimeRunning, timeRemaining, startGame, wordCount}
}

export default useWordGame