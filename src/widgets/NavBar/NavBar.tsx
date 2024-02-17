import React, {FC} from "react";
import {NavBarPropsType} from "@/widgets/NavBar/types";
import {Link} from "react-router-dom";
import styles from './styles.module.scss'

const NavBar: FC = (props: NavBarPropsType) => {

    return (
        <nav className={styles.container}>
            <Link to={'/'} className={styles.link}>
                Список картинок
            </Link>
            <Link to={'/example-chat'} className={styles.link}>
                Чат
            </Link>
        </nav>
    )
}

export {NavBar}