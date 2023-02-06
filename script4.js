// switch operator

let city = "indore"
switch (city) {
    case 'pune':
        console.log('MH')
    case 'indore':
        console.log('MP')
    case 'jaipur':
        console.log('RJ')
    case 'kanpur':
        console.log('UP')
    default:
        console.log('in correct city name')
}

//program 2

//let city = "indore"
switch (city) {
    case 'pune':
        console.log('MH')
        break
    case 'indore':
        console.log('MP')
        break
    case 'jaipur':
        console.log('RJ')
        break
    case 'kanpur':
        console.log('UP')
        break
    default:
        console.log('in correct city name')
}

// program 3

//let city ="indore"
switch (city){
    case 'pune':
        case 'nagpur':
        console.log('MH')
        break
case 'indore':
    case 'bhopal':
    console.log('MP')
    break
    case 'jaipur':
        console.log('RJ')
        break
        case 'kanpur':
            case 'udaipur':
            console.log('UP')
            break
            default:
                console.log('in correct city name')
}


