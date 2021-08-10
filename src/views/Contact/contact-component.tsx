import { Header } from '_components'

import styles from './contact.module.scss'

function Contato() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <h1>Contato</h1>
          <h2>
            Esta aplicação foi criada como um desafio do processo seletivo da
            OLX. Você pode encontrar o repositório e o meu contato no LinkedIn
            abaixo.
          </h2>
          <ul>
            <li>
              Repositório:{' '}
              <a
                href="https://github.com/romulorvs/eng-zap-challenge-javascript"
                target="_blank"
                rel="noreferrer"
              >
                github.com/romulorvs/eng-zap-challenge-javascript
              </a>
            </li>
            <li>
              Linkedin:{' '}
              <a
                href="https://www.linkedin.com/in/dev-romulo-vieira/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/dev-romulo-vieira/
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default Contato
