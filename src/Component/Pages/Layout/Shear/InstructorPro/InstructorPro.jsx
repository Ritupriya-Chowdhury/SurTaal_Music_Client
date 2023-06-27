

const InstructorPro = ({ topInstructor }) => {
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={topInstructor.instructorImage}  alt="" className="rounded-xl h-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{topInstructor.instructorName}</h2>
                <div className="text-lg text-blue-500">
                <p>Email: {topInstructor.instructorEmail}</p>
                <p> Number of Classes taken: {topInstructor.numClassesTaken}</p>
                <p> Name of the Classes: {topInstructor.musicClassName}</p>
                
                   
                </div>
            </div>
        </div>

    );
};

export default InstructorPro;