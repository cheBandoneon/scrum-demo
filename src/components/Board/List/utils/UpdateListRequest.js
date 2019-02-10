const UpdateListRequest = (updatedList) => {

    const request = {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(updatedList), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    }

    return request;
}

module.exports = UpdateListRequest;