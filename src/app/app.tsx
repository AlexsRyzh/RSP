import {FC} from "react";
import {PrimeReactProvider} from "primereact/api";
import {AppRouter} from "@/app/router/";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

const App: FC = () => {
    return (
        <PrimeReactProvider>
            <AppRouter/>
        </PrimeReactProvider>
    )
}

export {App}

