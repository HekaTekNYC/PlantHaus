import { PiPottedPlantLight, PiChatsCircleLight } from 'react-icons/pi'
import { BsBox2Heart } from 'react-icons/bs'

import './commitments.styles.scss'

const Commitments = () => {
  const pointsData = [
    {
      id: 1,
      icon: <PiPottedPlantLight size={43} />,
      ariaLabel: 'Potted plant icon representing top-quality plants',
      header: 'Top-Quality Plants',
      info: 'Handpicked from top-rated growers for unbeatable quality at the best prices.',
    },
    {
      id: 2,
      icon: <BsBox2Heart size={34} className="delivery-icon" />,
      ariaLabel: 'Box with heart icon representing delivery and care',
      header: 'Doorstep Delivery',
      info: 'Speedy delivery, happy vibes — and if your plant isn’t feeling the love, we’ll fix it.',
    },
    {
      id: 3,
      icon: <PiChatsCircleLight size={40} />,
      ariaLabel: 'Chat bubble icon representing expert support',
      header: 'Expert Support',
      info: 'Get care tips with every order and chat with our online plant pros anytime.',
    },
  ]
  return (
    <>
      <div className="commitments-container">
        <h2 className="commitments-header">Our Commitment</h2>
        <img
          src="/images/fern-slate.svg"
          alt="slate green fern leaf"
          className="fern-com"
        />
        <img
          src="/images/palm-slate.svg"
          alt="slate green leaf"
          className="palm-com"
        />
        <img
          src="/images/palm2-ash.svg"
          alt="ash green leaf"
          className="palm2-com"
        />
        <img
          src="/images/leaf-dark.svg"
          alt="slate green leaf"
          className="delicate-com"
        />
        <div className="commitments-row">
          {pointsData.map(({ icon, header, info, id, ariaLabel }) => (
            <div className="point-container" key={id}>
              <div className="point-icon" role="img" aria-label={ariaLabel}>
                {icon}
              </div>
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
