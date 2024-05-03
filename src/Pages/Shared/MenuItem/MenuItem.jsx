export default function MenuItem({ item }) {
    const { image, name, recipe, price } = item;
    return (
        <div className="flex gap-5">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h4 className="uppercase">{name}----------</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    )
}