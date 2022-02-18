import { ActiveLink } from '../ActiveLink'
import { SignInButton } from './SignInButton'
import styles from './styles.module.scss'

export function Header() {


    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <img src="/images/logo.png" alt="Jr News" />
                    <nav>
                        <ActiveLink activeClassName={styles.active} href="/">
                            <a>Inicio</a>
                        </ActiveLink>
                        <ActiveLink activeClassName={styles.active} href="/posts">
                            <a>Postagens</a>
                        </ActiveLink>
                    </nav>

                    <SignInButton />
                </div>
            </header>
        </>
    )
}