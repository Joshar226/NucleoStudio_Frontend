export function formatDate(isoString : Date) {
    const formatter = Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    return formatter.format(isoString)
}