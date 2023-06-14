import { kinds } from "../parrots";
import SidebarStyles from "./Sidebar.module.css";

export default function Sidebar({ handleOnClick, activeKind }) {
    return (
        <div className={SidebarStyles.sidebar}>
            <div className={SidebarStyles.kinds}>
                {kinds.map((kindName) => (
                    <Button
                        key={kindName}
                        kindName={kindName}
                        onClick={handleOnClick}
                        isActive={activeKind === kindName}
                    />
                ))}
            </div>
            <Button
                onClick={handleOnClick}
                kindName={null}
                isActive={activeKind === null}
            />
        </div>
    );
}

function Button({ kindName, onClick, isActive }) {
    return (
        <button
            className={isActive ? SidebarStyles.active : null}
            onClick={() => onClick(kindName)}
        >
            {kindName === null ? "Všetky" : kindName}
        </button>
    );
}
