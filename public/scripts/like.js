/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllLikedFreets(fields) {
    fetch('/api/liked')
        .then(showResponse)
        .catch(showResponse);
}

function likeFreet(fields) {
    fetch(`/api/liked/${fields.freetId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function unlikeFreet(fields) {
    fetch(`/api/liked/${fields.freetId}`, {method: 'DELETE'})
        .then(showResponse)
        .catch(showResponse);
}
