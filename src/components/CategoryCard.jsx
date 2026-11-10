function CategoryCard({icon, name, spent, total}){
    return(
        <div>
            <i className={icon}></i>
            <h2>{name}</h2>
            <p>₹{spent} / ₹{total}</p>
            <div></div>
        </div>
    )
}

export default CategoryCard