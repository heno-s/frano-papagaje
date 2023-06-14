import ParrotStyles from "./Parrot.module.css";

export default function Parrot({
    image,
    name,
    description,
    mutations,
}) {
    return (
        <div className={ParrotStyles.parrot}>
            <div className={ParrotStyles.header}>
                <img src={image} alt={name} />
                <div>
                    <span className={ParrotStyles.name}>{name}</span>
                    <p className={ParrotStyles.description}>
                        {description}
                    </p>
                </div>
            </div>
            {mutations && (
                <div className={ParrotStyles["mutations-container"]}>
                    <span className={ParrotStyles["mutations-title"]}>
                        mutácie:
                    </span>
                    <div className={ParrotStyles.mutations}>
                        {mutations.map((mutation) => (
                            <img
                                src={mutation.image}
                                alt={mutation.name}
                                title={mutation.name}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
