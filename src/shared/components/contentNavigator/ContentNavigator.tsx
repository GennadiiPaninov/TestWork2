import { clsx } from 'clsx'

import s from './contentNavigator.module.scss'

import { ContentNavigateType } from '../../assets'
import { Typography } from '../typography'
type Props = {
  ContentNavigatePath: ContentNavigateType
}
export const ContentNavigator = ({ ContentNavigatePath }: Props) => {
  const navigatePath = ContentNavigatePath.path.map((path, index) => {
    const classNames = {
      style: clsx(s.titleText, 0 === index ? s.activePath : ''),
    }

    return (
      <Typography
        as={'a'}
        className={classNames.style}
        // href={`#${path}`}
        key={index}
        variant={'small-text-16'}
      >
        {path}
      </Typography>
    )
  })

  return (
    <div className={s.navigatorWrapper}>
      <Typography variant={'regular_text-18'}>{ContentNavigatePath.title}</Typography>
      <div className={s.navigatorContainer}>{navigatePath}</div>
    </div>
  )
}
