import {Outlet} from "react-router-dom";
import {NavBar} from "@/widgets/NavBar/NavBar";
import styles from './styles.module.scss'

const AppLayout = () => {
    return (
        <main className={styles.container}>
            <NavBar/>
            <main className={styles.main}>
                <Outlet/>
            </main>
        </main>
    )
}

export {AppLayout}