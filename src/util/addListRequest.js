const AddListRequest = (listName) => {
    const newList = {
      name: listName,
      cards: []
    }
    const request = {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(newList), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    }

    return request;
}

module.exports = AddListRequest;