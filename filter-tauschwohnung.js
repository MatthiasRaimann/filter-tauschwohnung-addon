queryAllTauschwohnungen()

function queryAllTauschwohnungen() {
    const listings = Array.from(document.querySelectorAll('.result-list__listing'))
    let wohnungstausch = 0
    listings.forEach(listing => {
        const label = listing.querySelector('div.result-list-entry__realtor-data-container span.font-ellipsis')
        console.log('label element', label)

        if (label && (label.innerText === 'Tauschwohnung Wohnungstausch' || label.innerText === 'Wohnungsswap .de')) {
            wohnungstausch++
            listing.style.display = 'none'
        }
    })

    if (wohnungstausch === 0) return
    const count = document.createElement('div')
    count.innerHTML = `${wohnungstausch} Wohnungstausch-Elemente entfernt`
    count.style = `position: fixed; top: 10%; left: 50%; transform: translate(-50%, -50%); background: white; color: red; padding: 10px; font-weight: bold;z-index:50`
    document.body.appendChild(count)
}
