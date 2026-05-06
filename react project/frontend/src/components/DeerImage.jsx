const DeerImage = () => {
    const name = "Deer in forest"; const rating = "9.5 ⭐"; const summary = "here we are seeing the beautiful animal in the forest very easily";
    const returnGeneral = () => {
        const general = "Forest view";
        return general;
    }
    const watch = () => {
        if (age >= 18) return "Watch Now";
        return "Not Available";
    }
    //lets do some thing where age matters given below
    let age = 19;

    let canwatch = "Not Available"
    if (age >= 18) canwatch = "Watch Now";


    // type 1: using if condition
    // if(age<=18){
    //     return (
    //   <div className="border w-100">
    //     <div>
    //       <img src="Deer.webp" alt="deer" height={400} width={500}/>
    //     </div>
    //     <h2>
    //       <b>Here is our Deer: {name}</b>
    //     </h2>
    //     <h3>
    //       <b>Rating:{rating}</b>
    //     </h3>
    //     <h1><b>Rating:{5 + 9.1}</b>
    //     </h1>
    //     <p>{summary}</p>
    //     <p >General:{returnGeneral()}</p>
    //     <button>not available</button>
    //   </div>
    // )
    // }

    // type 2: just change the condition inside the button
    //   return (
    //   <div className="border w-100 ">
    //     <div>
    //       <img src="Deer.webp" alt="deer" height={400} width={500}/>
    //     </div>
    //     <h2>
    //       <b>Here is our Deer: {name}</b>
    //     </h2>
    //     <h3>
    //       <b>Rating:{rating}</b>
    //     </h3>
    //     <h1><b>Rating:{5 + 9.1}</b>
    //     </h1>
    //     <p>{summary}</p>
    //     <p >General:{returnGeneral()}</p>
    //     <button>{age>=18 ? "watch Now !":"Not Available"}</button>
    //   </div>
    // )
    // type 3: using variable

    return (
        <div className="border w-100">
            <div>
                <img src="Deer.webp" alt="deer" height={400} width={500} />
            </div>
            <h2>
                <b>Here is our Deer: {name}</b>
            </h2>
            <h3>
                <b>Rating:{rating}</b>
            </h3>
            <h1><b>Rating:{5 + 9.1}</b>
            </h1>
            <p>{summary}</p>
            <p >General:{returnGeneral()}</p>
            <button>{canwatch}</button>
        </div>
    )
    // type 4: using dynamic values and creaet function
    // return (
    //   <div className="border w-100">
    //     <div>
    //       <img src="Deer.webp" alt="deer" height={400} width={500} />
    //     </div>
    //     <h2>
    //       <b>Here is our Deer: {name}</b>
    //     </h2>
    //     <h3>
    //       <b>Rating:{rating}</b>
    //     </h3>
    //     <h1><b>Rating:{5 + 9.1}</b>
    //     </h1>
    //     <p>{summary}</p>
    //     <p >General:{returnGeneral()}</p>
    //     <button>{watch()}</button>
    //   </div>
    // )
}
export default DeerImage



