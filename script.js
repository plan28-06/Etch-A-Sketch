const container=document.querySelector('.container');
const size=document.querySelector('.size');
const reset=document.querySelector('.reset');
const blackcol=document.querySelector('.black');
const whitecol=document.querySelector('.white') ;
const col=document.querySelector('.color')
let gridcolor='black'
let colbutton=false
addGrid(16);


//function to create the grids
function addGrid(n){
    let i=0;
    let j=0;
    while (i<n){
        const column=document.createElement('div');
        column.classList.add('column');
        column.style.backgroundColor='white';
        container.appendChild(column);
        i++;
        while (j<n){
            const grid=document.createElement('div');
            grid.classList.add('grid');
            grid.style.backgroundColor='white';
            grid.addEventListener('mouseover',()=>{
                if (colbutton){
                    let red=Math.floor(Math.random()* 256) + 1;
                    let blue=Math.floor(Math.random()* 256) + 1;
                    let green=Math.floor(Math.random()* 256) + 1;
                    gridcolor=`rgb(${red},${green},${blue})`
                    grid.style.backgroundColor=gridcolor
                }
                else{ 
                grid.style.backgroundColor=gridcolor
                }
            })
            column.appendChild(grid);
            j++;
        }
        j=0;
    }
}

size.addEventListener('click',function (){
    let choice=parseInt(prompt('Enter size of the board (make sure it is below 100) '));
    resetgrid();
    addGrid(choice)
});

reset.addEventListener('click',function(){
    resetgrid();
    
    addGrid(16)
})

// To delete the created grid
function resetgrid(){
    const allcolumn=document.querySelectorAll('.column')
    gridcolor='black';
    for (let individualCol of allcolumn){
        container.removeChild(individualCol)
    }
}

function black(){
    gridcolor='black';
    colbutton=false;
}

function white(){
    gridcolor='white';
    colbutton=false;
}

function color1(){
    colbutton=true;
}

whitecol.addEventListener('click',white);
blackcol.addEventListener('click',black);
col.addEventListener('click',color1);