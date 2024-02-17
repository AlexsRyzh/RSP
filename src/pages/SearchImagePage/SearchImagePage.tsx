import React from "react";
import {SearchBar} from "@/widgets/Image/SearchBar/SearchBar";
import {SearchImageProvider} from "@/widgets/Image/SearchImageProvider";
import {ImageList} from "@/widgets/Image/ImageList/ImageList";
import styles from './styles.module.scss'

const SearchImagePage = () => {
    return (
        <SearchImageProvider>
            <section className={styles.container}>
                <SearchBar/>
                <ImageList/>
            </section>
        </SearchImageProvider>
    )
}

export {SearchImagePage}