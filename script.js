const current_date = new Date()
const get_year = current_date.getFullYear()
const get_element = document.querySelector('#add_year')

get_element.innerHTML = get_year
