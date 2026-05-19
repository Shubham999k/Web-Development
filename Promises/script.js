async function getdata(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value === 3) {
                reject("Query Not Found")
            } else {
                console.log("Data Sent", value)
                resolve("Query Solved")
            }
        }, 2000)
    })
}

// getData(1)
//     .then(() => {
//         return getdata(2)
//     })
//     .then(() => {
//         return getdata(3)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

await getdata(1)
await getdata(2)
await getdata(3)
await getdata(4)
await getdata(5)