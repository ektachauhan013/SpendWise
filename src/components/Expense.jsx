function Expense({icon, exp, cat, date, amount}) {
    return (
        <div>
            <div><i className={icon}></i></div>
            <div>
                <div>{exp}</div>
                <div>{cat} <strong>•</strong> {date}</div>
            </div>
            <div>₹{amount}</div>
            <div>
                <i className="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}

export default Expense