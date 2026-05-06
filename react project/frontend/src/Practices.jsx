export const Practices = () => {
    const student = [23];
    return (
        <>
            {/* type1: not much applicable */}
            {/* <p>{student.length && "NO student Found"}</p> */}

            {/* type2: better */}
            {/* <p>{student.length === 0 && "NO student Found"}</p> */}

            {/* type3: much better */}
            {/* <p>{!student.length && "NO student Found"}</p> */}

            {/* using boolean */}
            <p>{!Boolean(student.length) && "NO student Found"}</p>
            <p>Name of Students: {student.length}</p>
        </>
    )
}