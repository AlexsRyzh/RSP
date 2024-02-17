import {Image as ImageType} from "@/widgets/Image/context/types";
import {Card} from "primereact/card";
import styles from './styles.module.scss'
import {Image} from "primereact/image";

interface Props {
    data: ImageType
}

const ImageCard = ({data}: Props) => {
    return (
        <Card>
            <Image
                src={data.url}
                alt="Image"
                width={'250px'}
                height={'250px'}
                className={styles.img}
                preview
            />
        </Card>

    )
}

export {ImageCard}