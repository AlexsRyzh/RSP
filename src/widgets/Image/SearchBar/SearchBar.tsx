import {FC, useState} from "react";
import {InputText} from "primereact/inputtext";
import styles from './styles.module.scss'
import {Button} from "primereact/button";
import {fetchImages} from "@/widgets/Image/context/slices/imageSearchSlice";
import {useImageSearchDispatch} from "@/widgets/Image/context/hooks";

const SearchBar: FC = () => {
    const dispatch = useImageSearchDispatch()


    const [query, setQuery] = useState('')


    const onClickFetchImageList = async () => {
        dispatch(fetchImages({query}))
    }

    return (
        <div className={styles.container}>
            <span className="p-input-icon-left">
                <i className="pi pi-search"/>
                <InputText
                    placeholder="Search"
                    className={styles.input}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </span>
            <Button onClick={onClickFetchImageList}>Поиск</Button>
        </div>
    )
}

export {SearchBar}