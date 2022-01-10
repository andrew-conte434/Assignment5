let cells = 1   // assuming there's at least one cell being made
let colorList = ["white",
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink"]


    let colorOption = document.querySelector(".color-options")
    let grid = document.querySelector("#grid")
    let chosenColor = document.querySelector(".color-options")


    let defaultColor = "gray"

    // Select color from dropdown menu of colors
    function colorPick () {
        defaultColor = chosenColor.value
    }



    // populate color list
    // for(let i = 0; i < colorList.length; i++) {
    //     let color = document.createElement("option")
    //     color.innerHTML = colorList[i]
    //     colorOption.append(color)
    // }


    function createColorMenu() {
        // this populates the drop down menu
        let dropmenu = document.getElementById("drop")
        for(let i = 0; i < colorList.length; i++) {
            let color = document.createElement("option")
            color.classList.add(`${i}`)
            color.innerHTML = colorList[i]
            color.addEventListener('onclick', function () {
                console.log("Clicked")
            })
            colorOption.append(color)    
        }
    }

    

    function changeColor() {
        this.style.backgroundColor = defaultColor;
        this.classList.remove("uncolored")
    }

    function createCell(className) {
        let cell = document.createElement("td")
        cell.classList.add(className)
        cell.classList.add("uncolored")
        //cell.addEventListener("click", changeColor)
        cell.addEventListener("mousedown", changeColor)
        cell.addEventListener("mouseover", () => {
            if(clicked){
                cell.style.backgroundColor = defaultColor
                cell.classList.remove("uncolored")
            }
            console.log(clicked)
        })
        return cell;
    }

    //Add rows a new row to the grid
    function addRow () {
        //cells = 1
        let newRow = document.createElement("tr")
        newRow.classList.add("grid-row")
        grid.appendChild(newRow)

        for (let i = 0; i < cells; i++) {
            newRow.appendChild(createCell("grid-cell"))
        }
        
    }

    //Add columns to the grid
    function addColumn () {
        cells++ // when we add a column, we are using the row numbers to fill in the whole column
        let rows = grid.getElementsByClassName("grid-row")

        for (let i = 0; i < rows.length; i++) {
            rows[i].appendChild(createCell("grid-cell"))
        }
    }




    