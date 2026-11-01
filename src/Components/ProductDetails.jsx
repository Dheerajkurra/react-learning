import { useParams } from "react-router"
export default function ProductDetails() {

    const { productId } = useParams();

    return <h2>Product ID: {productId}</h2>;

}