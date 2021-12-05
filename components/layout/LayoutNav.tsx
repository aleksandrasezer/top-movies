import s from '../../styles/LayoutNav.module.css'
import Link from "next/link";

export const LayoutNav = () => {
    return(
        <div className={s.navContainer}>
            <span><Link href='/comedies' passHref><h2>Comedies</h2></Link></span>
            <span><Link href='/top-movies' passHref><h2>Top movies</h2></Link></span>
            <span><Link href='/' passHref><h2>Home</h2></Link></span>
        </div>
    )
}