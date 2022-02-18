import Link from 'next/link'

import { SignInButton } from './SignInButton'
import styles from './styles.module.scss'

export function Header() {
    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <img src="/images/logo.png" alt="Jr News" />
                    <nav>
                        <Link href="/">
                            <a className={styles.active}>Inicio</a>
                        </Link>
                        <Link href="/posts">
                            <a>Postagens</a>
                        </Link>
                    </nav>

                    <SignInButton />
                </div>
            </header>
        </>
    )
}