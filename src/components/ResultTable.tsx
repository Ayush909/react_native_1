export interface ReceiptItem {
    name: string;
    price: number;
    quantity: number;
}

interface ResultTableProps {
    items: ReceiptItem[];
}

const ResultTable: React.FC<ResultTableProps> = ({ items }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Item Name</th>
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
    );
};

export default ResultTable;