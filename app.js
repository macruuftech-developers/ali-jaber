let musicBtn = document.querySelector("#musicBtn");
let musicList = document.querySelector(".music-list");
let closeBtn = document.querySelector("#close");
let listSurah = document.querySelector("#listSurah");
musicBtn.addEventListener("click", () => {
  musicList.classList.toggle("show");
});
closeBtn.addEventListener("click", () => {
  musicBtn.click();
});

const sura = async () => {
  const res = await fetch("https://api.alquran.cloud/v1/surah");
  const data = await res.json();
  suraName(data);
};
sura();

function suraName(data) {
  data.data.forEach((element) => {
    let surah = ` 
        <li>
        <div class="row">
            <span class = 'Surah'>${element.number}. ${element.englishName}</span>
            <p class='none'>${element.number}</p>
        </div>
    </li>
        `;
    listSurah.innerHTML += surah;
  });
}
let surahNum = 1;

SurahSearch(surahNum);

function SurahSearch(number, role) {
  const searchName = async (id) => {
    let url = `https://api.alquran.cloud/v1/surah/`;
    let urlSurah = url + id;
    const res = await fetch(urlSurah);
    const data = await res.json();
    let nub = "";
    if (data.data.number > 9) {
      if (data.data.number > 100) {
        nub = `${data.data.number}`;
      } else {
        nub = `0${data.data.number}`;
      }
    } else {
      nub = `00${data.data.number}`;
    }
  };
  searchName(number);
}
