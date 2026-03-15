export function initStationSelector() {
    const StationsByCountry = {
        Switzerland: ["Zermatt Bus Terminal","Interlaken Ost Bus Station","Grindelwald Bus Terminal","Lauterbrunnen Bahnhof","Lucerne Bahnhofquai","Geneva Bus Station","Bern PostAuto Terminal","Gstaad Bus Station","St. Moritz Bahnhof PostAuto","Verbier Village","Davos Platz Postautohaltestelle","Andermatt Gotthardpass","Täsch Bahnhof (Shuttle to Zermatt)","Flims Dorf Post"],
        France: ["Chamonix Sud Bus Station","Annecy Gare Routière","Grenoble Gare Routière","Nice Airport (Bus to Alps)","Bourg-Saint-Maurice Gare Routière","Morzine Gare Routière","Les Gets Gare Routière","Val d'Isère Centre","Courchevel 1850","Megève Place du Village"],
        Italy: ["Aosta Autostazione","Bolzano Autostazione","Trento Autostazione","Cortina d'Ampezzo Autostazione","Bormio Bus Station","Livigno Centro","Merano Autostazione","Sestriere Bus Stop","Ortisei (St. Ulrich) Autostazione","Canazei Piazza Marconi"],
        Austria: ["Innsbruck Hauptbahnhof Bus Terminal","Salzburg Süd Busbahnhof","Mayrhofen Bahnhof","Lech am Arlberg Postamt","Kitzbühel Hahnenkammbahn","Ischgl Seilbahn","Zell am See Postplatz","Bad Gastein Bahnhof","St. Anton am Arlberg Bahnhof","Sölden Postamt"],
        Germany: ["Garmisch-Partenkirchen Bahnhof (Bus Station)","Berchtesgaden Busbahnhof","Oberstdorf Busbahnhof","Füssen Bahnhof (Bus Station)","Mittenwald Bahnhof (Bus Station)"],
        Slovenia: ["Bled Bus Station","Bohinj Jezero","Kranjska Gora Avtobusna Postaja"]
    };

    const departInput = document.querySelector('#depart-station .station-display');
    const arrivalInput = document.querySelector('#arrival-station .station-display');
    const overlay = document.getElementById('station-dropdown-container');
    const dropdown = document.getElementById('station-dropdown');
    const arrivalItem = document.getElementById('arrival-station');

    let activeInput = null;

    // --- RESET FUNCTION WHEN TRIP TYPE CHANGES ---
    function updateArrivalState() {
        const oneWay = document.querySelector('#one-way').checked;
        
        departInput.value = ''; 
        arrivalInput.value = '';

        if (oneWay) {
            arrivalItem.classList.add('return-disabled');
            arrivalInput.placeholder = 'N/A'; 
        } else {
            arrivalItem.classList.remove('return-disabled');
            arrivalInput.placeholder = 'Arrival Station'; 
        }
    }

    document.querySelectorAll('input[name="trip"]').forEach(radio => {
        radio.addEventListener('change', updateArrivalState);
    });

    updateArrivalState();

    function openDropdown(inputEl) {
        activeInput = inputEl;
        overlay.style.display = 'flex';
        renderCountries();
    }

    function closeDropdown() {
        overlay.style.display = 'none';
        dropdown.innerHTML = '';
        activeInput = null;
    }

    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeDropdown();
    });

    function renderCountries() {
        dropdown.innerHTML = '';
        Object.keys(StationsByCountry).forEach(country => {
            const countryEl = document.createElement('div');
            countryEl.className = 'station-country';
            countryEl.textContent = country;

            const stationsContainer = document.createElement('div');
            stationsContainer.className = 'station-list hidden';

            StationsByCountry[country].forEach(station => {
                const stationEl = document.createElement('div');
                stationEl.className = 'station-item';
                stationEl.textContent = station;
                stationEl.addEventListener('click', () => {
                    if (activeInput.tagName === 'INPUT') {
                        activeInput.value = station;
                    } else {
                        activeInput.textContent = station;
                    }
                    closeDropdown();
                });
                stationsContainer.appendChild(stationEl);
            });

            countryEl.addEventListener('click', () => {
                stationsContainer.classList.toggle('hidden');
            });

            dropdown.appendChild(countryEl);
            dropdown.appendChild(stationsContainer);
        });
    }

    departInput.addEventListener('click', () => openDropdown(departInput));
    arrivalInput.addEventListener('click', () => {
        if (!arrivalItem.classList.contains('return-disabled')) {
            openDropdown(arrivalInput);
        }
    });
}