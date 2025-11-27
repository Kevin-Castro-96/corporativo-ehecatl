export interface Product {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	category: 'chatbot' | 'telefonia' | 'comunicaciones' | 'luces';
	shopUrl: string;
}

export interface ProductCardProps {
	product: Product;
	onViewProduct: (product: Product) => void;
	onBuyProduct: (product: Product) => void;
}
