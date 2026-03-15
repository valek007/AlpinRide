export function initCalendar() {
    const calendar = document.getElementById('calendar');
    const leftBox = document.getElementById('month-box-left');
    const rightBox = document.getElementById('month-box-right');
    const confirmBtn = document.getElementById('calendar-confirm');

    const departItem = document.getElementById('depart-item');
    const returnItem = document.getElementById('return-item');

    // --- STATE VARIABLES ---
    let activeInput = null; 
    let tripType = document.querySelector('input[name="trip"]:checked').value; 
    let selectedDates = []; // Format: ['YYYY-MM-DD', 'YYYY-MM-DD']
    let curDate = new Date();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    // --- CONTROL FUNCTIONS ---
    function openCalendar(inputEl) {
        activeInput = inputEl;
        calendar.classList.add('active');
        renderMonths();
    }

    function closeCalendar() {
        calendar.classList.remove('active');
        activeInput = null;
    }

    function renderMonths() {
        if (!leftBox || !rightBox) return;

        const leftMonth = curDate.getMonth();
        const leftYear = curDate.getFullYear();
        
        let rightMonth = leftMonth + 1;
        let rightYear = leftYear;
        if (rightMonth > 11) { 
            rightMonth = 0; 
            rightYear++; 
        }

        renderMonth(leftYear, leftMonth, leftBox);
        
        if (tripType === '1') {
            rightBox.style.display = 'flex';
            renderMonth(rightYear, rightMonth, rightBox);
        } else {
            rightBox.style.display = 'none';
        }
        
        updateRangeStyles();
    }

    function renderMonth(year, month, boxEl) {
        boxEl.innerHTML = '';
        
        const header = document.createElement('div');
        header.className = 'month-header';
        
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '<'; prevBtn.type = 'button';
        prevBtn.onclick = (e) => { e.stopPropagation(); curDate.setMonth(curDate.getMonth() - 1); renderMonths(); };

        const nextBtn = document.createElement('button');
        nextBtn.textContent = '>'; nextBtn.type = 'button';
        nextBtn.onclick = (e) => { e.stopPropagation(); curDate.setMonth(curDate.getMonth() + 1); renderMonths(); };

        const title = document.createElement('span');
        title.textContent = `${months[month]} ${year}`;

        header.append(prevBtn, title, nextBtn);
        boxEl.appendChild(header);

        const titles = document.createElement('div');
        titles.className = 'days-titles';
        daysOfWeek.forEach(d => {
            const dEl = document.createElement('div');
            dEl.className = 'day-title'; dEl.textContent = d;
            titles.appendChild(dEl);
        });
        boxEl.appendChild(titles);

        const daysContainer = document.createElement('div');
        daysContainer.className = 'days';

        const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('div');
            empty.className = 'day-title inactive';
            daysContainer.appendChild(empty);
        }

        for (let d = 1; d <= lastDate; d++) {
            const dayEl = document.createElement('div');
            dayEl.className = 'day-title';
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            dayEl.dataset.date = dateStr;
            dayEl.textContent = d;
            dayEl.addEventListener('click', () => selectDay(dateStr));
            daysContainer.appendChild(dayEl);
        }
        boxEl.appendChild(daysContainer);
    }

    function selectDay(dateStr) {
        if (tripType === '0') {
            selectedDates = [dateStr];
        } else {
            if (selectedDates.length !== 1) {
                selectedDates = [dateStr];
            } else {
                if (dateStr < selectedDates[0]) {
                    selectedDates = [dateStr];
                } else {
                    selectedDates.push(dateStr);
                }
            }
        }
        updateUI();
        renderMonths();
    }

    function updateUI() {
        departItem.querySelector('span').textContent = selectedDates[0] || 'Depart';
        if (tripType === '1') {
            returnItem.querySelector('span').textContent = selectedDates[1] || 'Return';
        }
    }

    function updateRangeStyles() {
        const allDays = document.querySelectorAll('.calendar .day-title[data-date]');
        allDays.forEach(day => {
            const d = day.dataset.date;
            day.classList.remove('selected', 'in-range');
            
            if (selectedDates.includes(d)) {
                day.classList.add('selected');
            }
            
            if (selectedDates.length === 2 && d > selectedDates[0] && d < selectedDates[1]) {
                day.classList.add('in-range');
            }
        });
    }

    // --- LISTENERS ---
    departItem.addEventListener('click', () => openCalendar(departItem));
    
    returnItem.addEventListener('click', () => { 
        if (tripType === '1') openCalendar(returnItem); 
    });

    confirmBtn.addEventListener('click', closeCalendar);

    document.querySelectorAll('input[name="trip"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            tripType = e.target.value;
            selectedDates = [];
            updateUI();
            if (tripType === '0') {
                returnItem.classList.add('return-disabled');
                returnItem.querySelector('span').textContent = 'N/A';
            } else {
                returnItem.classList.remove('return-disabled');
                returnItem.querySelector('span').textContent = 'Return';
            }
            renderMonths();
        });
    });
}