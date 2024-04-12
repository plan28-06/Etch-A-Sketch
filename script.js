const container=document.querySelector('.container');
const size=document.querySelector('.size');
const reset=document.querySelector('.reset');
const blackcol=document.querySelector('.black');
const whitecol=document.querySelector('.white') ;
const col=document.querySelector('.color')
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
            column.appendChild(grid);
            j++;
        }
        j=0;
    }
}

size.addEventListener('click',function (){
    let choice=parseInt(prompt('Enter size of the board (make sure it is below 100) '));
    if (!choice){
        resetgrid()
        addGrid(16)
    }
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
    for (let individualCol of allcolumn){
        container.removeChild(individualCol)
    }
}