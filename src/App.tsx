import s from './app.module.scss'

import { ArrowUp, ChatIcon } from './public'
import { ContentNavigatePath, ContentNavigator, useIsMobile } from './shared'
import { Header, Page } from './widgets'
export const App = () => {
  const isMobile = useIsMobile(900)

  return (
    <>
      {!isMobile && (
        <div className={s.icons}>
          <ArrowUp />
          <ChatIcon />
        </div>
      )}
      <Header />
      <div>
        <ContentNavigator ContentNavigatePath={ContentNavigatePath} />
        <Page />
      </div>
    </>
  )
}
