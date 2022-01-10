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





    