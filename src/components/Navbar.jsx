const Navbar = () => {
    return <thead>
        <tr id="navbar">
            <th className="rank">#</th>
            <th className="name">Name</th>
            <th>Price</th>
            <th className="hide-data">1h</th>
            <th>24h</th>
            <th className="hide-data">7d</th>
            <th className="hide-data">Market</th>
            <th className="hide-data">Vol (24h)</th>
            <th className="hide-data">Circulating</th>
        </tr>
    </thead>
}
export default Navbar;