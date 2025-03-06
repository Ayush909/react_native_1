export interface ReceiptItem {
    name: string;
    price: number;
    quantity: number;
}

interface ItemsListProps {
    items: ReceiptItem[];
}

const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
    return (
        <div>
            <h2>Items List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemsList;