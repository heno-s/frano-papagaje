import parrots from "../parrots.js";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Parrot from "./Parrot.jsx";
import ParrotsStyles from "./Parrots.module.css";

export default function Parrots() {
    const [activeKind, setActiveKind] = useState(null); // if null, show all

    function handleChangeActiveKind(kindName) {
        setActiveKind(kindName);
    }

    return (
        <div className={ParrotsStyles.container}>
            <Sidebar
                handleOnClick={handleChangeActiveKind}
                activeKind={activeKind}
            />
            <main>
                <h1 className={ParrotsStyles.title}>
                    Chované papagáje
                </h1>
                <div className={ParrotsStyles.parrots}>
                    {parrots
                        .filter(
                            (parrot) =>
                                activeKind === null ||
                                parrot.kind === activeKind
                        )
                        .map((parrot) => (
                            <Parrot key={parrot.name} {...parrot} />
                        ))}
                </div>
            </main>
        </div>
    );
}
