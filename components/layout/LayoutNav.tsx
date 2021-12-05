import s from './LayoutNav.module.css'
import Link from "next/link";

export const LayoutNav = () => {
    return(
        <div className={s.navContainer}>
            <span><Link href='/comedies'><h2>Comedies</h2></Link></span>
            <span><Link href='/top-movies'><h2>Top movies</h2></Link></span>
            <span><Link href='/'><h2>Home</h2></Link></span>
        </div>
    )
}