import parrots from "../parrots.js";

import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Parrot from "./Parrot.jsx";
import ParrotsStyles from "./Parrots.module.css";

export default function Parrots() {
    const [activeKind, setActiveKind] = useState(null); // if null, show all
    const [imageUrl, setImageUrl] = useState(null);

    function handleChangeActiveKind(kindName) {
        setActiveKind(kindName);
    }

    function handleImageClick(imageUrl) {
        setImageUrl(imageUrl);
    }

    const dialog = useRef();

    useEffect(() => {
        if (imageUrl === null) {
            return;
        }

        dialog.current.showModal();
        dialog.current.addEventListener("click", (evt) => {
            dialog.current.close();
            setImageUrl(null);
        });
    }, [imageUrl]);

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
                            <Parrot
                                key={parrot.name}
                                {...parrot}
                                handleImageClick={handleImageClick}
                            />
                        ))}
                </div>

                {imageUrl && (
                    <dialog ref={dialog}>
                        <img src={imageUrl} alt="papagáj" />
                    </dialog>
                )}
            </main>
        </div>
    );
}
