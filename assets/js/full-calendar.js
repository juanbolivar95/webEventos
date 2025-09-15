
document.addEventListener("DOMContentLoaded", function () {
    const fullCalendarElement = document.querySelector('full-calendar')

    fullCalendarElement.options = {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }
    }
});