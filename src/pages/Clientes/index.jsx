import { useLocation } from "react-router-dom";

function Clientes() {
    let query = useQuery();

    let tipoPessoa = query.get("pessoa");
    

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    return (
        <div>
            Cliente: {tipoPessoa}
            <p>Lista de clientes</p>
            <ul>
                <li>Fulano</li>
                <li>Ciclano</li>
                <li>Beltrano</li>
            </ul>
        </div>
    );
}

export default Clientes;