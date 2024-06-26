import { useContext } from "react"
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
import CartContext from "../../../store/cart-context"

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)

    const price = `₹${props.meal.price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            amount: amount,
            price: props.meal.price,
            description: props.meal.description
        })
    }

    return <li className={classes.meal}>
        <div>
            <h3>{props.meal.name}</h3>
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} id={props.meal.id}/>
        </div>
    </li>
}

export default MealItem