const CarDetails = ({ brand, km, color}) => {
    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>marca: {brand}</li>
                <li>Kilometrage: {km} </li>
                <li>Cor: {color} </li>
            </ul>
        </div>
    )
}

export default CarDetails
