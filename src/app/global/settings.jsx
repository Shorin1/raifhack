import { useState } from 'react';

const useSettings = () => {
    const [name, setName] = useState("iwGdupo");
    const [bgColor, setBgColor] = useState("white");
    const [headerColor, setHeaderColor] = useState("white");

    return {
        name: [name, setName],
        bg: [bgColor, setBgColor],
        header: [headerColor, setHeaderColor]
    }
}

export default useSettings;