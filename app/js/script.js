const wineList = [
    { id: 1, name: "Sassicaia", grape: "Cabernet Sauviginion", country: "Italy", year: "1996", isCheck: false },
]



//Функция для отрисовки массива в таблицу
const renderList = (list) => {
    console.log(list)
    let tableBody = document.querySelector('.table tbody')
    tableBody.innerHTML = ''
    list.map((field) => {
        // console.log(field)
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        const tr = document.createElement('tr')
        Object.keys(field).map((item, key) => {
            // console.log(item)
            // console.log(key)
            if (item == 'isCheck') {
                let td = document.createElement('td')
                td.appendChild(checkbox)
                tr.appendChild(td)
            } else {
                let td = document.createElement('td')
                td.innerHTML = field[item]
                tr.appendChild(td)
            }
        })
        tableBody.appendChild(tr)
    })
}
renderList(wineList)

//Функция для добавления данных в массив из инпута 
document.querySelector('.input__btn').addEventListener('click', function addRow(event) {
    event.preventDefault()
    console.log('add row is working')
    //Создаем переменные 
    let table = document.querySelector('.table')
    let inputName = document.querySelector('.input__name').value
    let inputGrape = document.querySelector('.input__grape').value
    let inputCountry = document.querySelector('.input__country').value
    let inputYear = document.querySelector('.input__year').value
    const newObj = {
        id: wineList.length + 1,
        name: inputName,
        grape: inputGrape,
        country: inputCountry,
        year: inputYear,
        isCheck: false,
    }
    wineList.push(newObj)
    renderList(wineList)
})

//Функция сортировки 
document.querySelectorAll('th').forEach(th => th.addEventListener('click', function sortColumn(e){
    e.preventDefault()
    console.log('sort is working')
}))

function deleteRow(list){
    list.pop()
    console.log(list)
}
//функция удаления строки
document.querySelector('.delete__btn').addEventListener('click', function deleteAll(){
    console.log('delete')
    deleteRow(wineList)
            // let tableBody = document.querySelector('.table tbody')
            // let row = document.querySelector('tr')
            // tableBody.removeChild('row')
})


document.querySelector('thead th:first-child').onclick = e => {
    console.log('hey')
    const tbody = document.querySelector('tbody');
    const rows = [...document.querySelectorAll('tbody tr')];
    rows.sort((tr1, tr2) => {
       if (parseInt(tr1.querySelector('td').innerText) < parseInt(tr2.querySelector('td').innerText)) {
         return -1;
       } else {
         return 1;
       }
    });
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
 }
// let sortedRows = Array.from(table.rows)
//       .slice(1)
//       .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

//     table.tBodies[0].append(...sortedRows);




// function deleteRow(list){
    //     list.map((field)=>{
    //         {Object.keys(field).map((item, key) =>{
    //             // console.log(item[key])
    //             if(item.checked == true){
    //                 console.log('checkbox checked')
    //             }
    //         })}
           
    //     })
    // }
    // document.querySelector('.delete__btn').addEventListener('click', function deleteBtn(event) {
    //     event.preventDefault()
    //     console.log('delete btn')
    //     deleteRow(wineList)
    // })



// const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

// const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
//     v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
//     )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// // do the work...
// document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
//     const table = th.closest('table');
//     Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
//         .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
//         .forEach(tr => table.appendChild(tr) );
// })));



