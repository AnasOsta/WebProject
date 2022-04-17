const inpSearch = document.getElementById('inp-search');
const output = document.getElementById('output');
    /*  Sayfa başladı zaman lodader ve fatchCharcters mitodu çağrır     */ 
window.addEventListener('load', () => {
    loader();
    fetchCharcters();
});
    /*  Arama başladın zaman çalışacak
    *   Loader ve lodader ve fatchCharcters mitodu çağrır
    *   FatchCharcters mitodu arama elemanıverir    */ 
inpSearch.addEventListener('change', () => {
    let searchQuery = inpSearch.value;
    loader();
    fetchCharcters(searchQuery);
});
    /*  Bekleme sayfası çıkarıyor   */
function loader(){
    output.innerHTML = '<div class="spinner-wrapper"><div class="spinner"></div></div>'
}
    /*  Braking bad API getir ve ekrene çıkar   */
async function fetchCharcters(query){
    let res;

    if(query){
        res = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);
    }else{
        res = await fetch('https://www.breakingbadapi.com/api/characters');
    }

    let results = await res.json();

    output.innerHTML = "";
    /*  Fotoğraf ve detaları getir div"de ekle  */
    results.map(result => {
        const htmlString = `<img src="${result.img}" class="img">
            <div class="info-display">
                <h5>Name: ${result.portrayed}</h5>
                <hr>
                <h6>Actor Name: <span>${result.name}</span></h6>
                <h6>Nickname: <span>${result.nickname}</span></h6>
                <h6>Birthday: <span>${result.birthday}</span></h6>
                <h6>Status: <span>${result.status}</span></h6>
            </div>`;
        /*  Yeni div oluştur ve output class içinde bebek şeklide ekle    */
    let outputString = document.createElement('div');
    outputString.classList.add('col-md-3', 'mb-3', 'img-info');
    outputString.innerHTML = htmlString;
    output.appendChild(outputString);
    });
}