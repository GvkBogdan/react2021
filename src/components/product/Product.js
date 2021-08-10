import './Product.css'
export default function Product({title,price}) {
  //let {title, price} = props; - можна так задавати, а зверха лиш (props)

    return (
        <div>

            <div className={'product'}>
                <h2>{title}</h2>
                <h3>price is = {price}</h3>
                <hr/>
            </div>


        </div>
    );
}