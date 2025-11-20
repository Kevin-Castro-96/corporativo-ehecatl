export interface Product {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	category: 'chatbot' | 'telefonia' | 'comunicaciones' | 'luces';
}

export interface ProductCardProps {
	product: Product;
	onViewProduct: (product: Product) => void;
	onBuyProduct: (product: Product) => void;
}
