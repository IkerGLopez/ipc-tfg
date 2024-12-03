const calendarData = {
            "2024": {
                "November": [15, 16, 17],
                //"October": [10, 11, 12]
            },
            "2025": {
                "January": [14, 15, 16]
            }
        };

        const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        function generateCalendar(year, monthName) {
            const calendarContainer = document.getElementById('calendar-container');
            calendarContainer.innerHTML = '';

            const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();
            const firstDay = new Date(year, monthIndex, 1).getDay();
            const adjustedFirstDay = (firstDay + 6) % 7; // Ajusta para que el lunes sea el primer día
            const totalDays = new Date(year, monthIndex + 1, 0).getDate();

            const title = document.createElement('h4');
            title.classList.add('text-center');
            title.textContent = `${monthName} ${year}`;
            calendarContainer.appendChild(title);

            const headerRow = document.createElement('div');
            headerRow.classList.add('calendar');
            weekdays.forEach(day => {
                const dayHeader = document.createElement('div');
                dayHeader.classList.add('calendar-day', 'empty');
                dayHeader.style.fontWeight = 'bold';
                dayHeader.textContent = day;
                headerRow.appendChild(dayHeader);
            });
            calendarContainer.appendChild(headerRow);

            const calendarGrid = document.createElement('div');
            calendarGrid.classList.add('calendar');

            for (let i = 0; i < adjustedFirstDay; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.classList.add('calendar-day', 'empty');
                calendarGrid.appendChild(emptyDay);
            }
            const highlightedDays = calendarData[year][monthName] || [];
            for (let day = 1; day <= totalDays; day++) {
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('calendar-day');
                dayDiv.textContent = day;

                if (highlightedDays.includes(day)) {
                    const highlightSpan = document.createElement('span');
                    highlightSpan.classList.add('highlight');
                    highlightSpan.textContent = day;
                    dayDiv.innerHTML = '';
                    dayDiv.appendChild(highlightSpan);
                }

                calendarGrid.appendChild(dayDiv);
            }

            calendarContainer.appendChild(calendarGrid);
        }


        // Event listeners para los botones
        function toggleActiveButton(selectedYear) {
            const btn2024 = document.getElementById('btn2024');
            const btn2025 = document.getElementById('btn2025');

            if (selectedYear === '2024') {
                btn2024.classList.add('btn-primary', 'active');
                btn2024.classList.remove('btn-secondary');
                btn2025.classList.remove('btn-primary', 'active');
                btn2025.classList.add('btn-secondary');
            } else {
                btn2025.classList.add('btn-primary', 'active');
                btn2025.classList.remove('btn-secondary');
                btn2024.classList.remove('btn-primary', 'active');
                btn2024.classList.add('btn-secondary');
            }
        }

        document.getElementById('btn2024').addEventListener('click', () => {
            toggleActiveButton('2024');
            generateCalendar('2024', 'November');
        });

        document.getElementById('btn2025').addEventListener('click', () => {
            toggleActiveButton('2025');
            generateCalendar('2025', 'January');
        });
        toggleActiveButton('2024');
        generateCalendar('2024', 'November');