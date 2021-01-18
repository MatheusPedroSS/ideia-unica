import { useState } from "react";

function Home() {
    return (
        <div>
            <div>Home</div>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adcionarContador() {
        setContador(contador + 2);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adcionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;