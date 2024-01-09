// alices are used as short name for long type
type stringOrNumber = string | number
type userObject = { name: string, uid: stringOrNumber }


const greet = (user: userObject) => {
    console.log(`${user.name} has uid ${user.uid}`)
}

greet({name:'shehroz',uid:14});