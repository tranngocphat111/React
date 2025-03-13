import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { data } from "../data.js";
// const data = {
//     id: "m1",
//     name: "Mì ống phô mai",
//     price: "8.99",
//     description:
//         "Mì ống nấu chín hoàn hảo trộn với phô mai cheddar kem, phủ lớp vụn bánh mì giòn.",
//     image: "mac-and-cheese.jpg",
//     category: "Món Chính",
//     details: {
//         preparationTime: "30 phút",
//         servingSize: "2 người",
//     },
//     quantity: 1,
// };
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
    removeCartItem: () => {},
    removeAllCartItem: () => {},
    totalQuantity: 0,
});
export default function CartProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
        totalQuantity: 0,
    });

    function handleAddItemToCart(id, quantity) {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === id
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + quantity,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const meal = data.find((meal) => meal.id === id);
                updatedItems.push({
                    id: meal.id,
                    name: meal.name,
                    price: meal.price,
                    description: meal.description,
                    image: meal.image,
                    category: meal.category,
                    details: {
                        preparationTime: meal.details.preparationTime,
                        servingSize: meal.details.servingSize,
                    },
                    quantity: quantity,
                });
            }

            return {
                items: updatedItems,
            };
        });
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === productId
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
            };
        });
    }
    const handleRemoveCartItem = (id) => {
        setShoppingCart((prevShoppingCart) => {
            const newItems = prevShoppingCart.items.filter(
                (item) => item.id !== id
            );

            return {
                ...prevShoppingCart,
                items: newItems,
            };
        });
    };
    useEffect(() => {
        setShoppingCart((prevShoppingCart) => {
            const updateItems = [...prevShoppingCart.items];
            const total = updateItems.reduce(
                (sum, item) => sum + item.quantity,
                0
            );
            return {
                ...prevShoppingCart,
                totalQuantity: total,
            };
        });
    }, [shoppingCart.items]);

    const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
        removeCartItem: handleRemoveCartItem,
        totalQuantity: shoppingCart.totalQuantity,
    };

    return (
        <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
    );
}
