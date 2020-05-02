import Axios from 'axios';

function fetchPhones() {
    return Axios
        .get("http://localhost:8080/api/telephones")
        .then(response => response.data);
};

function fetchPhonesDesc() {
    return Axios
        .get(`http://localhost:8080/api/telephones/desc`)
        .then(response => response.data);
};

function fetchPhonesAsc() {
    return Axios
        .get(`http://localhost:8080/api/telephones/asc`)
        .then(response => response.data);
};

function fetchPhone(id) {
    return Axios
    .get(`http://localhost:8080/api/telephone/${id}`)
    .then(response => response.data);
};

export default { fetchPhones, fetchPhone, fetchPhonesDesc, fetchPhonesAsc };