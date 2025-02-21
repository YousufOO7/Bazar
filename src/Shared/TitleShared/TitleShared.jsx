

const TitleShared = ({ subHeading, heading }) => {
    return (
        <div className=" md:w-7/12 lg:w-5/12 mx-auto text-center my-3">
            <h3 className="text-2xl md:text-3xl font-semibold uppercase py-2">{heading}</h3>
            <p className="mb-2">{subHeading}</p>
        </div>
    );
};

export default TitleShared;