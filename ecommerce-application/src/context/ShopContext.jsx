import { createContext, useMemo, useState } from "react";
import { products as initialProducts } from "../assets/assets";

export const ShopContext = createContext();

function createEmptyCart() {
    return {};
}

const ShopContextProvider = ({ children }) => {
    const [products] = useState(initialProducts);
    const [cart, setCart] = useState(createEmptyCart());
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSubCategory, setSelectedSubCategory] = useState("All");
    const [selectedSizes, setSelectedSizes] = useState(new Set());
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortBy, setSortBy] = useState("relevance");

    const addToCart = (productId, size) => {
        setCart(prev => {
            const key = `${productId}_${size || ""}`;
            const next = { ...prev };
            next[key] = (next[key] || 0) + 1;
            return next;
        });
    };

    const removeFromCart = (productId, size) => {
        setCart(prev => {
            const key = `${productId}_${size || ""}`;
            if (!prev[key]) return prev;
            const next = { ...prev };
            delete next[key];
            return next;
        });
    };

    const updateQuantity = (productId, size, quantity) => {
        setCart(prev => {
            const key = `${productId}_${size || ""}`;
            const next = { ...prev };
            if (quantity <= 0) {
                delete next[key];
            } else {
                next[key] = quantity;
            }
            return next;
        });
    };

    const getCartCount = () => {
        return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    };

    const getCartAmount = () => {
        let total = 0;
        Object.entries(cart).forEach(([key, qty]) => {
            const [productId] = key.split("_");
            const product = products.find(p => p._id === productId);
            if (product) {
                total += product.price * qty;
            }
        });
        return total;
    };

    const clearCart = () => setCart(createEmptyCart());

    const placeOrder = () => {
        const items = Object.entries(cart)
            .map(([key, qty]) => {
                const [productId, size] = key.split("_");
                const product = products.find(p => p._id === productId);
                return product ? { product, qty, size } : null;
            })
            .filter(Boolean);
        if (items.length === 0) return null;
        const order = {
            id: `order_${Date.now()}`,
            createdAt: Date.now(),
            items,
            amount: getCartAmount(),
            userEmail: user?.email || null,
        };
        setOrders(prev => [order, ...prev]);
        clearCart();
        return order.id;
    };

    const login = ({ name, email }) => setUser({ name, email });
    const logout = () => setUser(null);

    const filteredProducts = useMemo(() => {
        let list = products;

        if (selectedCategory !== "All") {
            list = list.filter(p => p.category === selectedCategory);
        }
        if (selectedSubCategory !== "All") {
            list = list.filter(p => p.subCategory === selectedSubCategory);
        }
        if (selectedSizes.size > 0) {
            list = list.filter(p => p.sizes.some(s => selectedSizes.has(s)));
        }
        if (searchQuery.trim()) {
            const q = searchQuery.trim().toLowerCase();
            list = list.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q)
            );
        }
        list = list.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
        if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
        if (sortBy === "newest") list = [...list].sort((a, b) => b.date - a.date);
        if (sortBy === "bestseller") list = [...list].sort((a, b) => (b.bestseller === a.bestseller ? 0 : b.bestseller ? 1 : -1));

        return list;
    }, [products, selectedCategory, selectedSubCategory, selectedSizes, searchQuery, priceRange, sortBy]);

    const value = {
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartCount,
        getCartAmount,
        clearCart,
        // orders
        orders,
        placeOrder,
        // auth
        user,
        login,
        logout,
        // filters
        filteredProducts,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedSubCategory,
        setSelectedSubCategory,
        selectedSizes,
        setSelectedSizes,
        priceRange,
        setPriceRange,
        sortBy,
        setSortBy
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
