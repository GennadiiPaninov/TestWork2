import { clsx } from 'clsx'

import s from './page.module.scss'

import FourHOne from '../../public/images/401.png'
import { Path, Typography, useIsMobile } from '../../shared'

export const Page = () => {
  const isMobile = useIsMobile(900)
  const path = Path.map((path, index) => {
    const classNames = {
      style: clsx(s.titleText, path.active ? s.activePath : ''),
    }

    return (
      <Typography className={classNames.style} key={index} variant={'small-text-16'}>
        {path.title} {index !== Path.length - 1 && '/'}
      </Typography>
    )
  })

  return (
    <div className={s.page}>
      <div className={s.pageWrapper}>
        <div className={s.pageContainer}>
          {!isMobile && <div className={s.pagePath}>{path}</div>}
          <section>
            <Typography className={s.postDescription} variant={'regular_text-20'}>
              Частые причины ошибки 401 — это неверные данные, неправильные настройки, блокировки
              доступа, однако, это лишь часть причин. Далее мы подробно рассмотрим эти и другие
              причины возникновения ошибки, а также дадим практические способы устранения на стороне
              пользователя и администратора ресурса.
            </Typography>
          </section>
          <article className={s.postInfo}>
            <Typography
              as={'h1'}
              className={s.postTitle}
              id={'Что такое ошибка 401'}
              variant={'Large-32'}
            >
              Что такое ошибка 401
            </Typography>
            <Typography className={s.postText} variant={'small-text-16'}>
              Код ошибки 401 Unauthorized (от англ. «отказ в доступе») — это сообщение, которое
              появляется на экране, когда пользователь не может получить доступ к определенному
              сайту целиком или только к какой-либо странице сайта. Допустим, он неправильно вводит
              имя и пароль — сразу появится соответствующее сообщение. 401-я, как правило,
              отображается в браузере как отдельная страница с описанием. Технически ее причина —
              отсутствие или недостаток данных для входа, чтобы получить доступ к нужному ресурсу.
            </Typography>
            <img alt={'Error 404'} src={FourHOne} />
            <Typography
              className={s.postText}
              id={'Причины ее появления'}
              variant={'small-text-16'}
            >
              Простыми словами, ошибка 401 — сбой сервера, из-за непрохождения пользователем
              авторизации или ввода им неверных данных.
            </Typography>
          </article>
        </div>
      </div>
    </div>
  )
}
