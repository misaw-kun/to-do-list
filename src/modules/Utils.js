export function Task(title, details="no details", date="no due date", priority="low") {
    return {
        id: Date.now(),
        checked: false,
        title: title,
        details: details,
        date: date,
        priority: priority
    }
}

export function Project(title) {

}