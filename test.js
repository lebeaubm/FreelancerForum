const Name = ["Douglas", "Farmer", "Jericho", "Wiley", "Cody", "Mendoza", "Cora", "Williams", "Oliver", "Lynch", "Malia", "Hardy"]
const Occupation = ["Software developer", "data science", "web developer", "Engineer", "hardware engineer","Computer system analyst"]
const Price = [10,20,30,40,50,60,70,80,90, 100]

function randomLance(){
    const Names = Math.floor(Math.random() * Name.length)
    const Occupations = Math.floor(Math.random() * Occupation.length)
    const Prices = Math.floor(Math.random() * Price.length)

    const Lance = {
        Name: Name[Names],
        Occupation: Occupation[Occupations],
        Price: Price[Prices]
    }

    return Lance
}

const ul = document.querySelector(".List")
const div= document.querySelector(".average-price")
const data = []

const interval = setInterval(() => {
    const rnd = randomLance()
    data.push(rnd)
    render()
    if(data.length === 10){
        clearInterval(interval)
    }
}, 1000)

function render() {
    let avg=0;
    const html = data.map((num) => {
        
        return `<li>${num.Name}  ${num.Occupation}  ${num.Price}</li>`
    })
    avg= data.reduce((sum,obj)=>sum+obj.Price,0)/data.length
    console.log(avg)
    
    
    ul.innerHTML = html.join("")
    div.textContent =avg
}


