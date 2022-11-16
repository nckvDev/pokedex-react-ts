import * as C from './styles'
import { ReactComponent as LinkedinLogo } from '../../assets/logo-linkedin.svg'
import { ReactComponent as GithubLogo } from '../../assets/logo-github.svg'
import { ReactComponent as TelegramLogo } from '../../assets/logo-telegram.svg'

export const SocialMedia = () => {
  return (
    <C.Container>
      <li>
        <C.Link href='#'>
          <LinkedinLogo />
        </C.Link>
      </li>
      <li>
        <C.Link href='https://github.com/nckvDev'>
          <GithubLogo />
        </C.Link>
      </li>
      <li>
        <C.Link href='#'>
          <TelegramLogo />
        </C.Link>
      </li>
    </C.Container>
  )
}
