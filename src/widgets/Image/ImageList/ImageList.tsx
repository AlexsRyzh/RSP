import {useImageSearchSelect} from "@/widgets/Image/context/hooks";
import React from "react";
import {ProgressSpinner} from "primereact/progressspinner";
import styles from './styles.module.scss'
import {ImageCard} from "@/widgets/Image/ImageCard/ImageCard";
import {Image} from "@/widgets/Image/context/types";

const ImageList = () => {
    const status = useImageSearchSelect(state => state.images.status)
    const images = useImageSearchSelect(state => state.images.value)

    let element = null
    if (status === 'loading') {
        element = <ProgressSpinner/>
    }

    if (status === null) {
        element = <h1>Выполните поиск</h1>
    }

    if (status === 'success' && images.length === 0) {
        element = <h1>Ничего не найдено</h1>
    }

    return (
        <div className={styles.container}>
            {element === null ? images.map((data: Image) =>
                <ImageCard data={data} key={data.id}/>
            ) : element}
        </div>
    )
}

export {ImageList}