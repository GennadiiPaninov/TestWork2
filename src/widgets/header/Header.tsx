import s from './header.module.scss'

import { BurgerMenu, Line, TelegramIcon, TheGlobe, ViberIcon, WhatsAppIcon } from '../../public'
import avatar from '../../public/images/avatar.png'
import { ButtonsTitle, Menu, Services, Typography, useIsMobile } from '../../shared'
import { HeaderPanel } from './headerPanel'
export const Header = () => {
  const isMobile = useIsMobile(900)
  const menu = Menu.map((title, index) => {
    return (
      <li key={index}>
        <Typography as={'a'} className={s.titleText} href={'#'} variant={'regular_text-16'}>
          {title}
        </Typography>
      </li>
    )
  })
  const services = Services.map((title, index) => {
    return (
      <Typography className={s.titleText} key={index} variant={'regular_text-16'}>
        {title}
      </Typography>
    )
  })
  const buttons = ButtonsTitle.map((title, index) => {
    return (
      <button className={s.headerPostButton} key={index} type={'button'}>
        <Typography className={s.buttonText} variant={'regular_text-16'}>
          {title}
        </Typography>
      </button>
    )
  })

  return (
    <div className={s.headerContainer}>
      <div className={s.headerItems}>
        <div className={s.headerMenu}>
          <Typography as={'h1'} className={s.headerSpan} variant={'Large'}>
            GUSAROV
          </Typography>

          {!isMobile && <Line />}
          {!isMobile && (
            <nav>
              <ul className={s.headerMenuUl}>{menu}</ul>
            </nav>
          )}
        </div>
        <div className={s.headerUtilities}>
          {!isMobile && (
            <Typography className={s.titleText} variant={'regular_text-16'}>
              EN
            </Typography>
          )}
          {!isMobile && (
            <div className={s.headerTheGlobe}>
              <TheGlobe />
              <Typography className={s.titleText} variant={'regular_text-16'}>
                BYN
              </Typography>
            </div>
          )}{' '}
          {!isMobile && (
            <button className={s.buttonBecomeACustomer} type={'button'}>
              <Typography className={s.buttonText} variant={'regular_text-16'}>
                Стать клиентом
              </Typography>
            </button>
          )}
          {!isMobile && (
            <Typography className={s.titleText} variant={'regular_text-16'}>
              +375 (29) 755-26-66
            </Typography>
          )}
          {!isMobile && (
            <div className={s.headerSocialMedia}>
              <TelegramIcon />
              <WhatsAppIcon />
              <ViberIcon />
            </div>
          )}
          <BurgerMenu />
        </div>
      </div>
      {!isMobile && <div className={s.headerServices}>{services}</div>}

      <div className={s.headerPostDescription}>
        <Typography as={'h1'} className={s.headerSpan} variant={'Large'}>
          Ошибка 401 Unauthorized: что это за ошибка, диагностика и как ее исправить
        </Typography>
        <div className={s.headerUserInfo}>
          <img alt={'avatar'} className={s.headerAvatar} src={avatar} />
          <div className={s.headerUserDescription}>
            <Typography className={s.titleText} variant={'regular_text-18'}>
              Андрей Гусаров
            </Typography>
            <Typography className={s.titleText} variant={'small-text'}>
              Директор маркетингового агентства GUSAROV
              <br />
              Стаж 15 лет
            </Typography>
          </div>
        </div>
        <div className={s.headerPostInfo}>
          <div className={s.headerPostInfoDate}>
            <div>
              <Typography className={s.titleText} variant={'small-text-16'}>
                Опубликовано:
              </Typography>
              <Typography className={s.titleText} variant={'regular_text-16'}>
                {' '}
                24 июля 2023
              </Typography>
            </div>
            <div>
              <Typography className={s.titleText} variant={'small-text-16'}>
                Обновлено:
              </Typography>
              <Typography className={s.titleText} variant={'regular_text-16'}>
                {' '}
                25 апреля 2024
              </Typography>
            </div>
          </div>

          <HeaderPanel />
          <div className={s.headerPostButtons}>{buttons}</div>
        </div>
      </div>
    </div>
  )
}
