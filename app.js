const getcolor = () => {
    //hex code for color code
    const randomnumber = Math.floor(Math.random()*16777215);
    const randomcode="#"+randomnumber.toString(16);

    console.log(randomnumber,randomcode);
    document.body.style.background=randomcode;
    document.getElementById("color-code").innerText=randomcode;  

    navigator.clipboard.writeText(randomcode);

}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

//init call
getcolor();