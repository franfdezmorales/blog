import { CardsContainer } from '@components/CardsContainer'
import { Rays } from '@components/Rays'
import { Suspense } from 'react'
import { LastVisit } from '@components/LastVisit'
import { SkipRenderOnClient } from '@components/SkipRenderOnClient'
import styles from '@styles/home.module.css'

export default function Home() {

  return (
    <div className={styles.main}>
      <Rays />
      <section className={styles.intro}>
        <h1 className={styles.textIntro}>
          <span className={styles.highlighted}>Francisco Fernández</span>, ingeniero frontend.
          Actualmente trabajando en <span className={styles.highlighted}>apipana.io</span>.
        </h1>
      </section>
      <SkipRenderOnClient maxSizeToRender={768}>
        <CardsContainer />
      </SkipRenderOnClient>
      <Suspense fallback={null}>
        <LastVisit />
      </Suspense>
    </div>
  )
}
