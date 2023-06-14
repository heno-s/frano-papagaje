import parrots from "../parrots.js";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Parrot from "./Parrot.jsx";

export default function Parrots() {
    const [activeKind, setActiveKind] = useState(null); // if null, show all

    function handleChangeActiveKind(kindName) {
        setActiveKind(kindName);
    }

    return (
        <div className="container">
            <Sidebar
                handleOnClick={handleChangeActiveKind}
                activeKind={activeKind}
            />
            <main>
                <h1>Chované papagáje</h1>
                <div className="parrots">
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
