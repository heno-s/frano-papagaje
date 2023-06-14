export default function Parrot({
    image,
    name,
    description,
    mutations,
}) {
    return (
        <div class="parrot">
            <img src={image} alt={name} />
            <span class="name">{name}</span>
            <p class="description">{description}</p>
            {mutations && (
                <div className="mutations">
                    <span>mutácie:</span>
                    <div>
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
