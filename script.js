function createTable() {
    //Write your code here
	let table = document.getElementById("myTable")

    let rowinput = prompt("Input number of rows")
    let rn = parseInt(rowinput)

    let callinput = prompt("Input number of column")
    let cn = parseInt(callinput)

    if(isNaN(rn) || isNaN(cn)) {
        return
    }

    if(rn <= 0 || cn <= 0) {
        alert("please enter the number greater than 0")
        return
    }

    for(let i = 0; i < rn; i++) {
        let row = document.createElement("tr")

        for(let j = 0; j < cn; j++) {

            let call = document.createElement("td")
            call.textContent = `Row-${i} Column-${j}`

            row.appendChild(call)
        }

        table.appendChild(row)
    }
  
}
