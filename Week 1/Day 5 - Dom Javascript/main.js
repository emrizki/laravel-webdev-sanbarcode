var items = [
  ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', './img/logitek.jpg'],
  ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', './img/msi.jpg'],
  ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', './img/genius.jpeg'],
  ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', './img/jerry.jpg']
]

// RELEASE 0

const listBarang = document.getElementById("listBarang")

const printItems = (array) => {
  let tampung = ""

  array.forEach(el => {
    tampung += `<div class="card" style="width: 18rem;">
    <img src="${el[4]}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title" id="itemName">${el[1]}</h5>
        <p class="card-text" id="itemDesc">${el[3]}</p>
        <p class="card-text">Rp ${el[2]}</p>
        <a href="#" class="btn btn-primary" onclick="addToCart()">Tambahkan ke keranjang</a>
    </div>
  </div>`
  })
  return listBarang.innerHTML = tampung
}

printItems(items)


// RELEASE 1
// FILTER APAKAH DALAM ARRAY TERDAPAT KEYWORD TERSEBUT

const filter = (keyword) => {
  const filteredArray = []

  items.forEach(el => {
    const itemName = el[1]
    const match = itemName.toLowerCase().includes(keyword.toLowerCase())
    if(match) {
      filteredArray.push(el)
    }
  })
  return filteredArray
}

// TAMPILKAN HASIL FILTERNYA

const searchForm = document.getElementById("formItem")

searchForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const keyword = document.getElementById("keyword").value

  const filteredItems = filter(keyword)
  printItems(filteredItems)
})

// TAMPILKAN ITEMNYA DENGAN KEYUP, AGAR TANPA KLIK SEARCH DAN LEBIH INTERAKTIF

const inputSearch = document.getElementById("keyword")
inputSearch.addEventListener("keyup", (event) => {
  const value = event.target.value

  const filterKeyUp = filter(value)
  printItems(filterKeyUp)
})

// RELEASE 2

let keranjang = 0

const addToCart = () => {
  keranjang++
  const cart = document.getElementById('cart')
  cart.innerHTML = `<i class="fas fa-shopping-cart"></i>(${keranjang})`
}