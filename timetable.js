let button = document.getElementById("button");
    let makepdf = document.getElementById("makepdf");
 
    button.addEventListener("click", function () {
        let mywindow = window.open("", "PRINT", 
                "height=400,width=600");
 
        mywindow.document.write(makepdf.innerHTML);
 
        mywindow.document.close();
        mywindow.focus();
 
        mywindow.print();
        mywindow.close();
 
        return true;
    });