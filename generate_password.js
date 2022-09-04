// generate password
function sample(collection){ 
    const index = Math.floor(Math.random() * collection.length)
    return collection[index]
}

function generatePassword(options){
    // set elements for user choosing 
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

    // create Collection for elements for further picking up
    let collection = []
    // console.log(options)
    if(options.lowercase === 'on'){
        collection = collection.concat(lowerCaseLetters.split(''))
    }
    if(options.uppercase === 'on'){
        collection = collection.concat(upperCaseLetters.split(''))
    }
    if(options.numbers === 'on'){
        collection = collection.concat(numbers.split(''))
    }
    if(options.symbols === 'on'){
        collection = collection.concat(symbols.split(''))
    }
    
    // remove elements which user want them
    if (options.excludeCharacters){
        console.log(`exclude characters: ${options.excludeCharacters}`)
        collection = collection.filter(character => !options.excludeCharacters.includes(character))
    } 

    // error message
    if (collection.length === 0){
        return 'There is no valid character in your selection.'
    }

    // return the password
    let password = ''
    for (let i =0; i<options.length; i++){
        password += sample(collection)
    }
    // console.log(password)
    return password
}

module.exports = generatePassword