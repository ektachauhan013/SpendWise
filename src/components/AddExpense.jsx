import { useState } from "react"

function AddExpense() {
    const [formData, setFormData] = useState ({ 
        amount : 0,
        description : "",
        category : "",
        date :  new Date().toISOString().split("T")[0]
    })


    function handleChange(event){
        const{name,value} = event.target;
        setFormData({
            ...formData,
            [name] : value
        })
        }

    function handleSubmit(event){
        event.preventDefault()

        
    }

    return(
        <>
            <div>
                <h2> Add Expense </h2>
                <i className="fa-solid fa-xmark"></i>
            </div>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor = "amount">Amount</label>
                    <input id="amount" name="amount" type="number" value={formData.amount} onChange={handleChange} placeholder = "Enter Amount" required/>
                </div>

                <div>
                    <label htmlFor = "description">Description</label>
                    <input id="description" name="description" type="text" value={formData.description} onChange={handleChange} placeholder = "e.g. Lunch, Metro, Shopping..." required/>
                </div>

                <div>
                    <label htmlFor = "category">Category</label>
                    <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                        <option value="">Select category</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Education">Education</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Health">Health</option>
                        <option value="Bills">Bills</option>
                        <option value="Work">Work</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor = "date">date</label>
                    <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required/>
                </div>

                <div>
                    <button type="button">Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
                
            </form>
        </>
    )
}

export default AddExpense