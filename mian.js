function ciclowhile() {

    let g = 0
    let x = 1

    while (x <= 10) {

        g += Number(prompt('numero: '))

        x++
    }

    console.log(g)

}

function ciclodowhile() {

    let g = 0
    let x = 0

    do {
        g += Number(prompt('numero: '))
        x++
    } while (x <= 9)

}

function ciclofor() {

    let g = 0

    for (let x = 0; x < 10; x++) {
        g += Number(prompt('numero: '))
    } 

}