function StatsCard({icon, name, amount, per}){
    return(
        <div>
            <div>
                <i className={icon}></i>
                <h2>{name}</h2>
            </div>
            <div>
                <div>
                    <p>₹{amount}</p>
                    <p>This Month</p>
                </div>
                <div>{per}</div>
            </div>
        </div>
    )
}

export default StatsCard