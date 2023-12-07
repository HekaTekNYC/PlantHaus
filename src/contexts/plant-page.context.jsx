// import { createContext, useState, useEffect } from 'react'
// import { getPlantPageAndDocuments } from '../utils/firebase/firebase.utils.jsx'

// export const PlantPageContext = createContext({
//   reviewsMap: {},
// })

// export const PlantPageProvider = ({ children }) => {
//   const [plantPageMap, setPlantPageMap] = useState({})

//   useEffect(() => {
//     const getPlantPageMap = async () => {
//       const plantPageMap = await getPlantPageAndDocuments()
//       console.log('Plant Page Map:', plantPageMap)
//       //this is where we are affecting state change.
//       setPlantPageMap(plantPageMap)
//     }
//     getPlantPageMap()
//   }, [])

//   const value = { plantPageMap }

//   return (
//     <PlantPageContext.Provider value={value}>{children}</PlantPageContext.Provider>
//   )
// }
