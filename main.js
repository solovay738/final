const cars = [
{
    name: "BMW M5 Competition",
    year: "2023",
    price: "85 000$",
    image: "https://hips.hearstapps.com/hmg-prod/images/2021-bmw-m5-competition-1146-1625696565.jpg?crop=0.547xw:0.461xh;0.164xw,0.490xh&resize=2048:*"
},
{
    name: "Mercedes E63 AMG",
    year: "2022",
    price: "79 500$",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTshGh-HKs3cu0tITdpMv2HwFS7RbxVmuCNo1ck4qX7SkowSmNJyNmS4bm&s=10"
},
{
    name: "Audi RS7",
    year: "2023",
    price: "88 000$",
    image: "https://www.netcarshow.com/Audi-RS7_Sportback_performance-2023-Front_Three-Quarter.78ebb386.jpg"
},
{
    name: "Lamborgini urus",
    year: "2025",
    price: "250 000$",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqsuEIqyCPCAoR4NLO-QlUAKgaBi9IZ0YK_6EGFXCV2hogQOCDdbMXLc&s=10"
    
},
{
    name: "Audi RS5",
    year: "2026",
    price:"120 000$",
    image: "https://www.topgear.com/sites/default/files/2026/03/2-Audi-RS5-review-2026.jpg"
},
{
    name: "BMW M5",
    year: "2024",
    price: "203 000$",
    image: "https://kolesa-uploads.ru/r/880x/e927e4de-c4f0-4f5a-ad49-935af9a0e2f3/bmw-m5-front3.jpg"
},
{
    name: "Porsche Panamera",
    year: "2024",
    price: "105 000$",
    image: "https://ddaudio.com.ua/assets/galleries/127923/594/1920x-2.jpg"
}
];

const catalog = document.getElementById("catalog");

function renderCars(carsList){

    catalog.innerHTML = "";

    carsList.forEach(car => {

        catalog.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">

            <div class="card car-card h-100">

                <img src="${car.image}" class="card-img-top" alt="${car.name}">

                <div class="card-body">

                    <h4>${car.name}</h4>

                    <p>Рік: ${car.year}</p>

                    <div class="price">
                        ${car.price}
                    </div>

                    <button class="btn btn-orange w-100 mt-3">
                        Детальніше
                    </button>

                </div>

            </div>

        </div>
        `;
    });
}

renderCars(cars);

document.getElementById("search").addEventListener("input", function(){

    const search = this.value.toLowerCase();

    const filtered = cars.filter(car =>
        car.name.toLowerCase().includes(search)
    );

    renderCars(filtered);
});