let cells = 1   // assuming there's at least one cell being made
let colorList = ["#000000",
    "#000080",
    "#00008B",
    "#0000CD",
    "#0000FF",
    "#006400",
    "#008000",
    "#008080"]


    let colorOption = document.querySelector(".color-options")
    let grid = document.querySelector("#grid")
    let choosenColor = document.querySelector(".color-options")


    let defaultColor = "gray"

    function colorPick () {
        defaultColor = choosenColor.value
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
        cell.addEventListener("click", changeColor)
        return cell;
    }


    // add rows
    function addRow () {
        cells = 1
        let newRow = document.createElement("tr")
        newRow.classList.add("grid-row")
        grid.appendChild(newRow)

        for (let i = 0; i < cells; i++) {
            newRow.appendChild(createCell("grid-cell"))
        }
        
    }

    function addColumn () {
        cells++ // when we add a column, we are using the row numbers to fill in the whole column
        let rows = grid.getElementsByClassName("grid-row")

        for (let i = 0; i < rows.length; i++) {
            rows[i].appendChild(createCell("grid-cell"))
        }
    }


    function deleteRow () {
        cells--
        let rows = grid.getElementsByClassName("grid-row")
        let lastRow = grid.rows.length - 1

        for (let i = lastRow; i > lastRow - 1; i--) {
            grid.deleteRow(grid.rows[i])
        }
    }


    function deleteColumn () {
        cells = 1;
        let grid = document.getElementById("grid")
        let rows = grid.getElementsByClassName("grid-row")
        let lastColumn = grid.rows[0].cells.length - 1

        console.log(lastColumn)
        console.log(grid.rows.length)
    
        for (let i = 0; i < grid.rows.length; i++) {
            for (let j = lastColumn; j > lastColumn - 1; j--) {
                grid.rows[i].deleteCell(j);
            }
        }
    }

    