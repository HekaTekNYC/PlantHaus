import { useState, useEffect } from 'react'

export const useCardsPerPage = () => {
  const [cards, setCards] = useState(1)

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth
      if (width >= 1200) setCards(4)
      else if (width >= 1024) setCards(3)
      else if (width >= 768) setCards(2)
      else setCards(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return cards
}
