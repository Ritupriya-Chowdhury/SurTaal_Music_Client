

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-8/12 text-center my-8">
           
            <p className="text-4xl uppercase border-y-4 py-4">{heading}</p>
            <p className="text-blue-500 text-2xl my-4">. . . .{subHeading}. . . .</p>
        </div>
    );
};

export default SectionTitle;