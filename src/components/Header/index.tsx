import { SignInButton } from './SignInButton'
import styles from './styles.module.scss'

export function Header() {
    return(
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <img src="/images/logo.png" alt="Jr News" />
                    <nav>
                        <a className={styles.active}>Inicio</a>
                        <a>Postagens</a>
                    </nav>

                    <SignInButton />
                </div>
            </header>
        </>
    )
}