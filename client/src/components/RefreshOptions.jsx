import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const RefreshOptions = () => {

    const [style, setStyle] = useState(["selected", "not-selected", "not-selected", "not-selected"]);
    const [preference, setPreference] = useState(Cookies.get("Preference") === undefined ? 0 : Cookies.get("Preference"));

    useEffect(() => {
        Cookies.set("Preference", preference, {expires: 30});
        setStyle(style.map((pref, index) => {
            if (index == preference) {
                return "selected"
            } else {
                return "not-selected"
            }
        }))        
    }, [preference]);

    return <div id="refresh-buttons">
        <button className={style[0]} onClick={() => setPreference(0)}>Never Refresh</button>
        <button className={style[1]} onClick={() => setPreference(1)}>Every 60 sec</button>
        <button className={style[2]} onClick={() => setPreference(2)}>Every 15 min</button>
        <button className={style[3]} onClick={() => setPreference(3)}>Every 30 min</button>
    </div>
}
export default RefreshOptions;