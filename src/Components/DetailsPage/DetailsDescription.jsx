
const DetailsDescription = ({ products }) => {

    const { Description } = products
    return (
        <div className="bg-white my-10 lg:px-16 px-4">
            {
                products.map(item => (
                    <div key={item?.Product_Code} className="border px-2">
                        <h2 className="text-2xl font-bold py-3 underline">Description</h2>
                        <div className="w-4/6 mb-5">
                            <img src={item?.Description?.Description_Image} alt="" />
                        </div>
                        <div className="space-y-3 ">
                            <h3 className="text-2xl font-bold">{item?.Description?.Description_Title_One}</h3>
                            <p>{item?.Description?.Description_Text_One}</p>

                            <h3 className="text-2xl font-bold">{item?.Description?.Description_Title_Two}</h3>
                            <p>{item?.Description?.Description_Text_Two}</p>

                            <h3 className="text-2xl font-bold">{item?.Description.Description_Title_Three} </h3>
                            <p>{item?.Description?.Description_Text_Three}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default DetailsDescription;