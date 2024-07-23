import s from './headerPanel.module.scss'

import { Comment, Eye, Heart, ToShare, Watch } from '../../../public'
import Vk from '../../../public/images/img.png'
import Xicon from '../../../public/images/img_1.png'
import {
     DropdownMenuContent, DropdownMenuItem,
    Typography, useIsMobile

} from '../../../shared'
export const HeaderPanel = () => {
  const isMobile = useIsMobile(900)

  return (
    <div className={s.postPanel}>
      <div className={s.panelContainer}>
        <Watch />
        <Typography className={s.titleText} variant={'small-text-16'}>
          10 мин
        </Typography>
      </div>
      <div className={s.panelContainer}>
        <Eye />
        <Typography className={s.titleText} variant={'small-text-16'}>
          13144
        </Typography>
      </div>
      <div className={s.panelContainer}>
        <Heart />
        <Typography className={s.titleText} variant={'small-text-16'}>
          56
        </Typography>
      </div>
      <div className={s.panelContainer}>
        {/*<DropdownMenuContent>*/}
        {/*  <DropdownMenuTrigger>*/}
        {/*    <ToShare />*/}
        {/*  </DropdownMenuTrigger>*/}
        {/*  <DropdownMenuContent>*/}
        {/*    <DropdownMenuItem>*/}
        {/*      <div className={s.dropDownItemContainer}>*/}
        {/*        {!isMobile && <img alt={''} className={s.dropDownImg} src={Vk} />} Вконтакте*/}
        {/*      </div>*/}
        {/*    </DropdownMenuItem>*/}
        {/*    <DropdownMenuItem>*/}
        {/*      <div className={s.dropDownItemContainer}>*/}
        {/*        {!isMobile && <img alt={''} className={s.dropDownImg} src={Xicon} />} X*/}
        {/*      </div>*/}
        {/*    </DropdownMenuItem>*/}
        {/*  </DropdownMenuContent>*/}
        {/*</DropdownMenuContent>*/}
        {/*{!isMobile ? (*/}

        {/*) : (*/}
        {/*  <ToShare />*/}
        {/*)}*/}
        <Typography className={s.titleText} variant={'small-text-16'}>
          5
        </Typography>
      </div>
      <div className={s.panelContainer}>
        <Comment />
        <Typography className={s.titleText} variant={'small-text-16'}>
          1
        </Typography>
      </div>
    </div>
  )
}
