let img = document.getElementById('img')
let count = document.getElementById('count')
let inp = document.getElementById('inp')

function data(calback) {

    const getData = new XMLHttpRequest()

    getData.addEventListener('readystatechange', ()=>{

        if(getData.readyState === 4 && getData.status === 200){
            const jsonDate = JSON.parse(getData.responseText)
            jsonDate.forEach(count => {
                const countName = count
                // console.log(countName);
                calback(countName, undefined)
            });
            
        }else if(getData.readyState === 4){
            calback(undefined, 'Xato')
        }
    })

    getData.open('GET', 'https://restcountries.com/v3.1/all?fields=name,flags')
    getData.send()
}
data((data, err)=>{
    if (err) {
        
    }else{
        count.innerHTML += `<ul class="ul">
        <li><img src="${data.flags.png}"</li>
        <li>${data.name.common}</li>
        </ul>`
    }
})

    inp.addEventListener('input', ()=>{
    let val = inp.value.toLowerCase()
    const counts = document.querySelectorAll('.ul')
    counts.forEach((item)=>{

        if (item.lastElementChild.textContent.toLowerCase().includes(val)) {
            item.classList.remove('hidden')
        }else{
            item.classList.add('hidden')
        }
    })
})
