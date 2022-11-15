const holdingNazwa = document.getElementById("holdingnazwa");
const holdingCreate = document.getElementById("holdingcreate");
const holdingList = document.getElementById("holdingi");
const firmaNazwa = document.getElementById("firmanazwa");
const firmaAdres = document.getElementById("firmaadres");
const firmaNIP = document.getElementById("firmanip");
const firmaPrzychody = document.getElementById("firmaprzychody");
const firmaDochody = document.getElementById("firmadochody");
const firmaCreate = document.getElementById("firmacreate");
const calculateBonifikataForHolding = document.getElementById("calculatebonifikataholding");
const firmaList = document.getElementById("firmy");
const calculateBonifikataForFirma = document.getElementById("calculatebonifikatafirma");
const serializeXML = document.getElementById("serializexml");
const serializeJSON = document.getElementById("serializejson");
const messages = document.getElementById("messageoutput");

const updateFirma = async () => {
    const holdingListValue = JSON.stringify({
        "holdingname": holdingList.value
    });
    fetch("http://localhost:8000/firmy",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: holdingListValue
    })
    .then(response => response.json())
    .then(data => {
        firmaList.innerHTML = "";
        for(let d of data){
            const opcja = document.createElement("option");
            opcja.setAttribute("value",d);
            opcja.innerText = d;
            firmaList.appendChild(opcja);
        }
    });
}

holdingCreate.addEventListener("click", async e => {
    const holdingNazwaValue = JSON.stringify({
        "nazwa": holdingNazwa.value
    });
    await fetch("http://localhost:8000/addholding",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: holdingNazwaValue
    })
    .then(response => response.text())
    .then(data => messages.value = data);
    await fetch("http://localhost:8000/holdings")
    .then(response => response.json())
    .then(data => {
        holdingList.innerHTML = "";
        for(let d of data){
            const opcja = document.createElement("option");
            opcja.setAttribute("value",d);
            opcja.innerText = d;
            holdingList.appendChild(opcja);
        }
    });
});

holdingList.addEventListener("change", async e => {
    updateFirma();
});

firmaCreate.addEventListener("click", async e => {
    const firmaCreateBody = JSON.stringify({
        "nazwa": firmaNazwa.value,
        "adres": firmaAdres.value,
        "nip": firmaNIP.value,
        "przychody": firmaPrzychody.value,
        "dochody": firmaDochody.value,
        "holdingname": holdingList.value
    });
    fetch("http://localhost:8000/addfirma",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: firmaCreateBody
    })
    .then(response => response.text())
    .then(data => {
        messages.value = data;
        updateFirma();
    });
});

calculateBonifikataForFirma.addEventListener("click", async e => {
    fetch("http://localhost:8000/bonifikata",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "nazwa": firmaList.value
        })
    })
    .then(response => response.text())
    .then(data => {
        messages.value = data;
    });
});

calculateBonifikataForHolding.addEventListener("click", async e => {
    fetch("http://localhost:8000/bonifikata",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "nazwa": holdingList.value
        })
    })
    .then(response => response.text())
    .then(data => {
        messages.value = data;
    });
});

serializeXML.addEventListener("click", async e => {
    fetch("http://localhost:8000/xml",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "nazwa": firmaList.value
        })
    })
    .then(response => response.text())
    .then(data => {
        messages.value = data;
    });
});

serializeJSON.addEventListener("click", async e => {
    fetch("http://localhost:8000/json",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "nazwa": firmaList.value
        })
    })
    .then(response => response.text())
    .then(data => {
        messages.value = data;
    });
});