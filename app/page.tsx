import { CardsContainer } from '@components/CardsContainer'
import { Rays } from '@components/Rays'
import { SkipRenderOnClient } from '@components/SkipRenderOnClient'
import styles from '@styles/home.module.css'

export default function Home() {

  return (
    <div className={styles.main}>
      <Rays />
      <section className={styles.intro}>
        <h1 className={styles.textIntro}>
          <span className={styles.highlighted}>Francisco Fernández</span>, desarrollador de software y creador de herramientas digitales.
          Actualmente trabajando en <span className={styles.highlighted}>OHTIC</span>.
        </h1>
      </section>
      <SkipRenderOnClient maxSizeToRender={768}>
        <CardsContainer />
      </SkipRenderOnClient>
    </div>
  )
}
