import { LiaShippingFastSolid } from 'react-icons/lia'
import { PiPottedPlant, PiChatsCircle } from 'react-icons/pi'

import './commitments.styles.scss'

const Commitments = () => {
  const pointsData = [
    {
      id: 1,
      icon: <LiaShippingFastSolid size={40} />,
      header: 'Top-Quality Plants',
      info: 'Handpicked from top-rated growers for unbeatable quality at the best prices.',
    },
    {
      id: 2,
      icon: <PiPottedPlant size={40} />,
      header: 'Doorstep Delivery',
      info: 'Speedy delivery, happy vibes — and if your plant isn’t feeling the love, we’ll fix it.',
    },
    {
      id: 3,
      icon: <PiChatsCircle size={40} />,
      header: 'Expert Support',
      info: 'Get care tips with every order and chat with our online plant pros anytime.',
    },
  ]
  return (
    <>
      <div className="commitments-container">
        <h2 className="commitments-header">Our Commitment</h2>
        <img
          src="/images/fern-slate.png"
          alt="slate green fern leaf"
          className="fern-com"
        />
        <img
          src="/images/palm-slate.png"
          alt="slate green leaf"
          className="palm-com"
        />
        <div className="commitments-row">
          {pointsData.map(({ icon, header, info, id, svg }) => (
            <div className="point-container" key={id}>
              <div className="point-icon">{icon}</div>
              <h3 className="point-header">{header}</h3>
              <p className="point-info">{info}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Commitments
