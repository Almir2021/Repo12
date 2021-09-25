var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: [
          'Let It Rock',
           'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: [
          '1999', 
          'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  // Keep a copy of the collection for tests

  var oldCollection = JSON.parse(JSON.stringify(collection));

  function updateRecords(object , id ,prop, value) {
     
    // Only change code below this line
    if (prop !== 'tracks' && value !== "") {
        collection[id][prop] = value;
      } else if (prop === "tracks" && collection[id].hasOwnProperty("tracks") === false) {
        collection[id][prop] = [value];
      } else if (prop === "tracks" && value !== "") {
        collection[id][prop].push(value);
      } else if (value === "") {
        delete collection[id][prop];
      }
      return records;


// Only change code above this line


  }
   console.log (updateRecords(collection,5429, 'artist', 'ABBA' ));
   module.exports = updateRecors;