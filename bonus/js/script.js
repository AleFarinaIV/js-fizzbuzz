// Creo la variabile del contenitore
const grid = document.getElementById('grid')


for (let i = 1; i <=100; i++) {

    const container = document.createElement('div')
    grid.append(container)

    if (i % 3 == 0 && i % 5 == 0) {
        container.classList.add('fizzbuzz')
        container.innerHTML = 'Fizzbuzz'
        console.log('FizzBuzz')
    }else if (i % 3 == 0) {
        container.classList.add('fizz')
        container.innerHTML = 'Fizz'
        console.log('Fizz')
    }else if (i % 5 == 0) {
        container.classList.add('buzz')
        container.innerHTML = 'Buzz'
        console.log('Buzz')
    }else {
        container.classList.add('bg-base')
        container.innerHTML = i.toString()
        console.log(i)
    }
}

