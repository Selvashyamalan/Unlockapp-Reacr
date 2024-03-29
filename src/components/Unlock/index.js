import {useState} from 'react'

import {MainContainer,ImageAndTextContainer, Image, Description, Button} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const ImgUrl = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const onClickButton = () => {
    setLock(prevState => !prevState)
  }

  return (
    <MainContainer>
      <ImageAndTextContainer>
        <Image src={ImgUrl} alt={lock ? 'lock' : 'unlock'} />
        <Description>Your Device is {lock ? 'Locked' : 'Unlocked'}</Description>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {lock ? 'Unlock' : 'Lock'}
      </Button>
    </MainContainer>
  )
}

export default Unlock
