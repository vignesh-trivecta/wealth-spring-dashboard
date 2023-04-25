import Layout from ".";
import CreateBasket from "@/components/admin/createBasket";

const Basket = () => {
    return(
        <Layout>
            <div style={{height: '80vh'}}> 
                <CreateBasket/>
            </div>
        </Layout>
    )
}

export default Basket;