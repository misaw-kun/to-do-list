export function Task(title, date, details="no details", priority="low") {
    return {
        id: Date.now(),
        checked: false,
        title: title,
        date: date,
        details: details,
        priority: priority
    }
}

export function Project(title) {

}

export function getDateFormatted(date) {
    const year = date.split('-')[0]
    const month = date.split('-')[1]
    const day = date.split('-')[2]
    return `${day}/${month}/${year}`
}